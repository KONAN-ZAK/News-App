import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import NewsHolder from './NewsHolder';
import NewsDetailsPage from './NewsDetailsPage';

// import ExternalNewsPage from './ExternalNewsPage';

function App() {
  const ApiKey = 'dbb107fa60514a0cb3c0a4abece435d0';
  // list of articles fetched from the API.
  const [articles, setArticles] = useState([]);
  // Stores the search query or category.
  const [query, setQuery] = useState('');
  // Keep tracks of the current page.
  const [page, setPage] = useState(1);
  // check if the application is currently fetching data.
  const [loading, setLoading] = useState(false);
  // selected language for fetching articles.
  const [language, setLanguage] = useState('en');
  ///////
  //Fetch News from NewsAPI NewsAPI.
  //search for in News. // page of results to fetch // language of the News to fetch.
  const fetchArticles = async (
    searchQuery = '',
    pageNumber = 1,
    lang = 'en'
  ) => {
    //set to true to indicate data fetching
    setLoading(true);
    //try catch Block:
    try {
      //try for later the Top head Line news ....
      const response = await fetch(`https://newsapi.org/v2/everything?q=${
        searchQuery || 'news'
      }&page=${pageNumber}
      &language=${lang}&apiKey=${ApiKey}`);
      // response is awaited and then converted to JSON.
      const data = await response.json();
      console.log('This is the data',data);

      if (data.articles) {
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
      } else {
        console.error('Error fetching articles:', data);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      // After the request is completed (whether successful or not), loading is set to false
      setLoading(false);
    }

    console.log(articles);
  };
  ///////////////////////////
  // triggered whenever we search or language state changes..
  useEffect(() => {
    setArticles([]); // Reset articles on new search or language change
    fetchArticles(query, 1, language); //starting from page 1
    setPage(2); //After fetching the first page, it sets the page state to 2, so the next fetch will start from the second page
  }, [query, language]);

  //  If the page number is greater than 1 ( not the first page)
  //it fetches more articles based on the current query, page, and language.
  useEffect(() => {
    if (page > 1) {
      fetchArticles(query, page, language);
    }
  }, [page]);

  // Handle search input,This function is called when the user performs a search
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  // Handle category selection, this is used when the user selects a specific category.
  const handleCategorySelect = (category) => {
    setQuery(category);
  };

  // Handle language selection, function is called when the user selects a different language.
  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
  };

  // // Handle home click
  // const handleHomeClick = () => {
  //   setQuery('');
  //   setLanguage('en');
  // };

  // Handle scroll event to load more articles
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  ///////////////////////////////////////////////
  return (
    
    <Router>
      {/* // flex row has (sideBar ) and (NavBar & NewsSideScroller & NewsGeneral) */}
      <div className="flex flex-row ">
        <SideBar />

        {/* flex-col (NavBar) and (NewsSideScroller & NewsGeneral)   */}
        <div className=" flex flex-col h-screen w-full bg-mainColor">
          <NavBar />

          {/* Flex-col (NewsSideScroller) and ( NewsGeneral)   */}
          <div className="h-full flex flex-col gap-5 p-4 overflow-y-scroll lg:p-8">
            {/* holding 2 components for Routering it  */}

            <Routes>
              <Route path="/" element={<NewsHolder articles={articles} />} />
              <Route path="/newsDetails/:id" element={<NewsDetailsPage articles={articles} />} />
            </Routes>
            {loading && <div className="text-center">Loading...</div>}
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
