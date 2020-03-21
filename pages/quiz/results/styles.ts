import css from 'styled-jsx/css';
import theme from '../../../theme';


const styles = css`
  .resultsGrid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: ${theme.gutter[1]};
    grid-column-gap: ${theme.gutter[1]};
  }
`;

export default styles;
