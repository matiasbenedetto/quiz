export enum DifficultyId {
  Begginer = 1,
  Intermediate = 2,
  Advanced = 3,
}

export interface GlossaryItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  difficultyId?: DifficultyId;
}

type GlossaryItemApiResponse = {
  id: number,
  title: string,
  slug: string,
  excerpt: string,
  difficulty_id: number,
  difficulty?: {
    level: number,
    title: string,
  }
};

export type GlossaryApiResponse = GlossaryItemApiResponse[];