import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import NewsSideScroller from './NewsSideScroller';
import NewsGeneral from './NewsGeneral';

function App() {
  return (
    //flex row has sideBar and
    <div className="flex flex-row ">
      
        <SideBar></SideBar>
      
      <div className=" flex flex-col h-screen w-full bg-mainColor">
        <NavBar></NavBar>

        <div className="h-full flex flex-col gap-5 p-4 overflow-y-scroll lg:p-8">
          <NewsSideScroller></NewsSideScroller>
          <NewsGeneral></NewsGeneral>
        </div>
      </div>
    </div>
  );
}
export default App;