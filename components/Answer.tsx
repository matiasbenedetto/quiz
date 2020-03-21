import { Question } from "../context/Quiz/types";
import Emoji from './Emoji';

type AnswerProps = {
  question: Question;
}

function Answer({ question }: AnswerProps) {
  const isCorrect = question.correctAnswer === question.userAnswer;
  return (
    <div>
      <p>
        {isCorrect
          ? <Emoji char='✔' label="correct"/>
          : <Emoji char='❌' label="wrong"/>
        }
      </p>
      <p>{question.text}</p>
      <p>Your answer: {question.userAnswer}</p>
    </div>
  )
}

export default Answer;
