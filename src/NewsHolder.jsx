import { useState, useEffect } from 'react';
import NewsSideScroller from './NewsSideScroller';
import NewsGeneral from './NewsGeneral';
function NewsHolder({ articles }) {

  console.log('this is the article', articles);
  return (
    
    <>
      <NewsSideScroller article={articles}/>
      <NewsGeneral articles={articles} />
    </>
  );
}
export default NewsHolder;
