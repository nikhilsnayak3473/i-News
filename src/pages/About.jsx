import designer from '../img/designer.jpg';
const About = () => {
  return (
    <section className='about container'>
      <h2 className='about-heading'>About</h2>

      <ul>
        <li>
          News App where you can get the news category wise and country wise
        </li>
        <li>Credits: News API</li>
      </ul>

      <div className='designer-card'>
        <div className='designer-card-head'>
          <img src={designer} alt='' />
          <div>
            <h3>
              Designed and Developed by: <span>Nikhil S</span>
            </h3>
          </div>
        </div>
        <div className='designer-card-body'>
          Web Developer || JAVA Developer
        </div>
        <div className='designer-card-footer'>
          <a
            className='portfolio-link'
            href='https://nikhilsnayak3473.github.io/'
            target='_blank'
            rel='noreferrer'
          >
            Visit Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
