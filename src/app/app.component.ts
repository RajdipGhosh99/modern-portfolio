import { Component, OnInit, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo.service';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  scrollProgress = signal(0);
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.seoService.initDefaultSeo();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const doc = document.documentElement;
      const totalScroll = doc.scrollHeight - doc.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        this.scrollProgress.set(Math.min(100, Math.max(0, currentProgress)));
      }
    }
  }
}
