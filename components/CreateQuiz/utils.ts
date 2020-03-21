import { Glossary, Difficulty, GlossaryItem } from '../../context/Glossary/types';
import { Question } from '../../context/Quiz/types';

function randomSort():number {
  return 0.5 - Math.random()
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function filterGlossaryItems(
  glossary: Glossary,
  difficulty: Difficulty,
  alreadyAnswered: number[],
): GlossaryItem[] {
  const sortBy = (item: GlossaryItem) => (
      (
        !alreadyAnswered.includes(item.id) &&
        ( difficulty !== Difficulty.Uncategorized ? item.difficulty === difficulty : true )
      ) ? -1 : 1
  )
  return (
    glossary.items
      .sort(randomSort)
      .sort(sortBy)
  )
}

function getRandomTerms(glossary: Glossary, quantity: number): string[] {
  const end = getRandomInt(quantity, glossary.items.length);
  const start = end - quantity;
  return (
    glossary.items
      .slice(start, end)
      .map(item => item.title)
  )
}

function makeQuestionFromGlossaryItem(item: GlossaryItem, wrongAnswers: string[]):Question {
  return {
    glossaryId: item.id,
    text: item.excerpt,
    options: [
      item.title,
      ...wrongAnswers,
    ].sort(randomSort),
    correctAnswer: item.title,
  }
}

export function getQuestionsFromGlossary(
  glossary: Glossary,
  difficulty: Difficulty,
  alreadyAnswered: number[],
  quantity: number =10
):Question[] {
  const glossaryItems = filterGlossaryItems(glossary, difficulty, alreadyAnswered)
                          .slice(0,quantity);
  return glossaryItems.map(item => (
    makeQuestionFromGlossaryItem(item, getRandomTerms(glossary, 3))
  ));
}