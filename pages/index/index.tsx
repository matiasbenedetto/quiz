import { useEffect } from 'react';
import { NextPage } from 'next';

import Layout from '../../components/Layout';
import { useUser, useDispatchUser } from '../../context/User';
import userAction from '../../context/User/actions';
import { useDispatchGlossary } from '../../context/Glossary'
import { GlossaryItem } from '../../context/Glossary/types';
import glossaryActions from '../../context/Glossary/actions';
import api from '../../api';
import UsernameInput from '../../components/UsernameInput';
import StartQuizButtons from '../../components/StartQuizButtons';
import Card from '../../components/Card';


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
      <Card>
        <UsernameInput onChange={handleUserInputChange} value={user.name} />
      </Card>
      <h2>Are you ready to start?</h2>
      <StartQuizButtons />
    </Layout>
  )
}

export async function getServerSideProps() {
  const glossaryData = await api.getGlossary();
  return { props: { glossaryData } }
}

export default Home;
