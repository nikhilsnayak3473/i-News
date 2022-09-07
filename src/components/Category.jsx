import { useContext } from 'react';
import NewsContext from '../context/NewsContext';

const Category = ({ categoryName }) => {
  const { category, dispatch } = useContext(NewsContext);

  const setCategory = () => {
    dispatch({ type: 'SET_CATEGORY', payload: categoryName });
  };

  return (
    <button
      className={
        category === categoryName ? 'option pointer active' : 'option pointer'
      }
      onClick={setCategory}
    >
      {categoryName}
    </button>
  );
};

export default Category;
