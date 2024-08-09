import searchIcon from './assets/search_icon.svg';

function NavBar() {
  return (
    <header className=" flex h-24 justify-between w-full px-10 items-center">
      {/* title  */}

      {/* search and drop down options  */}
      <div className="flex  gap-10 items-center h-[3rem]">
        <label className="relative w-80 h-full ">
          <span className="absolute left-0 h-full ">
            <img
              src={searchIcon}
              alt="search_icon"
              className="w-8 mx-1 h-full cursor-pointer"
            />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-500
            bg-gradient-to-r from-blue-100 to-blue-200 
            w-full border border-slate-200 rounded-lg py-2 pl-12 pr-3 shadow-xl
           focus:border-sky-300 focus:ring-sky-400 
            md: text-lg"
            placeholder="Search for News"
          />
        </label>
        {/* ,..................... */}
        <select
          className="p-3 bg-gradient-to-r from-blue-100 to-blue-200 outline-none text-gray-600
           rounded-lg shadow-lg transition-all duration-100
           focus:border-sky-300 focus:ring-sky-500 focus:ring-1 "
        >
          <option value="International">ENT</option>
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
