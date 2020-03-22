import css from 'styled-jsx/css';
import theme from '../../theme';


export const globalStyles = css.global`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:200,400,700&display=swap');

  body {
    font-size: 16px;
  }

  h1 {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 1.1rem;
  }

  @media (${theme.breakpoint.sm}) {
    body {
      font-size: 20px;
    }

    h1 {
    font-size: 1.4rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }

  @media (${theme.breakpoint.md}) {
    body {
      font-size: 24px;
    }

    h1 {
    font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (${theme.breakpoint.lg}) {
    body {
      font-size: 28px;
    }

    h1 {
    font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media (${theme.breakpoint.xl}) {
    body {
      font-size: 32px;
    }
  }

  span, small, p, input, button, label {
    font-size: 1rem;
  }

  html, body {
    background: ${theme.color.background};
    color: ${theme.color.text};
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
    height: 100%;
  }

  #__next {
    height: 100%;
  }

`;

export const layoutStyles = css`
  .wrapper {
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content {
    padding: ${theme.gutter[4]};
    text-align: center;
    display: flex;
    align-items: center;
  }

  main, header, footer {
    display: flex;
		flex-direction: column;
    justify-content: center;
  }

  main {
    flex: 1;
  }

  .container {
    width: 70vw;
  }
`;
