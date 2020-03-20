import { BaseAction } from '../types';

export interface User {
  name: string,
  score: number,
  wellAnsweredQuestions: number[],
}

export enum UserActionTypes {
  USER_SET_NAME= 'USER_SET_NAME',
  USER_SET_SCORE= 'USER_SET_SCORE',
  USER_SET_CORRECT_ANSWERS= 'USER_SET_CORRECT_ANSWERS',
}

export type ScoreOperator = '+' | '-' | '*' | '/';

export interface UserSetName extends BaseAction {
  type: UserActionTypes.USER_SET_NAME,
  payload: string,
}

export interface UserSetScore extends BaseAction {
  type: UserActionTypes.USER_SET_SCORE,
  payload: {
    points: number,
    operator: ScoreOperator,
  }
}

export interface UserSetCorrentAnswers extends BaseAction {
  type: UserActionTypes.USER_SET_CORRECT_ANSWERS,
  payload: number[]
}

export type UserAction = UserSetName | UserSetScore | UserSetCorrentAnswers;
