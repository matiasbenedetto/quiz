import styles from './styles';

type ResultsGridProps = {
  children: React.ReactNode;
}

function ResultsGrid({ children } : ResultsGridProps){
  return (
    <div>
      <style jsx>{styles}</style>
      {children}
    </div>
  )
}

export default ResultsGrid;
