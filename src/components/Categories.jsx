import Category from './Category';

const Categories = ({ isActive }) => {
  const categories = [
    'Business',
    'Entertainment',
    'Health',
    'Science',
    'Sports',
    'Technology',
  ];

  return (
    <div className={isActive ? 'options active' : 'options'}>
      {categories.map((category, index) => (
        <Category key={index} categoryName={category} />
      ))}
    </div>
  );
};

export default Categories;
