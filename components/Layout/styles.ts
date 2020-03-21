import css from 'styled-jsx/css';

import theme from '../../theme';


const styles = css.global`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:200,400,700&display=swap');

  body {
    background: ${theme.color.background};
    color: ${theme.color.text};
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  .mainContent {
    padding: ${theme.gutter[1]};
    text-align: center;
  }
`;

export default styles;
