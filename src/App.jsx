import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import NewsSideScroller from './NewsSideScroller';
import NewsGeneral from './NewsGeneral';
import fotoo from './assets/image4.png';
function App() {
  return (
    //flex row has sideBar and
    <div className=" flex flex-row ">
      <SideBar></SideBar>
      <div className=" flex flex-col  h-screen w-full bg-mainColor">
        <NavBar></NavBar>

        <div className="  h-full  flex flex-col gap-8 p-10 overflow-y-scroll ">
          <NewsSideScroller></NewsSideScroller>
          <NewsGeneral></NewsGeneral>
        </div>
      </div>
    </div>
  );
}

export default App;
