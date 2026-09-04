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
      } else {
        window.open('https://cal.com/rajdipghosh/call', '_blank');
      }
    }
  }
}
