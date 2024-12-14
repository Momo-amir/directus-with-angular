import { HeroBlock, RichTextBlock } from './blocks';
export interface PageBlock {
  id: number;
  pages_slug: string;
  collection: 'HeroBlock' | 'RichTextBlock';
  sort: number;
  item: HeroBlock | RichTextBlock;
}
