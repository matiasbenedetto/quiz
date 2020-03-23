import React, { useContext } from 'react';
import { Glossary } from './types';


const GlossaryContext = React.createContext<Glossary>(null);


export const GlossaryProvider = ({children, value}) => {
  return (
    <GlossaryContext.Provider value={value}>
      {children}
    </GlossaryContext.Provider>
  )
}


export const useGlossary = () => useContext(GlossaryContext);