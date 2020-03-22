import css from 'styled-jsx/css';
import theme from '../../theme';


const styles = css`
  Button {
    background-color: ${theme.color.accent};
    border: none;
    border-radius: 3px;
    padding: ${theme.gutter[1]};
    display: block;
    width: 100%;
    margin-block-end: ${theme.gutter[2]};
    cursor: pointer;
  }
`;

export default styles;
