import logoPage from './assets/logo.svg';

function SideBar() {
  return (
    <div className="flex flex-col h-screen min-w-[12%]  gap-7  items-center">
      <div className="flex justify-center items-center gap-1 w-full h-24">
        <img src={logoPage} alt="logo" className="w-14" />
        <h1 className="text-4xl font-extrabold">News</h1>
      </div>

      <div className="w-full h-24 text-2xl flex items-center justify-center">
        IMG text
      </div>
      <div className="w-full h-24 text-2xl flex items-center justify-center">
        IMG text
      </div>
      <div className="w-full h-24 text-2xl flex items-center justify-center">
        IMG text
      </div>
      <div className="w-full h-24 text-2xl flex items-center justify-center">
        IMG text
      </div>
      <div className="w-full h-24 text-2xl flex items-center justify-center">
        IMG text
      </div>
    </div>
  );
}

export default SideBar;
