import cardLogo from './assets/logo.svg';
import rightArrow from './assets/rightArrow.svg';
import leftArrow from './assets/leftArrow.svg';
import Card1 from './Card1';
function NewsSideScroller() {
  return (
    <div className=" lg:h-[23rem] h-[15rem] flex flex-col justify-center bg-sideScrollColor rounded-lg ">
      <div className="flex text-md top-0 justify-between items-center lg:p-5 w-full px-2 h-[2rem] rounded-lg">
        <p className="font-bold">What's New ?</p>
        <p className="text-gray-400">LATEST NEWS</p>
      </div>
      {/* the card pc*/}
      <div className="relative hidden lg:flex justify-evenly items-center flex-1 w-full py-5">
        <img
          src={leftArrow}
          alt="sideSlider"
          className="absolute -left-2 w-10  cursor-pointer
           hover:bg-gray-100 hover:rounded-full 
           hover:-translate-x-1 duration-500
           lg:block hidden"
        />
        {Array.from({ length: 5 })?.map((item) => (
          <Card1 />
        ))}
        <img
          src={rightArrow}
          alt="sideSlider "
          className="absolute -right-2  lg:w-10 cursor-pointer 
           hover:bg-gray-100 hover:rounded-full
           hover:translate-x-1 duration-500
           lg:block hidden"
        />{' '}
      </div>
      {/* the card phone */}
      <div className="flex flex-1 gap-4 justify-evenly w-full items-center lg:hidden rounded-lg py-2">
        {Array.from({ length: 2 })?.map((item) => (
          <Card1 />
        ))}{' '}
      </div>
    </div>
  );
}

export default NewsSideScroller;
