import { useContext } from 'react';
import logoPage from './assets/logo.svg';
import { sideBarData } from './sideBarData';
import { SideBarContext } from './Context/SideBarContext';
import { Close } from '@mui/icons-material';

function SideBar() {
    const {isMenuVisible, setIsMenuVisible} = useContext(SideBarContext);

  return (
    <div
      className={`bg-sidebarColor flex flex-col h-screen items-center justify-start lg:w-[18rem] transition-all ease-in-out duration-800 text-md  overflow-hidden
      ${isMenuVisible ? "w-[14rem] absolute z-50" : "w-[0rem] relative"}`}>
         
         <div className='hover:bg-gray-600 transition ease-in-out duration-500 opacity-60 flex self-end p-2 w-fit h-fit rounded-full 
         cursor-pointer m-2 lg:hidden' onClick={()=>setIsMenuVisible((prev)=>(!prev))}>
           <Close />
         </div>
       <div className='h-full w-full flex flex-col gap-8'> 
        <div className="flex justify-center items-center gap-1 w-full h-36 xxs:flex-col md:flex-row">
        <img src={logoPage} alt="logo" className="xxs:w-12 lg:w-12" />
        <h1 className="xxs:text-[1rem] md:text-[1.8rem] font-extrabold">News</h1>
      </div>

      <div className="w-full h-8 font-bold text-center content-center ">
        <h1>BREAKING NEWS</h1>
      </div>

      {sideBarData.map((sideData) => (
        <div
          key={sideData.id}
          className=" hover:cursor-pointer w-full h-8 text-center content-center text-gray-500 
          *: hover:border-mainColor hover:ring-mainColor hover:ring-2
          hover:-translate-y-1 duration-300"
        >
          {sideData.title}
        </div>
      ))}</div>
    </div>
  );
}

export default SideBar;
