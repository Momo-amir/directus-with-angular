// components/hero-block/hero-block.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroBlock } from '../models/blocks';

@Component({
  selector: 'app-hero-block',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class HeroBlockComponent {
  @Input() block!: HeroBlock;

  getImageUrl(fileId: string): string {
    return `http://localhost:8055/assets/${fileId}`;
  }
}
