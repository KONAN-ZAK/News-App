import Card1 from './Card1';
import Footer from './Footer';
import { newsData } from './data';
function NewsGeneral() {
  return (
    <div className="flex justify-between gap-10">
      <div className="news grid grid-cols-4 grid-rows-auto  gap-10">
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