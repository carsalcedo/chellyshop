import { useState } from 'react';
import { hamburger } from "../assets/icons";
import {logo} from '../assets/images'
import { navLinks } from '../constants';

const Navi = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="">
          <img src={logo} alt="logo" width={60} height={60} className='rounded-full' />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-10 max-lg:hidden'>
          {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray hover:text-violet-600'
                > 
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
        <button className='hidden max-lg:block'  onClick={handleMenuToggle}>
          <img src={hamburger} alt="Hamburger" width={25} height={25}/>
        </button>
      </nav>

      <div className={`w-full bg-violet-400 rounded-lg ${
          isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <div className='flex flex-col justify-center items-center '>
          {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='font-montserrat leading-normal text-lg hover:text-violet-600'
                > 
                  {item.label}
                </a>
            ))}
          </div> 
        </div>
      </div>

    </header>
  )
}

export default Navi