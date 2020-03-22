import React from 'react';
import Card from '../Card';
import { Question as IQuestion } from '../../context/Quiz/types';
import Button from '../Button';


type QuestionProps = {
  question: IQuestion;
  onAnswer: (answer: string) => void;
}

function Question ({ question, onAnswer }: QuestionProps) {
  return (
    <div>
      <Card>
        <p>This definition:</p>
        <h1>{question.text}</h1>
        <p>Matches which term?:</p>
        {question.options.map(option => (
          <Button
            onClick={() => onAnswer(option)}
            key={option}
          >
            {option}
          </Button>
        ))}
      </Card>
    </div>
  )  
}

export default Question;
