import cardLogo from './assets/logo.svg';
import rightArrow from './assets/rightArrow.svg';
import leftArrow from './assets/leftArrow.svg';
import Card1 from './Card1';
function NewsSideScroller() {
  return (
    <div className="  h-[15rem] flex flex-col justify-center bg-sideScrollColor rounded-lg lg:h-[23rem]">
      <div className="flex text-md top-0 justify-between items-center w-full px-2 h-[2rem] rounded-lg lg:p-5">
        <p className="font-bold">What's New ?</p>
        <p className="text-gray-400">LATEST NEWS</p>
      </div>
      {/* the card pc*/}
      <div className="relative hidden lg:flex justify-evenly items-center flex-1 w-full py-5">
        <img
          src={leftArrow}
          alt="sideSliderLeft"
          className="absolute -left-2 w-10  cursor-pointer
           hover:bg-gray-100 hover:rounded-full 
           hover:-translate-x-1 duration-500 z-10
           lg:block hidden"
        />
        {Array.from({ length: 4 })?.map((item) => (
          <Card1 />
        ))}
        <img
          src={rightArrow}
          alt="sideSliderRight"
          className="absolute -right-2  lg:w-10 cursor-pointer 
           hover:bg-gray-100 hover:rounded-full
           hover:translate-x-1 duration-500
           lg:block hidden z-10"
        />{' '}
      </div>
      {/* the card phone */}
      <div className="flex flex-1 gap-4 justify-evenly w-full items-center lg:hidden md:hidden rounded-lg py-2">
        {Array.from({ length: 2 })?.map((item) => (
          <Card1 />
        ))}{' '}
      </div>
      {/* the card pc  */}
      <div className="md:flex flex-1 gap-4 justify-evenly w-full items-center xxs:hidden  lg:hidden rounded-lg py-2">
        {Array.from({ length: 3 })?.map((item) => (
          <Card1 />
        ))}{' '}
      </div>
    </div>
  );
}

export default NewsSideScroller;
