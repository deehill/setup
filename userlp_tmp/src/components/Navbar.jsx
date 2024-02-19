import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';
import { navLinksA } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="hoobank logo" className="w-32 h-8" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-base mr-8
              ${active === nav.id ? 'text-white font-medium' : 'text-dimWhite font-normal'}`}
            onClick={() => setActive(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={showMenu ? close : menu}
          alt="menu"
          className="w-6 h-6 object-contain cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="p-6 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-lg absolute top-14 right-0 mx-4 my-2 sidebar">
            <ul className="list-none flex justify-start items-start flex-1 flex-col">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-base mb-4
              ${active === nav.id ? 'text-white font-medium' : 'text-dimWhite font-normal'}`}
                  onClick={() => setActive(nav.id)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
