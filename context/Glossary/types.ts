export enum Difficulty {
  Uncategorized = 0,
  Begginer = 1,
  Intermediate = 2,
  Advanced = 3,
}

export interface GlossaryItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  difficulty: Difficulty;
}

export type Glossary = GlossaryItem[];