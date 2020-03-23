import Link from 'next/link';
import { useGlossary } from '../../../context/Glossary';
import { useDispatchQuiz } from '../../../context/Quiz';
import quizActions from '../../../context/Quiz/actions';
import { getQuestionsFromGlossary } from './utils';
import { Difficulty } from '../../../context/Glossary/types';
import { DEFAULT_QUESTIONS_QUANTITY } from '../../../constants';
import Button from '../../Button';

type CreateQuizProps = {
  difficulty: Difficulty;
  children: React.ReactNode;
}

function CreateQuiz({ difficulty, children }: CreateQuizProps) {
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
      <Link href="/quiz">
        <Button
          onClick={()=>handleClick(difficulty)}
        >
          {children}
        </Button>
      </Link>
    </>
  )
};

export default CreateQuiz;
