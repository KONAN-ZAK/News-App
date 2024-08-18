import Card1 from './Card1';
import Footer from './Footer';
import { newsData } from './data';
function NewsGeneral() {
  return (
    <div
      className="flex justify-between gap-4 flex-wrap 
    // md:flex-nowrap 
    "
    >
      {/*    TODO      tomoorrow the center the card inside the grid  *:justify-between */}
      <div className=" grid  grid-cols-2 md:grid-cols-3 2xl:grid-cols-4  auto-cols-fr grid-rows-auto w-full gap-6 2xl:gap-10 ">
        {newsData.map((data) => (
          <div key={data.id}>
            <Card1 />
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default NewsGeneral;
