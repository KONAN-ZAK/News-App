import React from 'react';
import cardlogo from './assets/newsCard.svg';
import { useNavigate } from 'react-router-dom';
function Card1({ article, index, className }) {
  console.log('this is 02 article', article)

    const navigate = useNavigate();

   const handleNewDetailsPage =(index)=>{
       navigate(`/newsDetails/${index}`);
   }

  return (
    // THE CARD

    <div className={className} onClick={()=>handleNewDetailsPage(index)}>
      {/* image section */}
      <div className="cardImage w-full h-[5rem] lg:h-[7rem] 2xl:h-[9rem] bg-gray-100 rounded-lg">
        <img src={article?.urlToImage} alt="hggt" className=" h-full w-full" />
      </div>

      {/*the card news title time*/}
      <div className="flex justify-between text-gray-500 pt-1 pb-2">
        <p>BBC NEWS</p>
        <p>10 HOURS</p>
      </div>

      {/*the card description*/}
      <div className="w-full lg:h-[5rem] overflow-hidden">
        {article?.title}
      </div>
    </div>
  );
}
export default Card1;
