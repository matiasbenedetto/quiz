import { Quiz, CreateQuiz, QuizActionTypes, AnswerQuestion } from './types';


function create(quiz: Quiz): CreateQuiz {
  return {
    type: QuizActionTypes.CREATE_QUIZ,
    payload: quiz, 
  }
}

function answer(id: number, answer: string): AnswerQuestion {
  return {
    type: QuizActionTypes.ANSWER_QUESTION,
    payload: {
      id,
      answer,
    }, 
  }
}

export default {
  create,
  answer,
}
