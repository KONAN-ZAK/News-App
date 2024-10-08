import React from 'react';
import { useNavigate } from 'react-router-dom';
function Card1({ article, index, className }) {
  const navigate = useNavigate();
  const handleNewDetailsPage = (index) => {
    navigate(`/newsDetails/${index}`);
  };

  //the hour published date
  const getPublishedHour = (dateString) => {
    const date = new Date(dateString);
    return date.getHours();
  };

  // console.log(article)
  return (
    article.urlToImage &&
    article.publishedAt && (
      <div className={className} onClick={() => handleNewDetailsPage(index)}>
        {/* image section */}
        <div className=" h-[5rem] lg:h-[7rem] 2xl:h-[9rem] ">
          <img
            src={article?.urlToImage}
            alt="Artical Image"
            className=" h-full w-full rounded-lg"
          />
        </div>

        {/*the card news title time*/}
        <div className="flex justify-between text-gray-500 pt-1 pb-2">
          <p>{article.source?.name}</p>
          <p>{getPublishedHour(article.publishedAt)} HOURS</p>
        </div>

        {/*the card description*/}
        <div className="w-full lg:h-[5rem] overflow-hidden">
          {article?.title}
        </div>
      </div>
    )
  );
}
export default Card1;
