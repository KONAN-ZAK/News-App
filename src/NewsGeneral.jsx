import Card1 from './Card1';
import Footer from './Footer';
import { newsData } from './data';
function NewsGeneral({ articles }) {
  console.log('This is the general article',articles);
  return (
    <div
      className="flex justify-between gap-4 flex-wrap md:flex-nowrap 
    "
    >
      <div
        className=" grid  grid-cols-2 grid-rows-auto w-full gap-6 auto-cols-fr 
      md:grid-cols-3 
      2xl:grid-cols-4 2xl:gap-5 "
      >
        {articles?.map((article, index) => (
          <Card1 article={article} key={index} index={index} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default NewsGeneral;
