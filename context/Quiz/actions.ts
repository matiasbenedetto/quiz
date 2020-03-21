import { Quiz, CreateQuiz, QuizActionTypes, AnswerQuestion } from './types';


function create(quiz: Quiz): CreateQuiz {
  return {
    type: QuizActionTypes.CREATE_QUIZ,
    payload: quiz, 
  }
}

function answer(questionId: number, answer: string): AnswerQuestion {
  return {
    type: QuizActionTypes.ANSWER_QUESTION,
    payload: {
      questionId,
      answer,
    }, 
  }
}

export default {
  create,
  answer,
}
