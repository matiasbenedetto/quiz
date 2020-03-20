import { UserSetName, UserActionTypes, UserSetScore, ScoreOperator } from './types';

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

export default {
  setName,
  setScore,
}