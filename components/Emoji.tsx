interface EmojiProps {
  char: string;  
  label: string;
}

function Emoji ({ char, label }: EmojiProps) {
  return (
    <span role="img" aria-label={label}>{char}</span>
  )
}

export default Emoji;
