import { Difficulty } from '../Glossary/types';

export interface Question {
  glossaryId: number,
  text: string,
  options: string[],
  correctAnswer: string,
  userAnswer?: string,
};

export interface Quiz {
  questions: Question[],
  difficulty: Difficulty,
};

export enum QuizActionTypes {
  CREATE_QUIZ= 'CREATE_QUIZ',
  ANSWER_QUESTION= 'ANSWER_QUESTION',
};

export interface CreateQuiz {
  type: QuizActionTypes.CREATE_QUIZ,
  payload: Quiz,
};

export interface AnswerQuestion {
  type: QuizActionTypes.ANSWER_QUESTION,
  payload: {
    questionId: number,
    answer: string,
  },
};

export type QuizAction = CreateQuiz | AnswerQuestion;
