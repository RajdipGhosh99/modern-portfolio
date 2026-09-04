import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly router = inject(Router);
  readonly baseUrl = environment.BASE_URL.replace(/^https?:\/\//, '');

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: '404: Page Not Found - Rajdip Ghosh',
      description: 'The requested page could not be found on Rajdip Ghosh - Senior Software Engineer Portfolio.',
      robots: 'noindex, nofollow'
    });
  }

  navigateToSection(sectionId: string): void {
    this.router.navigate(['/'], { fragment: sectionId });
  }
}
