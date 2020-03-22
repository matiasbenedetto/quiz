import { useUser } from '../../context/User';
import styles from './styles';


function UserBar() {
  const user = useUser();
  return (
    <>
      <style jsx>{styles}</style>
      <div className="userBar">
        <p className="user">Player: {user.name || 'anonymous'}</p>
        <p className="score">Score: {user.score}</p>
      </div>
    </>
  )
};

export default UserBar;
