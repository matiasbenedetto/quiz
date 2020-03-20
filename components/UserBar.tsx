import { useUser } from '../context/User';


function UserBar() {
  const user = useUser();
  return (
    <div>
      <p>user: {user.name || 'anonymous'}</p>
      <p>score: {user.score}</p>
    </div>
  )
};

export default UserBar;
