import { GlossaryApiResponse, GlossaryItem } from './types';

export function normalizeGlossaryItems (items: GlossaryApiResponse):GlossaryItem[] {
  return items.map(item => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    difficultyId: 1,
  }));
}