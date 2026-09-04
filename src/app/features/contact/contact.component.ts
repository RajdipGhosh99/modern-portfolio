import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PORTFOLIO_PROFILE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  profile = PORTFOLIO_PROFILE;
  copied = signal(false);
  formSuccess = signal(false);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  private platformId = inject(PLATFORM_ID);

  copyEmail(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.profile.email).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2500);
      });
    }
  }

  openCal(): void {
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

  sendMessage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${this.formData.subject || 'Opportunity'}`);
      const body = encodeURIComponent(
        `Hi Rajdip,\n\nMy name is ${this.formData.name} (${this.formData.email}).\n\n${this.formData.message}`
      );
      this.formSuccess.set(true);
      setTimeout(() => {
        window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
      }, 600);
    }
  }
}
