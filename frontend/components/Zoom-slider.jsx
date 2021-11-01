import React from 'react';
import style from '../styles/modules/zoom-slider.module.scss';
import CloseBtn from '../public/icon-svg/Close-mob-menu-icon';
import NextBtn from '../public/icon-svg/Next-btn-icon2';
import { getStrapiMedia } from "../utils/medias"
import NextImage from 'next/image';




const ZoomSlider = ({photoIndex, number, src, changeBigPhoto, showBigPhoto, alternativeText}) => {

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  return (
    <div className={style.zoom_slider}>
      <div className={style.zoom_wrap}>
        <div className={style.zoom_close}>
          <CloseBtn
            close={()=>{showBigPhoto()}}
          />
        </div>
        <div className={style.zoom_photo}>
          <div>
            <NextBtn 
              changeSlide={()=>{changeBigPhoto('left')}}
              className={style.next_left}
            />
          </div>
          <div className={style.zoom_img}>
          {src ? <NextImage 
            loader={loader}
            layout="fill"
            objectFit="contain"
            src={src}
            alt={alternativeText || ""}
            /> : null}
            {/* <img src={src} alt="img" /> */}
          </div>
          <div>
            <NextBtn
              className={style.next_right} 
              changeSlide={()=>{changeBigPhoto('right')}}
            />
          </div>
        </div>
        <span><span className={style.number}>{photoIndex} </span>/ {number}</span>
        <div className={style.mobile_btn_wrap}>
          <div>
            <NextBtn 
              changeSlide={()=>{changeBigPhoto('left')}}
              className={style.next_left}
            />
          </div>
          <div>
            <NextBtn
              className={style.next_right} 
              changeSlide={()=>{changeBigPhoto('right')}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomSlider;
