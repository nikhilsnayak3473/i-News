const NewsCard = ({
  news: {
    title,
    description,
    urlToImage,
    url,
    source: { name },
    author,
    publishedAt,
  },
}) => {
  return (
    title &&
    description &&
    urlToImage &&
    url &&
    name &&
    author &&
    publishedAt && (
      <div className='news-card'>
        <div className='news-header'>
          <img src={urlToImage} alt='news-img' />
          <strong className='news-source'>Source : {name}</strong>
        </div>
        <div className='news-body'>
          <h2 className='news-title'>{title}</h2>
          <p className='news-description'>{description}</p>

          <small className='news-author'>
            By <span>{author}</span> on {new Date(publishedAt).toGMTString()}
          </small>
        </div>
        <div className='news-footer'>
          <a className='read-more' href={url} target='_blank' rel='noreferrer'>
            Go To Article
          </a>
        </div>
      </div>
    )
  );
};

export default NewsCard;
