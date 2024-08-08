import cardLogo from './assets/logo.svg';
import rightArrow from './assets/rightArrow.svg';
import leftArrow from './assets/leftArrow.svg';
import Card1 from './Card1';
function NewsSideScroller() {
  return (
    <div className="flex items-center">
      <div>
        <img
          src={leftArrow}
          alt="sideSlider "
          className="sliderBtn w-12 cursor-pointer
           hover:bg-gray-100 hover:rounded-full 
           hover:-translate-x-1 duration-500
           "
        />
      </div>
      <div className="w-full min-h-[20rem] flex gap-5 justify-evenly">
        {/* the card */}
        {Array.from({ length: 5 })?.map((item) => (
          <Card1 />
        ))}
      </div>
      <div>
        <img
          src={rightArrow}
          alt="sideSlider "
          className=" sliderBtn w-12 cursor-pointer 
           hover:bg-gray-100 hover:rounded-full
           hover:translate-x-1 duration-500"
        />
      </div>
    </div>
  );
}

export default NewsSideScroller;
