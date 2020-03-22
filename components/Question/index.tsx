import React from 'react';
import Card from '../Card';
import { Question as IQuestion } from '../../context/Quiz/types';
import Button from '../Button';
import styles from './styles';


type QuestionProps = {
  question: IQuestion;
  onAnswer: (answer: string) => void;
}

function Question ({ question, onAnswer }: QuestionProps) {
  return (
    <div>
      <style jsx>{styles}</style>
      <Card>
        <p>This definition:</p>
        <h1>{question.text}</h1>
        <p>Matchs which term?:</p>
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
