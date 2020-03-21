import CreateQuiz from './CreateQuiz';
import { Difficulty } from '../../context/Glossary/types';

function StartQuizButtons() {
  return (
    <div>
      <CreateQuiz difficulty={Difficulty.Begginer} />
      <CreateQuiz difficulty={Difficulty.Intermediate} />
      <CreateQuiz difficulty={Difficulty.Advanced} />
      <CreateQuiz difficulty={Difficulty.Uncategorized} />
    </div>
  )
}

export default StartQuizButtons;
