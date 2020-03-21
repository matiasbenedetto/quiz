import styles from './styles';


type CardProps = {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div>
      <style jsx>{styles}</style>
      {children}
    </div>
  )
}

export default Card;
