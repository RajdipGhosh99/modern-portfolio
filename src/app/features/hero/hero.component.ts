import { Component, signal, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PORTFOLIO_PROFILE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  profile = PORTFOLIO_PROFILE;
  roles = PORTFOLIO_PROFILE.roles;
  currentRoleIndex = signal(0);
  currentRole = signal(this.roles[0]);

  private timerInterval?: any;
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timerInterval = setInterval(() => {
        const nextIndex = (this.currentRoleIndex() + 1) % this.roles.length;
        this.currentRoleIndex.set(nextIndex);
        this.currentRole.set(this.roles[nextIndex]);
      }, 3200);
    }
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  openCalBooking(): void {
    if (isPlatformBrowser(this.platformId)) {
      // @ts-ignore
      if (window.Cal && window.Cal.ns && window.Cal.ns.call) {
        // @ts-ignore
        window.Cal.ns.call('openModal', {
          calLink: 'rajdipghosh/call',
          config: { layout: 'month_view', useSlotsViewOnSmallScreen: true }
        });
        return;
      }

      // Dynamically load Cal embed on user click to avoid initial third-party cookies
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.onload = () => {
        // @ts-ignore
        const Cal = (window as any).Cal;
        if (Cal) {
          Cal('init', 'call', { origin: 'https://app.cal.com' });
          Cal.config = Cal.config || {};
          Cal.config.forwardQueryParams = true;
          Cal.ns.call('ui', {
            cssVarsPerTheme: { dark: { 'cal-brand': '#2997ff' }, light: { 'cal-brand': '#0071e3' } },
            hideEventTypeDetails: false,
            layout: 'month_view'
          });
          Cal.ns.call('openModal', {
            calLink: 'rajdipghosh/call',
            config: { layout: 'month_view', useSlotsViewOnSmallScreen: true }
          });
        } else {
          window.open('https://cal.com/rajdipghosh/call', '_blank');
        }
      };
      script.onerror = () => {
        window.open('https://cal.com/rajdipghosh/call', '_blank');
      };
      document.head.appendChild(script);
    }
  }
}
