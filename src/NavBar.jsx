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
      <div
        className="flex h-[4rem] border-b border-gray-500 p-4 items-center justify-between text-sm w-full 
                  lg:h-[5rem] lg:border-none"
      >
        {/* sidebar icon*/}
        <div className="flex w-28 lg:hidden ">
          <Menu
            className="text-white cursor-pointer"
            sx={{ fontSize: '2rem' }}
          />
        </div>
        {/* Search bar for pc screen*/}
        <label className="relative lg:flex items-center lg:m-0 mb-5 w-40 lg:w-60 xxs:hidden">
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

          {/* Input field*/}
          <input
            className={`placeholder:italic placeholder:text-slate-500 text-slate-300 bg-transparent outline-none w-full border border-slate-500 rounded-full py-2 pl-12 pr-3 
              ${isSearchVisible ? 'block' : 'hidden'} 
              lg:block
              `}
            placeholder="Search for News"
          />
        </label>

        {/* the icon  */}
        <div className="flex flex-1 justify-center">
          {/* logo  */}
          <img src={logo} alt="logo" className=" h-7 lg:hidden " />
        </div>

        {/* search bar for mobile screen  */}
        <div className="h-[2.1rem] top-[0.2px]">
          <label className="relative flex items-center mb-5 w-32 lg:hidden ">
            {/* Input field*/}
            <input
              className={`placeholder:italic placeholder:text-slate-500 placeholder:text-[0.6rem] 
                 text-slate-300 bg-transparent outline-none w-full border border-slate-500 rounded-full py-2 pl-2 pr-3 
              ${isSearchVisible ? 'block' : 'hidden'} 
              lg:block
              `}
              placeholder="Search for News"
            />
            <span
              onClick={toggleSearchVisibility}
              className="absolute right-3 text-slate-500 h-full content-center cursor-pointer w-6 md:w-7 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </span>
          </label>
        </div>

        {/* Language options */}
        <select className="p-3 bg-mainColor hidden lg:flex">
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
