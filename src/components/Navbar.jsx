import { NavLink } from 'react-router-dom';

import { FaTimes, FaHome, FaInfo } from 'react-icons/fa';

const Navbar = ({ isActive, setState }) => {
  return (
    <nav className={isActive ? 'navbar active' : 'navbar'}>
      <FaTimes className='nav-close pointer' size={28} onClick={setState} />
      <ul className='nav-list'>
        <li className='nav-item'>
          <NavLink
            onClick={setState}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            to='/'
          >
            <FaHome /> <span>Home</span>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            onClick={setState}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            to='/about'
          >
            <FaInfo /> <span>About</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
