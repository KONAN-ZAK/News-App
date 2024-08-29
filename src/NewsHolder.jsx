
import NewsSideScroller from './NewsSideScroller';
import NewsGeneral from './NewsGeneral';
function NewsHolder({ articles }) {

  return (
    
    <>
      <NewsSideScroller article={articles}/>
      <NewsGeneral articles={articles} />
    </>
  );
}
export default NewsHolder;
