import CreateQuiz from './CreateQuiz';
import { Difficulty } from '../../context/Glossary/types';
import styles from './styles';

function StartQuizButtons() {
  return (
    <div>
      <style jsx>{styles}</style>
      <p>Select your level: </p>
      <div className="buttonGrid">
        <CreateQuiz difficulty={Difficulty.Begginer} text="I'm a beginner" />
        <CreateQuiz difficulty={Difficulty.Intermediate} text="I'm feeling confident" />
        <CreateQuiz difficulty={Difficulty.Advanced} text="I'm the boss" />
        <CreateQuiz difficulty={Difficulty.Uncategorized} text="Random difficulty" />
      </div>
    </div>
  )
}

export default StartQuizButtons;
