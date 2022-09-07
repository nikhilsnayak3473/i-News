import Categories from '../components/Categories';
import Countries from '../components/Countries';
import { useState, useContext } from 'react';
import NewsContext from '../context/NewsContext';
import Spinner from '../components/Spinner';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const { isLoading, newsArray } = useContext(NewsContext);

  return (
    <section className='home container'>
      <div className='options-container'>
        {!showCountries && (
          <button
            className='options-toggle-btn pointer'
            onClick={() => setShowCategories(!showCategories)}
          >
            Category
          </button>
        )}

        {!showCategories && (
          <button
            className='options-toggle-btn pointer'
            onClick={() => setShowCountries(!showCountries)}
          >
            Country
          </button>
        )}
      </div>
      <Categories isActive={showCategories} />
      <Countries isActive={showCountries} />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className='news-container'>
          {newsArray.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
