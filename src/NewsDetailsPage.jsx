import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetailsPage = ({ articles }) => {
  const { id } = useParams();
  const newData = articles[id];

  console.log('show this details', newData);
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full flex md:flex-row flex-col  gap-4 h-fit">
        <div className='h-full xxs:w-full md:w-[20rem] xl:w-[30rem] 2xl:w-[40rem] '>
        <img
            src={newData?.urlToImage}
            alt="news Image"
            className=" w-full h-full object-cover"
          />
        </div>
        {/* xxs:bg-red-600 xs:bg-red-300 sm:bg-orange-700 md:bg-indigo-900 lg:bg-blue-600 xl:bg-emerald-900 2xl:bg-yellow-500  */}
          <div className='flex flex-col flex-1 gap-4'>
          <div className="w-full h-fit">
          <h1 className='font-bold text-[2rem]'>{newData?.title}</h1>
        </div>

        <div className="w-full h-fit text-[1rem] lg:text-[1.2rem]">{newData?.description}</div>
        <div className='text-blue-500 text-[0.8rem] hover:text-slate-700'><a href={newData?.url}>Orginal Article....</a></div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default NewsDetailsPage;
