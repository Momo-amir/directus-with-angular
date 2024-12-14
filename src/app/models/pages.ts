import { HeroBlock, RichTextBlock } from './blocks';

export interface Pages {
  slug: string;
  sort: number | null;
  title: string;
  block: {
    id: number;
    pages_slug: string;
    collection: 'HeroBlock' | 'RichTextBlock';
    sort: number;
    item: HeroBlock | RichTextBlock;
  }[];
}
