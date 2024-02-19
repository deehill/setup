import { useState } from 'react';
import { logo, close, menu } from '../assets';
{/*
import { navLinks } from '../constants';
*/}
import { navLinksA } from '../constants';

const NavbarA = () => {
  const [active, setActive] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center ">
<div className="header-wrapper">
      <img src={logo} alt="hoobank logo" className="w-32 h-8" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinksA.map((nav) => (
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


      <div className="sm:hidden flex flex-1 justify-end items-center text-white font-medium">
        <img
          src={showMenu ? close : menu}
          alt="menu"
          className="w-6 h-6 object-contain cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div className="p-6 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-lg absolute top-14 right-0 mx-4 my-2 sidebar">
            <ul className="list-none flex justify-start items-start flex-1 flex-col">
              {navLinksA.map((nav) => (
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

      <div className="text-white">
        snappy tagline<br/>
      	cheaper books - better grades!<br/>
      	your books at our price!<br/>
      	makes cents to buy cheaper books!<br/>
      	paying more for the same textbook makes no cents!!<br/>
      	beating the bookstores at their own game...<br/>
      	  ....your books at our price!<br/>
      </div>
</div>
</nav>
  );
};

export default NavbarA;
