import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import NewsSideScroller from './NewsSideScroller';
import NewsGeneral from './NewsGeneral';
function App() {
  return (
    //flex row has sideBar and
    <div className="h-screen flex">
      <SideBar></SideBar>
      <div className=" flex flex-col gap-4 h-screen w-full ">
        <NavBar></NavBar>

        <div className=" bg-blue-300 h-full rounded-tl-[2rem] flex flex-col gap-10 p-10 overflow-y-scroll ">
          <NewsSideScroller></NewsSideScroller>
          <NewsGeneral></NewsGeneral>
        </div>

        {/* <Footer>
         
        </Footer> */}
      </div>
    </div>
  );
}

export default App;
