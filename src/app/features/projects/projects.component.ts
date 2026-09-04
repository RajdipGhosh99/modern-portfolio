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
    if (!img) return;

    const retryCount = Number(img.dataset['retryCount'] || '0');
    if (retryCount === 0) {
      img.dataset['retryCount'] = '1';
      const picture = img.closest('picture');
      if (picture) {
        picture.querySelectorAll('source').forEach(s => s.remove());
      }
      img.removeAttribute('srcset');
      // Force direct load of the PNG fallback
      img.src = this.getPngUrl(project.imageUrl) + '?fallback=1';
    } else {
      // Graceful fallback to avoid broken image frame
      img.style.display = 'none';
      const wrapper = img.closest('.project-thumb-wrapper');
      if (wrapper && !wrapper.querySelector('.project-img-fallback')) {
        const fallback = document.createElement('div');
        fallback.className = 'w-100 h-100 d-flex flex-column align-items-center justify-content-center text-secondary project-img-fallback';
        fallback.innerHTML = `<i class="uil uil-presentation-lines fs-1 mb-1" style="color: var(--apple-blue)"></i><span class="fs-8 text-muted">${project.title}</span>`;
        wrapper.appendChild(fallback);
      }
    }
  }
}
