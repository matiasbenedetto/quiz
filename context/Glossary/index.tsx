import React, { useReducer, useContext } from 'react';
import { Glossary, LoadGlossaryItems, GlossaryActionTypes } from './types';


const glossaryInitialState: Glossary = {
  items: [],
}

const GlossaryStateContext = React.createContext<Glossary>(glossaryInitialState)
const GlossaryDispatchContext = React.createContext<React.Dispatch<LoadGlossaryItems>>(null);

function reducer(state: Glossary, action: LoadGlossaryItems):Glossary {
  switch (action.type) {
    case GlossaryActionTypes.LOAD_GLOSSARY_ITEMS:
      return {
        ...state,
        items: action.payload,
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const GlossaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, glossaryInitialState)
  return (
    <GlossaryDispatchContext.Provider value={dispatch}>
      <GlossaryStateContext.Provider value={state}>
        {children}
      </GlossaryStateContext.Provider>
    </GlossaryDispatchContext.Provider>
  )
}

export const useGlossary = () => useContext(GlossaryStateContext)
export const useDispatchGlossary = () => useContext(GlossaryDispatchContext)