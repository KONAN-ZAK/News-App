import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import NewsSideScroller from './NewsSideScroller';
import NewsGeneral from './NewsGeneral';

function App() {
  const ApiKey = 'e69df8ef03a24d3f9cfc643059a92e52';
  // list of articles fetched from the API.
  const [News, setNews] = useState([]);
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
  const fetchNews = async (searchQuery = '', pageNumber = 1, lang = 'en') => {
    //set to true to indicate data fetching
    setLoading(true);
    //try catch Block:
    try {

      //try for later the Top head Line news ....
      const response = await fetch(`https://newsapi.org/v2/everything?q=${
        searchQuery || 'news'
      }&page=${pageNumber}
        &language=${lang}&apiKey=${ApiKey}`);


      const data = await response.json();
      if (data.articles) {
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
      } else {
        console.error('Error fetching articles:', data);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
    console.log(articles);
  };

  ///////
  return (
    // flex row has (sideBar ) and (NavBar & NewsSideScroller & NewsGeneral)
    <div className="flex flex-row ">
      <SideBar></SideBar>
      {/* Flex-col (NavBar) and (NewsSideScroller & NewsGeneral)   */}
      <div className=" flex flex-col h-screen w-full bg-mainColor">
        <NavBar></NavBar>
        {/* Flex-col (NewsSideScroller) and ( NewsGeneral)   */}
        <div className="h-full flex flex-col gap-5 p-4 overflow-y-scroll lg:p-8">
          <NewsSideScroller></NewsSideScroller>
          <NewsGeneral></NewsGeneral>
        </div>
      </div>
    </div>
  );
}
export default App;
