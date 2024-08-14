import Card1 from './Card1';
import Footer from './Footer';
import { newsData } from './data';
function NewsGeneral() {
  return (
    <div
      className="flex justify-between gap-4
    xxs:flex-wrap 
    md:flex-nowrap"
    >
      {/*    TODO      tomoorrow the center the card inside the grid  *:justify-between */}
      <div className=" grid  grid-cols-2 lg:grid-cols-4 grid-rows-auto w-full gap-6 lg:gap-10 ">
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
