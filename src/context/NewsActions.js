import axios from 'axios';

const NEWS_API = process.env.REACT_APP_NEWS_API;

const news = axios.create({
  baseURL: 'https://newsapi.org',
  headers: {
    Authorization: NEWS_API,
  },
});

export const getNews = async (category, country) => {
  try {
    const response = await news.get(
      `/v2/top-headlines?country=${country}&category=${category.toLowerCase()}`
    );

    return response.data.articles;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
