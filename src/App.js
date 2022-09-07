import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { useContext, useEffect } from 'react';
import { getNews } from './context/NewsActions';
import NewsContext from './context/NewsContext';

const App = () => {
  const { category, country, dispatch } = useContext(NewsContext);

  useEffect(() => {
    const fetchNews = async () => {
      dispatch({ type: 'SET_LOADING' });
      const news = await getNews(category, country);
      dispatch({ type: 'SET_NEWS', payload: news });
    };

    fetchNews();
  }, [category, country, dispatch]);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
