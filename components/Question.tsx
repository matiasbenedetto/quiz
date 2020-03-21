import React from 'react';
import { Question as IQuestion } from '../context/Quiz/types';


type QuestionProps = {
  question: IQuestion;
  onAnswer: (answer: string) => void;
}

function Question ({ question, onAnswer }: QuestionProps) {
  return (
    <div>
      <h1>{question.text}</h1>
      <div>
        {question.options.map(option => (
          <button
            onClick={() => onAnswer(option)}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )  
}

export default Question;
