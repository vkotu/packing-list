import { createContext, useEffect, useReducer } from 'react';
import { getInitialItems } from './lib/items';
import { reducer } from './lib/reducer';

export const ItemsContext = createContext({});
export const ActionsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, getInitialItems());
  useEffect(() => {
    console.log('items provider rerendered');
  });
  return (
    <ActionsContext.Provider value={dispatch}>
      <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
    </ActionsContext.Provider>
  );
};
