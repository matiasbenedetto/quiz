import CreateQuiz from './CreateQuiz';
import { Difficulty } from '../../context/Glossary/types';
import styles from './styles';


function StartQuizButtons() {
  return (
    <div>
      <style jsx>{styles}</style>
      <p>Select your level: </p>
      <div className="buttonGrid">
        <CreateQuiz difficulty={Difficulty.Begginer}>
          I'm a beginner
        </CreateQuiz>

        <CreateQuiz difficulty={Difficulty.Intermediate}>
          I'm feeling confident
        </CreateQuiz>

        <CreateQuiz difficulty={Difficulty.Advanced}>
          I'm the Boss
        </CreateQuiz>

        <CreateQuiz difficulty={Difficulty.Uncategorized}>
          Random difficulty
        </CreateQuiz>
      </div>
    </div>
  )
}

export default StartQuizButtons;
