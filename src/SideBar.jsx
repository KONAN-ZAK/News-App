import logoPage from './assets/logo.svg';

function SideBar() {
  return (
    <div className="bg-sidebarColor flex flex-col h-screen w-[25rem] gap-5 items-center justify-start">
      <div className="flex justify-center items-center gap-1 w-full h-40">
        <img src={logoPage} alt="logo" className="w-14" />
        <h1 className="text-4xl font-extrabold">News</h1>
      </div>

      <div className="w-full h-20 text-md font-bold text-center content-start">
        <h1>BREAKING NEWS</h1>
      </div>

      <div className="w-full h-16 text-md text-center content-center text-gray-500">
        SCIENCE & TECH
      </div>
      <div className="w-full h-16 text-md text-center content-center text-gray-500">
        SPORT
      </div>
      <div className="w-full h-16 text-md text-center content-center text-gray-500">
        FINANCE
      </div>
      <div className="w-full h-16 text-md text-center content-center text-gray-500">
        LIFESTYLE
      </div>
      <div className="w-full h-16 text-md text-center content-center text-gray-500">
      SCIENCE & TECH
      </div>
      <div className="w-full h-16 text-md text-center content-center text-gray-500">
      SCIENCE & TECH
      </div>
      <div className="w-full h-16 text-md text-center content-center text-gray-500">
      SCIENCE & TECH
      </div>
      <div className="w-full h-16 text-md text-center content-center text-gray-500">
      SCIENCE & TECH
      </div>
    </div>
  );
}

export default SideBar;
