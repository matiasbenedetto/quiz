import { useUser } from '../../context/User';
import styles from './styles';


function UserBar() {
  const user = useUser();
  return (
    <>
      <style jsx>{styles}</style>
      <div className="userBar">
        <div className="user">Player: {user.name || 'anonymous'}</div>
        <div className="score">Score: {user.score}</div>
      </div>
    </>
  )
};

export default UserBar;
