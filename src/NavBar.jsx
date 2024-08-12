import searchIcon from './assets/search_icon.svg';

function NavBar() {
  return (
    <header>
      {/* search and drop down options  */}
      <div className="flex h-[5rem] items-center justify-between px-4 text-sm">
        {/* search bar  */}

        <label className="relative w-60 flex items-center">
          <span className="absolute left-3 text-slate-500 h-full content-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="currentColor"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </span>

          <input
            className=" placeholder:italic placeholder:text-slate-500 text-slate-300
            bg-transparent outline-none 
            w-full border border-slate-500 rounded-full py-2 pl-12 pr-3"
            placeholder="Search for News"
          />
        </label>

        {/*...........Language options.......... */}
        <select className="p-3 bg-mainColor">
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
