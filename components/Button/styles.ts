import css from 'styled-jsx/css';
import theme from '../../theme';


const styles = css`
  button {
    background: ${theme.color.accent};
    border: none;
    border-radius: 2px;
    padding: 0.5rem 1rem;
    display: block;
    width: 100%;
    margin-bottom: ${theme.gutter[2]};
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default styles;
