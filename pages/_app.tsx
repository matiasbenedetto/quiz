import { AppProps } from 'next/app';
import { UserProvider } from '../context/User';
import { GlossaryProvider } from '../context/Glossary';
import { Glossary } from '../context/Glossary/types';
import { QuizProvider } from '../context/Quiz';
import api from '../api';


type QuizAppProps = {
  glossary: Glossary;
} & AppProps;

function QuizApp({ Component, pageProps, glossary }: QuizAppProps) {
  return (
    <GlossaryProvider value={glossary}>
      <QuizProvider>
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
      </QuizProvider>
    </GlossaryProvider>
  )
}

QuizApp.getInitialProps = async () => {
  const glossary = await api.getGlossary();
  return { glossary }
}

export default QuizApp;
