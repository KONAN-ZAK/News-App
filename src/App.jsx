import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import NewsSideScroller from './NewsSideScroller';
import NewsGeneral from './NewsGeneral';

function App() {
  return (
    //flex row has sideBar and
    <div className=" flex flex-row ">
      <div className='flex-1'>
        <SideBar></SideBar>
      </div>
      <div className=" flex flex-col h-screen w-full bg-mainColor">
        <NavBar></NavBar>

        <div className="h-full flex flex-col gap-5 p-4 lg:p-8 overflow-y-scroll ">
          <NewsSideScroller></NewsSideScroller>
          <NewsGeneral></NewsGeneral>
        </div>
      </div>
    </div>
  );
}
export default App;