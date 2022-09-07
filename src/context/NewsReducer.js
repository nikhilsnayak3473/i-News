const NewsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'SET_COUNTRY':
      return {
        ...state,
        country: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_NEWS':
      return {
        ...state,
        newsArray: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default NewsReducer;
