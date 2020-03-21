import styles from './styles';


type UsernameInputProps = {
  value: string;
  onChange: (event: React.SyntheticEvent) => void;
}

function UsernameInput({value, onChange}: UsernameInputProps) {
  return (
    <form>
      <style jsx>{styles}</style>
      <label>Enter your name:</label>
      <input value={value} onChange={onChange} placeholder="player..." />
    </form>
  )
}

export default UsernameInput;
