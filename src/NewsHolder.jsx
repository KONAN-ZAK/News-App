import { useState, useEffect } from 'react';
import NewsSideScroller from './NewsSideScroller';
import NewsGeneral from './NewsGeneral';
function NewsHolder() {
  return (
    <>
      <NewsSideScroller></NewsSideScroller>
      <NewsGeneral></NewsGeneral>
    </>
  );
}
export default NewsHolder ;