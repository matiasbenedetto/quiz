import css from 'styled-jsx/css';
import theme from '../../theme';


const styles = css`
  label{
    display: block;
    margin-bottom: ${theme.gutter[1]}
  }
  input {
    padding: ${theme.gutter[1]};
    border-radius: 3px;
    border: none;
    background-color: ${theme.color.darkBackground};
    color: ${theme.color.text};
    outline: none;
    text-align: center; 
  }
`;

export default styles;
