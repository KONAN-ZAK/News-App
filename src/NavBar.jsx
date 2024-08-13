import { Menu } from '@mui/icons-material';
import searchIcon from './assets/search_icon.svg';
import { useState } from 'react';
import logo from './assets/logo.svg';

function NavBar() {
  // State to manage the visibility of the input
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Function to toggle the visibility
  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header>
      <div className="flex lg:h-[5rem] xxs:h-[4rem] items-center justify-between text-sm w-full lg:border-none xxs:border-b xxs:border-gray-500 p-4">
        <div className="xxs:block lg:hidden">
          <Menu
            className="text-white cursor-pointer"
            sx={{ fontSize: '2rem' }}
          />
        </div>
        {/* Search bar and logo*/}
        <label className="relative flex items-center lg:m-0 xxs:mb-5 xxs:w-40 lg:w-60 xxs:hidden lg:flex" >
          <span
            onClick={toggleSearchVisibility}
            className="absolute left-3 text-slate-500 h-full content-center cursor-pointer w-7 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </span>

          {/* Input field */}
          <input
            className={`placeholder:italic placeholder:text-slate-500 text-slate-300 bg-transparent outline-none w-full border border-slate-500 rounded-full py-2 pl-12 pr-3 
              ${isSearchVisible ? 'block' : 'hidden'} 
              lg:block
              `}
            placeholder="Search for News"
          />
        </label>
        {/* logo  */}
        <img src={logo} alt="logo" className="w-6 h-10 xxs:flex lg:hidden" />
        {/* Language options */}
        <select className="p-3 bg-mainColor xxs:hidden lg:block">
          <option value="International">INT</option>
          <option value="English">EN</option>
          <option value="Arabic">AR</option>
          <option value="Turkish">TR</option>
          <option value="Russian">RU</option>
        </select>
      </div>
    </header>
  );
}

export default NavBar;
