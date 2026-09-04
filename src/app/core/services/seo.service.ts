import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SeoConfig, MetaTagDefinition, DEFAULT_SEO_CONFIG, SECTION_SEO_PRESETS } from '../config/seo.config';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  /**
   * Reactive signal holding the currently active SEO configuration.
   */
  readonly currentConfig = signal<SeoConfig>(DEFAULT_SEO_CONFIG);

  /**
   * Initialize default site-wide SEO metadata and JSON-LD schema.
   */
  initDefaultSeo(customConfig?: Partial<SeoConfig>): void {
    const config = { ...DEFAULT_SEO_CONFIG, ...(customConfig || {}) };
    this.updateSeo(config);
  }

  /**
   * Dynamically update any subset of SEO tags (Title, Description, OpenGraph, Twitter, Canonical, etc.).
   */
  updateSeo(config: Partial<SeoConfig>): void {
    const merged: SeoConfig = { ...this.currentConfig(), ...config };
    this.currentConfig.set(merged);

    // 1. Page Title
    if (merged.title) {
      this.titleService.setTitle(merged.title);
    }

    // 2. Standard Search Meta Tags
    if (merged.description) {
      this.metaService.updateTag({ name: 'description', content: merged.description });
    }
    if (merged.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: merged.keywords });
    }
    if (merged.author) {
      this.metaService.updateTag({ name: 'author', content: merged.author });
    }
    if (merged.robots) {
      this.metaService.updateTag({ name: 'robots', content: merged.robots });
    }

    // 3. OpenGraph Tags (Facebook, LinkedIn, Discord, Slack)
    this.metaService.updateTag({ property: 'og:type', content: merged.ogType || 'website' });
    this.metaService.updateTag({ property: 'og:title', content: merged.ogTitle || merged.title });
    this.metaService.updateTag({ property: 'og:description', content: merged.ogDescription || merged.description });
    if (merged.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: merged.ogImage });
    }
    if (merged.ogImageAlt) {
      this.metaService.updateTag({ property: 'og:image:alt', content: merged.ogImageAlt });
    }
    if (merged.ogUrl) {
      this.metaService.updateTag({ property: 'og:url', content: merged.ogUrl });
    }
    if (merged.ogSiteName) {
      this.metaService.updateTag({ property: 'og:site_name', content: merged.ogSiteName });
    }

    // 4. Twitter Card Tags
    this.metaService.updateTag({ name: 'twitter:card', content: merged.twitterCard || 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: merged.twitterTitle || merged.title });
    this.metaService.updateTag({ name: 'twitter:description', content: merged.twitterDescription || merged.description });
    if (merged.twitterImage) {
      this.metaService.updateTag({ name: 'twitter:image', content: merged.twitterImage });
    }
    if (merged.twitterCreator) {
      this.metaService.updateTag({ name: 'twitter:creator', content: merged.twitterCreator });
    }
    if (merged.twitterSite) {
      this.metaService.updateTag({ name: 'twitter:site', content: merged.twitterSite });
    }

    // 5. Canonical URL Link
    if (merged.canonicalUrl) {
      this.setCanonicalUrl(merged.canonicalUrl);
    }

    // 6. Custom Meta Tags
    if (merged.customTags && merged.customTags.length > 0) {
      this.addMetaTags(merged.customTags);
    }

    // 7. Structured Data (JSON-LD Schema.org)
    if (merged.jsonLd) {
      this.setJsonLd(merged.jsonLd);
    }
  }

  /**
   * Dynamically switch SEO metadata to match a specific section preset
   * (e.g. 'hero', 'skills', 'experience', 'projects', 'contact').
   */
  setSectionSeo(sectionKey: string): void {
    const preset = SECTION_SEO_PRESETS[sectionKey];
    if (preset) {
      this.updateSeo(preset);
    }
  }

  /**
   * Add or update an arbitrary meta tag by name, property, or http-equiv.
   */
  addMetaTag(tag: MetaTagDefinition): void {
    if (tag.property) {
      this.metaService.updateTag({ property: tag.property, content: tag.content });
    } else if (tag.httpEquiv) {
      this.metaService.updateTag({ httpEquiv: tag.httpEquiv, content: tag.content });
    } else if (tag.name) {
      this.metaService.updateTag({ name: tag.name, content: tag.content });
    }
  }

  /**
   * Batch add or update arbitrary meta tags.
   */
  addMetaTags(tags: MetaTagDefinition[]): void {
    for (const tag of tags) {
      this.addMetaTag(tag);
    }
  }

  /**
   * Safely set or update the canonical <link rel="canonical"> element.
   */
  setCanonicalUrl(url: string): void {
    if (!this.document || !this.document.head) return;
    try {
      let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
      if (!link) {
        link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    } catch {
      // Ignored during non-DOM environments
    }
  }

  /**
   * Safely inject or update structured JSON-LD data into the document head.
   */
  setJsonLd(schema: object | object[]): void {
    if (!this.document || !this.document.head) return;
    try {
      let script: HTMLScriptElement | null = this.document.querySelector('script#seo-jsonld');
      if (!script) {
        script = this.document.createElement('script');
        script.id = 'seo-jsonld';
        script.type = 'application/ld+json';
        this.document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema, null, 2);
    } catch {
      // Ignored during non-DOM environments
    }
  }
}
