// models/hero-block.ts
// export interface HeroButton {
//   label: string;
//   href: string;
//   variant: string;
// }

export interface HeroBlock {
  id: string;
  headline: string;
  content: string;
  image?: string; // Adjust type if necessary
}

// models/rich-text-block.ts
export interface RichTextBlock {
  id: string;
  headline: string;
  content: string;
}

// models/card-group-block.ts
// export interface CardGroupBlock {
//   id: string;
//   headline: string;
//   content: string;
//   group_type: string;
//   posts?: any[]; // Define more specific types if possible
//   cards?: any[];
// }
