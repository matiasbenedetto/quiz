import { useQuiz } from '../../context/Quiz';
import StartQuizButtons from "../../components/StartQuizButtons";
import Answer from '../../components/Answer';
import { useEffect } from 'react';
import { useDispatchUser } from '../../context/User';
import userActions from '../../context/User/actions';
import Layout from '../../components/Layout';


function Results() {
  const quiz = useQuiz();
  const userDipatch = useDispatchUser();
  const wellAnswered = quiz.questions.filter(item => item.correctAnswer === item.userAnswer);
  const wellAnsweredIds = wellAnswered.map(item => item.glossaryId);
  const points: number = wellAnswered.length;

  useEffect(() => {
    userDipatch(
      userActions.setScore(points, '+')
    )
    userDipatch(
      userActions.setCorrectAnswers(wellAnsweredIds)
    )
  }, []);

  return (
    <Layout>
      <h1>Results</h1>
      {quiz.questions.map(item => <Answer question={item} key={item.glossaryId} />)}
      <div>
        <h2>Continue Playing</h2>
        <StartQuizButtons />
      </div>
    </Layout>
  )
}

export default Results;
