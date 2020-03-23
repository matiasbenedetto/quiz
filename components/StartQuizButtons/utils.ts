import { Glossary, Difficulty, GlossaryItem } from '../../context/Glossary/types';
import { Question } from '../../context/Quiz/types';
import { DEFAULT_QUESTIONS_QUANTITY, QUESTION_ADDITIONAL_OPTIONS } from '../../constants';

function random():number {
  return 0.5 - Math.random()
}

function filterGlossaryItems(
  glossary: Glossary,
  difficulty: Difficulty,
  alreadyAnswered: number[],
): GlossaryItem[] {
  const sortGlossary = (item: GlossaryItem) => (
      (
        !alreadyAnswered.includes(item.id) &&
        ( difficulty !== Difficulty.Uncategorized ? item.difficulty === difficulty : true )
      ) ? -1 : 1
  )
  return (
    glossary
      .sort(random)
      .sort(sortGlossary)
  )
}

function getRandomTerms(exclude: string, terms: string[], quantity: number): string[] {
  return (
    terms
      .sort(random)
      .filter(item => item !== exclude)
      .slice(0, quantity)
  )
}

function makeQuestionFromGlossaryItem(item: GlossaryItem, wrongAnswers: string[]):Question {
  return {
    glossaryId: item.id,
    text: item.excerpt,
    options: [
      item.title,
      ...wrongAnswers,
    ].sort(random),
    correctAnswer: item.title,
  }
}

export function getQuestionsFromGlossary(
  glossary: Glossary,
  difficulty: Difficulty,
  alreadyAnswered: number[],
  quantity: number = DEFAULT_QUESTIONS_QUANTITY
):Question[] {
  const glossaryItems = filterGlossaryItems(glossary, difficulty, alreadyAnswered);
  const quizItems = glossaryItems.slice(0, quantity);
  const terms = glossaryItems.map(item => item.title);
  return quizItems.map(item => (
    makeQuestionFromGlossaryItem(item, getRandomTerms(item.title, terms, QUESTION_ADDITIONAL_OPTIONS))
  ));
}