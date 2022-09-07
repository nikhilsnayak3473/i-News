import { useState } from 'react';
import { FaNewspaper, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };
  return (
    <header>
      <div className='container header-container'>
        <Link className='logo pointer' to='/'>
          <FaNewspaper /> <span>i - NEWS</span>
        </Link>
        <FaBars
          size={28}
          className='hamburger-icon pointer'
          onClick={toggleNavbar}
        />
        <Navbar isActive={navbarActive} setState={toggleNavbar} />
      </div>
    </header>
  );
};

export default Header;
