
type UsernameInputProps = {
  value: string;
  onChange: (event: React.SyntheticEvent) => void;
}

function UsernameInput({value, onChange}: UsernameInputProps) {
  return (
    <input value={value} onChange={onChange} />
  )
}

export default UsernameInput;
