import { Difficulty } from '../context/Glossary/types';

export interface GlossaryItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  difficulty: Difficulty;
}

type GlossaryItemApiResponse = {
  id: number,
  title: string,
  slug: string,
  excerpt: string,
  difficulty_id: number,
  difficulty?: {
    level: Difficulty,
    title: string,
  }
};

export type GlossaryApiResponse = GlossaryItemApiResponse[];