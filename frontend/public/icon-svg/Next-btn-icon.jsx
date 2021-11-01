import React from 'react';

const NextBtnIcon = ({className, changeSlide}) => {
  return (
    <svg onClick={()=>{changeSlide()}} className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.1718 19.8915L23.8944 14.169C24.2467 13.8166 24.2472 13.2466 23.8959 12.8954C23.5422 12.5417 22.9745 12.5448 22.6223 12.8969L16.2654 19.2539C16.2651 19.2542 16.2648 19.2544 16.2646 19.2547C16.2643 19.255 16.264 19.2552 16.2638 19.2555C16.0872 19.4321 15.9996 19.662 15.9999 19.8919C16.0007 20.1223 16.0884 20.3522 16.2638 20.5275C16.264 20.5278 16.2643 20.528 16.2646 20.5283C16.2648 20.5286 16.2651 20.5288 16.2654 20.5291L22.6223 26.8861C22.9747 27.2384 23.5447 27.2389 23.8959 26.8876C24.2496 26.5339 24.2465 25.9662 23.8944 25.614L18.1718 19.8915Z" fill="#171E26"/>
    </svg>
  );
};

export default NextBtnIcon;
