import css from 'styled-jsx/css';
import theme from '../../theme';

const styles = css`
  .buttonGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${theme.gutter[2]};
    grid-column-gap: ${theme.gutter[2]};
  }
`;

export default styles;
