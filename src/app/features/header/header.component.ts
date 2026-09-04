import { Component, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PORTFOLIO_PROFILE } from '../../core/data/portfolio-data';
import { ThemeService } from '../../core/services/theme.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profile = PORTFOLIO_PROFILE;
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('hero');

  themeService = inject(ThemeService);
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 20);

      const sections = ['hero', 'skills', 'experience', 'projects', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            if (this.activeSection() !== s) {
              this.activeSection.set(s);
              this.seoService.setSectionSeo(s);
            }
            break;
          }
        }
      }
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
