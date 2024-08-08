import Card1 from './Card1';
import Footer from './Footer';
import { newsData } from './data';
function NewsGeneral() {
  return (
    // <div className=" h-auto w-full flex ">
    //   <div className="w-full flex flex-row-reverse flex-wrap justify-evenly">
    //     <div className="w-[25rem]  bg-transparent sticky  top-0  bg-white">
    //       ;Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
    //       exercitationem! Nostrum unde distinctio quaerat necessitatibus
    //       deleniti eum architecto eos recusandae maiores? Voluptatem eaque,
    //       ducimus tempore quasi accusamus fugit architecto magnam?
    //       ;Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
    //       exercitationem! Nostrum unde distinctio quaerat necessitatibus
    //       deleniti eum architecto eos recusandae maiores? Voluptatem eaque,
    //       ducimus tempore quasi accusamus fugit architecto magnam?
    //       ;Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
    //       exercitationem! Nostrum unde distinctio quaerat necessitatibus
    //       deleniti eum architecto eos recusandae maiores? Voluptatem eaque,

    //     </div>

    //     {newsData.map((data) => (
    //       <div key={data.id}>
    //         <Card1 />
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="flex justify-between">
      <div className="news grid grid-cols-4 grid-rows-auto  gap-14">
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
