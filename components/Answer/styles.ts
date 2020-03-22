import css from 'styled-jsx/css';
import theme from '../../theme';


const styles = css`
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .text {
    flex-grow: 1;
  }

  p, span {
    font-size: 0.9rem;
    margin-bottom: ${theme.gutter[1]};
  }

  span {
    padding: 0 1rem;
  }

  span.correct{
    background-color: ${theme.color.correct};
  }

  span.wrong {
    background-color: ${theme.color.wrong};
  }

  .userAnswerTitle {
    font-size: 0.6rem;
    text-decoration: underline;
  }

  .userAnswer {
    font-weight: bold;
  }
`;

export default styles;
