import loading from '../img/loading.gif';

const Spinner = () => {
  return (
    <img
      src={loading}
      style={{ width: '50px', margin: '1em' }}
      alt='loading...'
    />
  );
};

export default Spinner;
