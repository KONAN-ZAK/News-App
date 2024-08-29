import Card1 from './Card1';
function NewsSideScroller({ article }) {
  return (
    <div className="  h-[15rem] flex flex-col justify-center bg-sideScrollColor rounded-lg lg:h-[23rem]">
      <div className="flex text-md top-0 justify-between items-center w-full px-2 h-[2rem] rounded-lg lg:p-5">
        <p className="font-bold">What's New ?</p>
        <p className="text-gray-400">LATEST NEWS</p>
      </div>

      <div className="overflow-x-scroll overflow-y-hidden">
        {/* <icon/> */}
        <div className="gap-2 w-[10rem] flex py-5">
          {article?.map((article, index) => (
            <div key={index}>
              <Card1
                article={article}
                key={index}
                index={index}
                className="p-2 rounded-lg cursor-pointer hover:border-sky-500
                          hover:ring-sky-500 hover:ring-2 hover:-translate-y-1 duration-300
                          bg-sideScrollColor w-[9rem] lg:w-[15rem] "
                       
              />
            </div>
          ))}
        </div>
        {/* <icon/> */}
      </div>
    </div>
  );
}

export default NewsSideScroller;
