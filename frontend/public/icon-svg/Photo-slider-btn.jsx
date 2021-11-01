import React from 'react';

const PhotoSliderBtn = ({className, nextPhoto}) => {
  return (
    <svg onClick={()=>{nextPhoto()}} className={className} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="23" r="22" stroke="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.9434 22.878L27.3813 16.4401C27.7777 16.0438 27.7782 15.4025 27.3831 15.0073C26.9851 14.6094 26.3464 14.613 25.9503 15.0091L18.7987 22.1607C18.7984 22.161 18.7981 22.1613 18.7978 22.1616C18.7975 22.1619 18.7972 22.1622 18.7969 22.1625C18.5982 22.3611 18.4996 22.6198 18.5 22.8784C18.501 23.1376 18.5996 23.3962 18.7969 23.5935C18.7972 23.5938 18.7975 23.5941 18.7978 23.5944C18.7981 23.5947 18.7984 23.595 18.7987 23.5953L25.9503 30.7469C26.3466 31.1432 26.9879 31.1438 27.3831 30.7486C27.781 30.3507 27.7774 29.712 27.3813 29.3158L20.9434 22.878Z" fill="white"/>
    </svg>
  );
};

export default PhotoSliderBtn;
