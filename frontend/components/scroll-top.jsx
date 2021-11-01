import React, {useState, useRef, useEffect} from 'react';
import style from '../styles/modules/scroll-top.module.scss';
import div from 'next/link';


const ScrollTop = () => {
  let [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   if (window.innerWidth >= 1224) {
  //     setScrollTop((window.innerWidth - 1192) / 2)
  //   } else {
  //     setScrollTop(16)
  //   }
  // }, [])
  
  function scrollToTop() {
    window.scroll(0,0)
  }
  return (
    <div
      onClick={()=>{scrollToTop()}}
      // style={{right: `${scrollTop}px`}}
      className={style.scroll_top}
    >
    </div>
  )
}

export default ScrollTop
