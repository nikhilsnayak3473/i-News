import { createContext, useReducer } from 'react';
import NewsReducer from './NewsReducer';

const NewsContext = createContext();

export default NewsContext;

export const NewsProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    category: 'Technology',
    country: 'in',
    newsArray: [],
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  return (
    <NewsContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
