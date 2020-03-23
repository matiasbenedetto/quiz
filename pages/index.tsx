import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useUser, useDispatchUser } from '../context/User';
import userAction from '../context/User/actions';
import UsernameInput from '../components/UsernameInput';
import StartQuizButtons from '../components/StartQuizButtons';
import Card from '../components/Card';


const Home: NextPage = () => {
  const user = useUser();
  const dispatchUser = useDispatchUser();
  

  const handleUserInputChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchUser(
      userAction.setName(event.target.value)
    )
  }

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

export default Home;
