import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetailsPage = ({ articles }) => {
  const { id } = useParams();
  const newData = articles[id];
  return (
    <div className="w-full h-full text-gray-300">
      <div className="w-full h-fit flex flex-col xl:flex-row gap-8">
        <div className="h-full flex 2xl:w-[50rem] xl:w-[35rem] ">
          <img
            src={newData?.urlToImage}
            alt={newData?.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* the details  */}
        <div className="flex flex-1 flex-col gap-8">
          <div className="w-full h-fit font-extrabold xl:text-[2rem] text-[1.5rem] ">
            <h1>{newData?.title}</h1>
          </div>
          <div className="w-full h-fit text-[1rem]">
            <p>{newData?.description}</p>
          </div>
          <div className="text-blue-500 text-[0.8rem] hover:text-slate-700">
            <a href={newData?.url}>Orginal Article....</a>
          </div>
        </div>
      </div>
    </div>
    //////////////////////////////////////////
  );
};

export default NewsDetailsPage;

//
