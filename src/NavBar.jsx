import { Menu } from '@mui/icons-material';
import searchIcon from './assets/search_icon.svg';
import { useContext, useState, useRef, useEffect } from 'react';
import logo from './assets/logo.svg';
import { SideBarContext } from './Context/SideBarContext';
import { Link } from 'react-router-dom';

function NavBar({ onHomeClick, onLanguageSelect, apiKey, onSearch }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchBarRef = useRef(null);
  // State to manage the visibility of the input
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const { setIsMenuVisible } = useContext(SideBarContext);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(true);

  // Fetch suggestions based on query
  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
    } else {
      const fetchSuggestions = async () => {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
          );
          const data = await response.json();
          if (data.articles) {
            const suggestedItems = data.articles.map(
              (article) => article.title
            );
            setSuggestions(suggestedItems);
          } else {
            setSuggestions([]);
          }
        } catch (error) {
          console.error('Error fetching suggestions:', error);
          setSuggestions([]);
        }
      };

      fetchSuggestions();
    }
  }, [query, apiKey]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    onSearch(suggestion); // Perform search when suggestion is clicked
    setIsSuggestionsVisible(false); //close the suggestions
    setSuggestions([]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  // Handle input change
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Function to toggle the visibility
  const toggleSearchBarVisibility = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
    setQuery('');
  };
  // Function to toggle the visibility of the sidebar
  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };
  return (
    <header>
      <div
        className="flex h-[4rem] border-b border-gray-500 p-4 items-center justify-between text-sm w-full 
                  lg:h-[5rem] lg:border-none "
      >
        {/* Menu icon*/}
        <div
          className="flex w-28 lg:hidden relative "
          onClick={toggleMenuVisibility}
        >
          <Menu
            className="text-white cursor-pointer"
            sx={{ fontSize: '2rem' }}
          />
        </div>

        {/* the PageLogo */}
        <div className="flex flex-1 justify-center">
          <Link to="/" onClick={onHomeClick}>
            <img src={logo} alt="logo" className=" h-7 lg:hidden " />
          </Link>
        </div>

        {/* Search bar for pc screen */}
        <div
          ref={searchBarRef}
          className="relative lg:flex items-center justify-center w-40 lg:w-60 lg:order-first h-full"
        >
          <form onSubmit={handleSubmit}>
            <label>
              <span
                type="button"
                onClick={toggleSearchBarVisibility}
                className="absolute lg:left-4 right-2 text-slate-500 h-fit content-center cursor-pointer w-7 bottom-0 lg:bottom-2"
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
              <div>
                <input
                  className={` placeholder:italic placeholder:text-slate-500 text-slate-300 bg-transparent outline-none w-full border
                   border-slate-500 rounded-full lg:pl-12 pl-2  py-2
              ${isSearchBarVisible ? 'block' : 'hidden'} 
              lg:block
              `}
                  placeholder="Search for News"
                  type="text"
                  value={query}
                  onChange={handleChange}
                />
              </div>
            </label>
          </form>
          {isSuggestionsVisible && suggestions.length > 0 && (
            <ul className="absolute h-[18rem] lg:h-[25rem] top-11 lg:left-6 right-0 bg-sidebarColor rounded-b-xl z-10 lg:w-[40rem] w-[20rem] overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-slate-800"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Language options */}
        <select
          className="p-3 bg-mainColor hidden lg:flex order-10"
          onChange={(e) => {
            onLanguageSelect(e.target.value);
          }}
        >
          <option value="en">EN</option>
          <option value="ar">AR</option>
          <option value="fr">FR</option>
          <option value="fa">FA</option>
          <option value="tr">TR</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </header>
  );
}

export default NavBar;
