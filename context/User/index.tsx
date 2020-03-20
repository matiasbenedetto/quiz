import React, { useReducer, useContext } from 'react'
import { User, UserAction, UserActionTypes } from './types';
import { operate } from './utils';


const userInitialState: User = {
  name: '',
  score: 0,
  wellAnsweredQuestions: [],
}

const UserStateContext = React.createContext<User>(userInitialState)
const UserDispatchContext = React.createContext<React.Dispatch<UserAction>>(null);

const reducer = (state: User, action: UserAction): User => {  
  switch (action.type) {

    case UserActionTypes.USER_SET_NAME:
      return {
        ...state,
        name: action.payload,
      }

    case UserActionTypes.USER_SET_SCORE:
      const { operator, points } = action.payload;
      return {
        ...state,
        score: operate(state.score, operator, points),
      }

    case UserActionTypes.USER_SET_CORRECT_ANSWERS:
      return {
        ...state,
        wellAnsweredQuestions: state.wellAnsweredQuestions.concat(action.payload),
      }

    default:
      throw new Error(`Unknown action: ${action}`)
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, userInitialState);
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  )
}

export const useUser = () => useContext(UserStateContext)
export const useDispatchUser = () => useContext(UserDispatchContext)