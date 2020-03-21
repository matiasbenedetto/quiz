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

export interface Glossary {
  items: GlossaryItem[];
};

export enum GlossaryActionTypes {
  LOAD_GLOSSARY_ITEMS= 'LOAD_GLOSSARY_ITEMS',
}

export interface LoadGlossaryItems {
  type: GlossaryActionTypes.LOAD_GLOSSARY_ITEMS,
  payload: GlossaryItem[],
}
