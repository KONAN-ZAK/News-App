import logoPage from './assets/logo.svg';
import { sideBarData } from './sideBarData';

function SideBar() {
  return (
    <div
      className="bg-sidebarColor flex flex-col h-screen  gap-10 items-center justify-start text-md
    w-[0rem]
    lg:w-[13rem]
    2xl:w-[18rem]"
    >
      <div className="flex justify-center items-center gap-1 w-full h-36 ">
        <img src={logoPage} alt="logo" className="2xl:w-14 lg:w-12" />
        <h1 className="2xl:text-4xl lg:text-3xl font-extrabold">News</h1>
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
      ))}
    </div>
  );
}

export default SideBar;
