import actions from './actions';
import { UserActionTypes } from './types';

describe('actions creator work', () => {

  it('output setName action', () => {
    const action = actions.setName('mock username');
    expect(action).toMatchObject({
      type: UserActionTypes.USER_SET_NAME,
      payload: 'mock username',
    });
  });

  it('output setScore action', () => {
    const action = actions.setScore(10, '+');
    expect(action).toMatchObject({
      type: UserActionTypes.USER_SET_SCORE,
      payload: {
        points: 10,
        operator: '+',
      },
    });
  });

  it('output setName action', () => {
    const action = actions.setCorrectAnswers([1,4,7]);
    expect(action).toMatchObject({
      type: UserActionTypes.USER_SET_CORRECT_ANSWERS,
      payload: [1,4,7],
    });
  });

});