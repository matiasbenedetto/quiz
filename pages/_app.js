import App from 'next/app';
import { UserProvider } from '../context/User';
import { GlossaryProvider } from '../context/Glossary';
import { QuizProvider } from '../context/Quiz';

class QuizApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <QuizProvider>
        <GlossaryProvider>
          <UserProvider>
              <Component {...pageProps} />
          </UserProvider>
        </GlossaryProvider>
      </QuizProvider>
    )
  }
}

export default QuizApp;
