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
    box-shadow: 0 2px 4px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
    text-shadow: 0 2px 4px rgba(0,0,0,0.08);
  }
`;

export default styles;
