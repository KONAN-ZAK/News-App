import React from 'react';
import cardlogo from './assets/newsCard.svg';
function Card1() {
  
  return (
    // THE CARD
    <div
      className="text-gray-300 bg-sideScrollColor cursor-pointer px-2 py-2 w-fit h-[10rem] 
      rounded-lg hover:border-sky-500 hover:ring-sky-500 hover:ring-2 hover:-translate-y-1 duration-300 
        lg:h-full  lg:px-4 
       "
    >
      {/* image section */}
      <div className="cardImage w-full h-[5rem] lg:h-[7rem] 2xl:h-[9rem] bg-gray-100 rounded-lg">
        <img src={cardlogo} alt="card_Image" className=" h-full w-full" />
      </div>

      {/*the card news title time*/}
      <div className="flex justify-between text-gray-500 pt-1 pb-2">
        <p>BBC NEWS</p>
        <p>10 HOURS</p>
      </div>

      {/*the card description*/}
      <div className="w-full lg:h-[5rem] overflow-hidden">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        dolores maxime, rerum impedit
      </div>
    </div>
  );
}
export default Card1;
