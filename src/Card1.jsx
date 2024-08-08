import React from 'react';
import newsCard from './assets/newsCard.svg';
function Card1() {
  return (
    <div
      className="cursor-pointer bg-blue-50 w-[18rem] h-[20rem]  
    rounded-[20px] p-2 shadow-slate-500 shadow-inner text-center  
     hover:outline-none hover:border-sky-500 hover:ring-sky-500 hover:ring-2
     hover:-translate-y-1 duration-300"
    >
      {/* image section */}
      <div className="cardImage  w-full h-44 rounded-[20px]">
        <img src={newsCard} alt="card_Image" className=" h-full w-full" />
      </div>

      {/*the card description*/}
      <div className="w-full h-28 pt-3 overflow-hidden">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        dolores maxime, rerum impedit assumenda amet iste, ad mollitia
      </div>
    </div>
  );
}
export default Card1;
