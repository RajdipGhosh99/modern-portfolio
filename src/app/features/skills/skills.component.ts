import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_ITEMS } from '../../core/data/portfolio-data';
import { SkillItem } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  allSkills = SKILL_ITEMS;
  isPaused = signal<boolean>(false);

  private readonly itemsPerRow = Math.ceil(this.allSkills.length / 3);
  private skillsRow1 = this.allSkills.slice(0, this.itemsPerRow);
  private skillsRow2 = this.allSkills.slice(this.itemsPerRow, this.itemsPerRow * 2);
  private skillsRow3 = this.allSkills.slice(this.itemsPerRow * 2);

  loopRow1 = computed<SkillItem[]>(() => [...this.skillsRow1, ...this.skillsRow1]);
  loopRow2 = computed<SkillItem[]>(() => [...this.skillsRow2, ...this.skillsRow2]);
  loopRow3 = computed<SkillItem[]>(() => [...this.skillsRow3, ...this.skillsRow3]);

  toggleMotion(): void {
    this.isPaused.update(v => !v);
  }
}
