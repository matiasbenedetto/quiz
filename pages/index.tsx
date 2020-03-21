import { NextPage } from 'next';
import Layout from '../components/Layout'
import { useUser, useDispatchUser } from '../context/User'
import userAction from '../context/User/actions';
import { useDispatchGlossary } from '../context/Glossary'
import { Difficulty, GlossaryItem } from '../context/Glossary/types';
import glossaryActions from '../context/Glossary/actions';
import api from '../api'
import { useEffect } from 'react'
import CreateQuiz from '../components/CreateQuiz';
import TextInput from '../components/UserInput';


type HomeProps = {
  glossaryData: GlossaryItem[];
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const user = useUser();
  const dispatchUser = useDispatchUser();
  const dispatchGlossary = useDispatchGlossary();
  

  const handleUserInputChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchUser(
      userAction.setName(event.target.value)
    )
  }

  useEffect(()=>{
    dispatchGlossary(
      glossaryActions.loadGlossary(props.glossaryData),
    );
  }, []);
  
  return (
    <Layout title="Welcome to the Next Crypto Quiz">
      <h1>Welcome {user.name} to Crypto Quiz!</h1>
      <TextInput onChange={handleUserInputChange} value= {user.name} />
      <CreateQuiz difficulty={Difficulty.Begginer} />
      <CreateQuiz difficulty={Difficulty.Intermediate} />
      <CreateQuiz difficulty={Difficulty.Advanced} />
      <CreateQuiz difficulty={Difficulty.Uncategorized} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const glossaryData = await api.getGlossary();
  return { props: { glossaryData } }
}

export default Home;
