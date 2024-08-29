import Card1 from './Card1';
import Footer from './Footer';
function NewsGeneral({ articles }) {
  return (
    <div
      className="flex justify-between gap-4 flex-wrap md:flex-nowrap 
    "
    >
      <div
        className=" grid grid-cols-2 grid-rows-auto w-full gap-3 auto-cols-fr 
      md:grid-cols-3 
      2xl:grid-cols-4 2xl:gap-5 "
      >
        {articles?.map((article, index) => (
          <Card1
            article={article}
            key={index}
            index={index}
            className="p-2 rounded-lg cursor-pointer hover:border-sky-500
          hover:ring-sky-500 hover:ring-2 hover:-translate-y-1 duration-300
              bg-sideScrollColor"
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default NewsGeneral;
