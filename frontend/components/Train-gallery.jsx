import React, { useState, useEffect, Fragment } from 'react';
import NextImage from 'next/image';
import style from '../styles/modules/train-gallery.module.scss';
import More from '../components/buttons/Primary-low-btn';
import { getStrapiMedia } from "../utils/medias"

import ZoomSlider from './Zoom-slider';

const TrainGallery = ({photos}) => {

  let [photoCount, setPhotoCount] = useState(4)
  let [bigPhoto, setBigPhoto] = useState(false);
  let [photoIndex, setPhotoIndex] = useState(0)

  function showMore() {
    setPhotoCount(photoCount + 4)
  }

  function showBigPhoto(index) {
    
    if (bigPhoto) {
      setBigPhoto(false);
    } else {
      setBigPhoto(true);
    }
    setPhotoIndex(index)
  }

  function changeBigPhoto(param) {
    

    if (param === 'right') {
      if (photoIndex === photos.length - 1) {
        setPhotoIndex(0)
      } else {
        setPhotoIndex(++photoIndex)
      }
    }

    if (param === 'left') {
      if (photoIndex === 0) {
          setPhotoIndex(photos.length - 1)
      } else {
          setPhotoIndex(--photoIndex)
      }
    }
  }

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  return (
    <div className={style.train_gallary}>
      {bigPhoto ?
        <ZoomSlider
        src={photos[photoIndex].url}
        alternativeText={photos[photoIndex].alternativeText}
        photoIndex={photoIndex + 1}
        number={photos.length}
        changeBigPhoto={(param)=>{changeBigPhoto(param)}}
        showBigPhoto={()=>{showBigPhoto()}}
        /> 
        : null
      }
      <div className={style.photo_wrap}>
        {photos?.map(({id, url, alternativeText}, index)=>{
          return (
            <Fragment key={id} >
              {index < photoCount ? 
                <div
                  onClick={()=>{showBigPhoto(index);}}
                  className={`${style.photo}`}
                >
                  <div className={style.zoom}></div>
                  {url ? <NextImage 
                        loader={loader}
                        layout="fill"
                        objectFit="contain"
                        src={url}
                        alt={alternativeText || ""}
                      /> : null}
                  {/* <img src={url} alt="img" /> */}
                </div> : null
              }
            </Fragment>
          );
        })}
      </div>
      { photoCount >= photos?.length ? '' : <More
        showMore={()=>{showMore()}}
      >Показати ще</More>}
    </div>
  );
};

export default TrainGallery;
