import { useContext } from 'react';
import NewsContext from '../context/NewsContext';

const Country = ({ countryObj }) => {
  const { country, dispatch } = useContext(NewsContext);

  const setCountry = () => {
    dispatch({ type: 'SET_COUNTRY', payload: countryObj.id });
  };

  return (
    <button
      className={
        country === countryObj.id ? 'option pointer active' : 'option pointer'
      }
      onClick={setCountry}
    >
      {countryObj.name}
    </button>
  );
};

export default Country;
