import { Question } from "../../context/Quiz/types";
import Emoji from '../Emoji';
import Card from '../Card';
import styles from './styles';


type AnswerProps = {
  question: Question;
}

function Answer({ question }: AnswerProps) {
  const isCorrect = question.correctAnswer === question.userAnswer;
  return (
    <Card>
      <style jsx>{styles}</style>
      <div className="content">
        <span className={isCorrect ? 'correct' : 'wrong'}>{isCorrect ? 'Correct' : 'Wrong'}</span>
        <p>
          {isCorrect
            ? <Emoji char='✔' label="correct"/>
            : <Emoji char='❌' label="wrong"/>
          }
        </p>
        <p className="text">{question.text}</p>
        <p className="userAnswerTitle">Your answer:</p>
        <p className="userAnswer">{question.userAnswer || 'No answer'}</p>
      </div>
    </Card>
  )
}

export default Answer;
