import Link from 'next/link';
import { Difficulty } from '../../context/Glossary/types';
import { useGlossary } from '../../context/Glossary';
import { useDispatchQuiz } from '../../context/Quiz';
import quizActions from '../../context/Quiz/actions';
import { getQuestionsFromGlossary } from './utils';

type CreateQuizProps = {
  difficulty: Difficulty;
}

function CreateQuiz({ difficulty }: CreateQuizProps) {
  const glossary = useGlossary();
  const  dispatchQuiz = useDispatchQuiz();

  const handleClick = (difficulty: Difficulty) => {
    const questions = getQuestionsFromGlossary(glossary, difficulty, [], 10);
    dispatchQuiz(
       quizActions.create({
         difficulty,
         questions,
       }
      )
    );
  }

  return (
    <Link href="/quiz/[id]" as="/quiz/0">
      <button
        onClick={()=>handleClick(difficulty)}
      >
        Create Quiz {Difficulty[difficulty]}
      </button>
    </Link>
  )
};

export default CreateQuiz;
