import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../core/data/portfolio-data';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  allProjects = PROJECTS;
  selectedCategory = signal<string>('all');
  showAllProjects = signal<boolean>(true);

  displayedProjects = computed<Project[]>(() => {
    const cat = this.selectedCategory();
    let list = this.allProjects;
    if (cat === 'enterprise') {
      list = this.allProjects.filter(p => p.category === 'enterprise');
    } else if (cat === 'fullstack') {
      list = this.allProjects.filter(p => p.category === 'fullstack' || p.category === 'frontend');
    }

    if (cat === 'all' && !this.showAllProjects()) {
      return list.slice(0, 4);
    }
    return list;
  });

  setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  toggleExpand(): void {
    this.showAllProjects.update(v => !v);
  }
}
