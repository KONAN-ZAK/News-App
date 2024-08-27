import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetailsPage = ({ articles }) => {
  const { id } = useParams();
  const newData = articles[id];

  console.log('show this details', newData);
  return (
    <div className="w-full h-full">
      <div className="w-full h-full  flex flex-col gap-4">
        <div className="w-full bg-green-300 h-[24rem]">
          <img
            src={newData?.urlToImage}
            alt="news Image"
            className="w-full h-full"
          />
        </div>
        <div className="w-full h-fit">
          <h1>{newData?.title}</h1>
        </div>

        <div className="w-full h-fit">{newData?.description}</div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
