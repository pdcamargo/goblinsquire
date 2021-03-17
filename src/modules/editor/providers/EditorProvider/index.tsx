import React from 'react';
import { initialState, reducer } from './reducer';

import { EditorProviderContextType } from './types';

const EditorProviderContext = React.createContext<EditorProviderContextType>(null as EditorProviderContextType);

const EditorProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <EditorProviderContext.Provider value={{ ...state, dispatch }}>{children}</EditorProviderContext.Provider>;
};

export const useEditor = () => {
  const context = React.useContext(EditorProviderContext);

  if (!context) {
    throw new Error('useEditor must be inside of <EditorProvider />');
  }

  return context;
};

export default EditorProvider;
