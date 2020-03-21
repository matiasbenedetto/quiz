import css from 'styled-jsx/css';
import theme from '../../theme';


const styles = css`
  div {
    background-color: ${theme.color.lightBackground};
    border-radius: 5px;
    padding: ${theme.gutter[2]};
    box-shadow: 0 5px 9px rgba(0,0,0,0.08), 0 5px 9px rgba(0,0,0,0.04);
    margin-bottom: ${theme.gutter[2]};
  }
`;

export default styles;
