import Link from 'next/link';
import { useGlossary } from '../../../context/Glossary';
import { useDispatchQuiz } from '../../../context/Quiz';
import quizActions from '../../../context/Quiz/actions';
import { getQuestionsFromGlossary } from './utils';
import { Difficulty } from '../../../context/Glossary/types';
import { DEFAULT_QUESTIONS_QUANTITY } from '../../../constants';
import styles from './styles';

type CreateQuizProps = {
  difficulty: Difficulty;
  text: string;
}

function CreateQuiz({ difficulty, text }: CreateQuizProps) {
  const glossary = useGlossary();
  const  dispatchQuiz = useDispatchQuiz();

  const handleClick = (difficulty: Difficulty) => {
    const questions = getQuestionsFromGlossary(glossary, difficulty, [], DEFAULT_QUESTIONS_QUANTITY);
    dispatchQuiz(
       quizActions.create({
         difficulty,
         questions,
       }
      )
    );
  }

  return (
    <>
      <style jsx>{styles}</style>
      <Link href="/quiz/[id]" as="/quiz/0">
        <button
          onClick={()=>handleClick(difficulty)}
        >
          {text}
        </button>
      </Link>
    </>
  )
};

export default CreateQuiz;
