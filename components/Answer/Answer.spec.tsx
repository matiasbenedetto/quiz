import { mount } from 'enzyme';
import Answer from '.';


const mockQuestion = {
  glossaryId: 1,
  text: 'question text',
  options: ['opt1', 'opt2', 'opt3', 'opt4'],
  correctAnswer: 'opt3',
}

describe('component rendering', () => {

  it('renders with right props', () => {
    const wrapper = mount(
      <Answer question={mockQuestion} />
    );
    expect(wrapper.props()).toMatchObject({question: {...mockQuestion}});
  });

  it('renders wrong answer', () => {
    const wrongAnswer = {
      ...mockQuestion,
      userAnswer: 'opt1'
    };
    const wrapper = mount(
      <Answer question={wrongAnswer} />
    );
    expect(wrapper.find('.wrong')).toHaveLength(1);
  });

  it('render correct answer', () => {
    const correctAnswer = {
      ...mockQuestion,
      userAnswer: 'opt3'
    };
    const wrapper = mount(
      <Answer question={correctAnswer} />
    );
    expect(wrapper.find('.correct')).toHaveLength(1);
  });

});