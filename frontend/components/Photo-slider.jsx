import React, { useState, useEffect, useRef} from 'react';
import Link from "next/link";
import style from '../styles/modules/photo-slider.module.scss';
import GradientText from './Gradient-text';
import PhotoSliderBtn from '../public/icon-svg/Photo-slider-btn';
import ClosePhoto from  '../public/icon-svg/Close-mob-menu-icon';

import { getStrapiMedia } from "../utils/medias";
import NextImage from 'next/image';

const PhotoSlider = () => {
  let [photoPosition, setPhotoPosition] = useState(0);
  let [activePhoto, setActivePhoto] = useState(3);
  let [btnSpeed, setBtnSpeed] = useState(false);
  let photoWrap = useRef();
  let [photoSIze, setPhotoSize] = useState(392)

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }


//   let photos = [
//     {id: 41, photo: '/photo-slider/8.png'},
//     {id: 12, photo: '/photo-slider/9.png'},
//     {id: 13, photo: '/photo-slider/10.png'},

//     {id: 0, photo: '/photo-slider/1.png'},
//     {id: 1, photo: '/photo-slider/2.png'},
//     {id: 2, photo: '/photo-slider/3.png'},
//     {id: 3, photo: '/photo-slider/4.png'},
//     {id: 4, photo: '/photo-slider/5.png'},
//     {id: 5, photo: '/photo-slider/6.png'},
//     {id: 6, photo: '/photo-slider/7.png'},
//     {id: 7, photo: '/photo-slider/8.png'},
//     {id: 8, photo: '/photo-slider/9.png'},
    
//     {id: 9, photo: '/photo-slider/10.png'},
//     {id: 10, photo: '/photo-slider/1.png'},
//     {id: 11, photo: '/photo-slider/2.png'},
//     {id: 22, photo: '/photo-slider/3.png'},
// ]

let photos = [
  {id: 41, photo: '/home-photo-slider/8.webp'},
  {id: 12, photo: '/home-photo-slider/9.webp'},
  {id: 13, photo: '/home-photo-slider/10.webp'},

  {id: 0, photo: '/home-photo-slider/1.webp'},
  {id: 1, photo: '/home-photo-slider/2.webp'},
  {id: 2, photo: '/home-photo-slider/3.webp'},
  {id: 3, photo: '/home-photo-slider/4.webp'},
  {id: 4, photo: '/home-photo-slider/5.webp'},
  {id: 5, photo: '/home-photo-slider/6.webp'},
  {id: 6, photo: '/home-photo-slider/7.webp'},
  {id: 7, photo: '/home-photo-slider/8.webp'},
  {id: 8, photo: '/home-photo-slider/9.webp'},
  
  {id: 9, photo: '/home-photo-slider/10.webp'},
  {id: 10, photo: '/home-photo-slider/1.webp'},
  {id: 11, photo: '/home-photo-slider/2.webp'},
  {id: 22, photo: '/home-photo-slider/3.webp'},
]


let [shoBigPhoto, setShowBigPhoto] = useState(false);

useEffect(()=>{
  window.addEventListener('resize', resiseSlider)

  if (window.innerWidth < 650) {
    setPhotoSize(250)
  } 
    setPhotoPosition((photoSIze * activePhoto / -1) + (window.innerWidth / 2) - (photoSIze / 2))
})

function resiseSlider(params) {
  setPhotoPosition((photoSIze * activePhoto / -1) + (window.innerWidth / 2) - (photoSIze / 2))
}

function nextPhoto(params, length) {
  let position = photoPosition;

  if(params && !btnSpeed) {

    if (activePhoto === photos.length - 4) {
      setBtnSpeed(true)
      position -= photoSIze;
      setActivePhoto(activePhoto + 1)
      setPhotoPosition(position)

      setTimeout(()=>{
        photoWrap.current.style.transition = '0s';
      },300)
    
      setTimeout(()=>{
        setActivePhoto(3)
        setPhotoPosition((photoSIze * 3 / -1) + (window.innerWidth / 2) - (photoSIze / 2))
      },400)

      setTimeout(()=>{
        photoWrap.current.style.transition = '0.3s';
      },500)

    } else {
      setBtnSpeed(true)
      position -= photoSIze;
      setActivePhoto(activePhoto + 1)
      setPhotoPosition(position)
    }
  }

  if(!params && !btnSpeed) {
    if(activePhoto === 3) {
      setBtnSpeed(true)
      position += photoSIze;
      setActivePhoto(activePhoto - 1)
      setPhotoPosition(position)

      setTimeout(()=>{
        photoWrap.current.style.transition = '0s';
      },300)

      setTimeout(()=>{
        setActivePhoto(12)
        setPhotoPosition((photoSIze * 12 / -1) + (window.innerWidth) / 2 - (photoSIze / 2))
      },400)

      setTimeout(()=>{
        photoWrap.current.style.transition = '0.3s';
      },500)

    } else {
      setBtnSpeed(true)
      position += photoSIze;
      setActivePhoto(activePhoto - 1)
      setPhotoPosition(position)
    }
  
  }

  setTimeout(()=>{
    setBtnSpeed(false)
  },900)
}

function showBigPhoto() {
  setShowBigPhoto(shoBigPhoto = !shoBigPhoto);
}

  return (
    <div  className={style.photo_slider}>
      {shoBigPhoto ? 
        <div className={style.big_photo_wrap}>
          <div className={style.photo}>
            <div className={style.close_btn_wrap}> <ClosePhoto close={()=>{showBigPhoto()}} className={style.close_btn} /></div>
            <img className={style.big_photo} src={photos[activePhoto].photo} alt="alt" />
          </div>
        </div>
      : null}
      
      <h2 className={style.title}>
        <GradientText>Світлини </GradientText>
        клубу
      </h2>
      <div className={style.slider}>
        <div className={style.slider_nav}>
          <PhotoSliderBtn nextPhoto={()=>{nextPhoto(false)}} className={style.left_btn} />
          <img
            className={style.nav_border}
            src="/photo-slider/slide=border.png"
            alt="img"
            onClick={()=>{showBigPhoto()}}
          />
          <PhotoSliderBtn nextPhoto={()=>{nextPhoto(true, photos.length)}} className={style.right_btn} />
        </div>
        <div 
          ref={photoWrap}
          style={{transform: `translateX(${photoPosition}px)`}}
          className={style.photo_wrap}>
          {photos.map(({id, photo, url, alternativeText}, index)=>{
            return (
             <div
              className={`${style.photo_filter} ${index === activePhoto ? style.active : ''}`}
              key={id}
            >
              <img 
                className={`${style.photo} `} 
                src={photo}
                alt="img"
              />

              {/* {url ? <NextImage 
                loader={loader}
                layout="fill"
                objectFit="contain"
                src={url}
                alt={alternativeText || ""}
              /> : null} */}
             </div>
            )
          })}
        </div>
      </div>

      <div className={style.mobile_btn_wrap}>
        <PhotoSliderBtn nextPhoto={()=>{nextPhoto(false)}} className={style.mpb_left_btn} />
        <PhotoSliderBtn nextPhoto={()=>{nextPhoto(true, photos.length)}} className={style.mob_right_btn} />
      </div>

      <div className={style.show_more}>
        <Link href='/gallery/gallery'>
          <a><span>Переглянути більше </span></a>
        </Link>
      </div>
      
    </div>
  );
};

export default PhotoSlider;
