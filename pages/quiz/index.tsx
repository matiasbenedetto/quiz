import { useEffect, useState, useRef } from 'react';
import { NextPage } from 'next';
import Router from 'next/router'
import Layout from '../../components/Layout';
import { useQuiz, useDispatchQuiz } from '../../context/Quiz';
import quizActions from '../../context/Quiz/actions';
import Question from '../../components/Question';
import { SECONDS_TO_ANSWER } from '../../constants';


const Quiz: NextPage = () => {
  const [id, setId] = useState<number>(0);
  const quiz = useQuiz();
  const dispatchQuiz = useDispatchQuiz();
  const question = quiz.questions[id];
  const [remainingTime, setRemainingTime] = useState(SECONDS_TO_ANSWER);
  const timePassRef = useRef<Function>();

  const nextQuestion = () => {
    if (id < quiz.questions.length -1) {
      setId(id+1);
    } else {
      Router.push('/quiz/results');
    }
  }

  const timePass = () => {
    if (remainingTime > 0) {
      setRemainingTime(remainingTime - 1)
    } else {
      nextQuestion();
    }
  }

  useEffect(() => {
    timePassRef.current = timePass;
  });

  useEffect(() => {
    setRemainingTime(SECONDS_TO_ANSWER);
  }, [id]);

  useEffect(() => {
    let id = setInterval(()=>timePassRef.current(), 1000);
    return () => clearInterval(id);
  }, []);

  const handleAnswer = (answer: string) => {
    dispatchQuiz(
      quizActions.answer(id,answer)
    );
    nextQuestion();
  }

  return (
    <Layout>
      <p>Question {id} / {quiz.questions.length}</p> 
      <p>Remaining time {remainingTime} {remainingTime === 1 ? 'second' : 'seconds'}</p>     
      <Question
        question={question}
        onAnswer={handleAnswer}
      />
    </Layout>
  )
};

export default Quiz;
