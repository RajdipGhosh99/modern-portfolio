import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES, EDUCATION_LIST } from '../../core/data/portfolio-data';
import { Experience } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
  educationList = EDUCATION_LIST;
  showAll = signal(false);
  selectedTab = signal<string>('accolite');

  currentExp(): Experience | undefined {
    return this.experiences.find(e => e.id === this.selectedTab());
  }
}
