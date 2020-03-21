import { UserSetName, UserActionTypes, UserSetScore, ScoreOperator, UserSetCorrentAnswers } from './types';

function setName (name: string): UserSetName {
  return {
    type: UserActionTypes.USER_SET_NAME,
    payload: name,
  }
}

function setScore (points: number, operator: ScoreOperator): UserSetScore {
  return {
    type: UserActionTypes.USER_SET_SCORE,
    payload: {
      points,
      operator,
    }
  }
}

function setCorrectAnswers (ids: number[]): UserSetCorrentAnswers {
  return {
    type: UserActionTypes.USER_SET_CORRECT_ANSWERS,
    payload: ids,
  }
}

export default {
  setName,
  setScore,
  setCorrectAnswers,
}