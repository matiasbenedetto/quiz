import css from 'styled-jsx/css';
import theme from '../../theme';


const styles = css`
  div {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: ${theme.gutter[1]};
    grid-column-gap: ${theme.gutter[1]};
  }

  @media(${theme.breakpoint.md}) {
    div {
        grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(${theme.breakpoint.lg}) {
    div {
        grid-template-columns: repeat(5, 1fr);
    }
  }

`;

export default styles;
