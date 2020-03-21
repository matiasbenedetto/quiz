import { useEffect } from 'react';
import { NextPage } from 'next';
import Router, { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import { useQuiz, useDispatchQuiz } from '../../context/Quiz';
import quizActions from '../../context/Quiz/actions';
import Question from '../../components/Question';


const Quiz: NextPage = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const quiz = useQuiz();
  const dispatchQuiz = useDispatchQuiz();
  const question = quiz.questions[id];

  useEffect(() => {
    if(!question){
        router.push('/');
    }
  });

  if (!question) {
    return <div>Questions not found</div>
  }

  const handleAnswer = (answer: string) => {
    dispatchQuiz(
      quizActions.answer(id,answer)
    );
    if (id < quiz.questions.length -1) {
      Router.push('/quiz/[id]/', `/quiz/${id+1}/`);
    } else {
      Router.push('/quiz/results');
    }
  }

  return (
    <Layout>
      <Question
        question={question}
        onAnswer={handleAnswer}
      />
    </Layout>
  )
};

export default Quiz;
