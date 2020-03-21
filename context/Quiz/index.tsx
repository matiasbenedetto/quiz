import React, { useReducer, useContext } from 'react';
import { Quiz, QuizAction, QuizActionTypes } from './types';

const quizInitialState: Quiz= {
  questions: [],
  difficulty: null,
}

const QuizStateContext = React.createContext<Quiz>(quizInitialState);
const QuizDispatchContext = React.createContext<React.Dispatch<QuizAction>>(null);

function reducer (state: Quiz, action: QuizAction): Quiz {
  switch (action.type) {

    case QuizActionTypes.CREATE_QUIZ:
      return {
        ...action.payload,
      }

    case QuizActionTypes.ANSWER_QUESTION:
      return {
        ...state
      }
      
    default:
      throw new Error(`Unknown action: ${action}`)
  }
}

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, quizInitialState)
  return (
    <QuizDispatchContext.Provider value={dispatch}>
      <QuizStateContext.Provider value={state}>
        {children}
      </QuizStateContext.Provider>
    </QuizDispatchContext.Provider>
  )
}

export const useQuiz = () => useContext(QuizStateContext);
export const useDispatchQuiz = () => useContext(QuizDispatchContext);