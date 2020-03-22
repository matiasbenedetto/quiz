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

  span.correct{
    background-color: ${theme.color.correct};
  }

  span.wrong {
    background-color: ${theme.color.wrong};
  }

  .userAnswerTitle {
    text-decoration: underline;
  }

  .userAnswer {
    font-weight: bold;
  }
`;

export default styles;
