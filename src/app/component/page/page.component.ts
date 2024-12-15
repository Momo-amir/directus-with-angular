import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DirectusService } from '../../services/directus.service';
import { Pages } from '../../models/pages';
import { HeroBlockComponent } from '../hero/hero.component';
import { PageBlock } from '../../models/page-block';
import { HeroBlock, RichTextBlock } from '../../models/blocks';
@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, HeroBlockComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements OnInit {
  page: Pages | null = null;
  sortedBlocks: typeof this.page.block = [];

  constructor(
    private route: ActivatedRoute,
    private directusService: DirectusService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.loadPage(slug);
      }
    });
  }

  private async loadPage(slug: string) {
    this.page = await this.directusService.getPageBySlug(slug);
    if (this.page?.block) {
      this.sortedBlocks = [...this.page.block].sort((a, b) => a.sort - b.sort);
    }

    if (this.page?.title) {
      this.titleService.setTitle(this.page.title);
    }

    console.log('Loaded page:', this.page);
  }

  isHeroBlock(
    block: Pages['block'][0]
  ): block is Pages['block'][0] & { item: HeroBlock } {
    return block.collection === 'HeroBlock';
  }

  isRichTextBlock(
    block: Pages['block'][0]
  ): block is Pages['block'][0] & { item: RichTextBlock } {
    return block.collection === 'RichTextBlock';
  }
}
