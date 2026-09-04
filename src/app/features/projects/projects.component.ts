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

  getAvifUrl(url?: string): string {
    if (!url) return '';
    return url.replace(/\.(png|jpe?g)$/i, '.avif');
  }

  getPngUrl(url?: string): string {
    if (!url) return '';
    return url.replace(/\.avif$/i, '.png');
  }

  getPngFallback(url?: string): string {
    return this.getPngUrl(url);
  }

  handleImageError(event: Event, project: Project): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      const picture = img.closest('picture');
      if (picture) {
        const sources = picture.querySelectorAll('source');
        sources.forEach(s => s.remove());
      }
      if (!img.dataset['retried']) {
        img.dataset['retried'] = 'true';
        img.src = this.getPngUrl(project.imageUrl);
      }
    }
  }
}
