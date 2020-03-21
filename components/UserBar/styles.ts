import css from 'styled-jsx/css';
import theme from '../../theme';


const styles = css`
  .userBar {
    background: ${theme.color.darkBackground};
    display: flex;
    padding: 1rem;
  }

  .user{
    margin-inline-end: ${theme.gutter[2]};
  }
`;

export default styles;
