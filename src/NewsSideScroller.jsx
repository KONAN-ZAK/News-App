import cardLogo from './assets/logo.svg';
import rightArrow from './assets/rightArrow.svg';
import leftArrow from './assets/leftArrow.svg';
import Card1 from './Card1';
function NewsSideScroller() {
  return (
    <div className=" h-[20rem] flex justify-evenly items-center bg-sideScrollColor p-10  rounded-lg relative">
      <div className="flex absolute text-md top-0 justify-between p-4 w-full">
        <p className="font-bold">What's New ?</p>
        <p className="text-gray-400">LATEST NEWS</p>
      </div>

      <img
        src={leftArrow}
        alt="sideSlider "
        className="absolute -left-2 w-10  cursor-pointer
           hover:bg-gray-100 hover:rounded-full 
           hover:-translate-x-1 duration-500"
      />

      <div className="flex gap-5 justify-evenly items-center mt-10">
        {/* the card */}
        {Array.from({ length: 5 })?.map((item) => (
          <Card1 />
        ))}
      </div>
      <img
        src={rightArrow}
        alt="sideSlider "
        className="absolute -right-2 w-10 cursor-pointer 
           hover:bg-gray-100 hover:rounded-full
           hover:translate-x-1 duration-500"
      />
    </div>
  );
}

export default NewsSideScroller;
