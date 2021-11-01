import React, { Fragment, useState, useEffect } from "react";
import ZoomSlider from "../../components/Zoom-slider";
import style from "../../styles/modules/photos.module.scss";
import ShowMoreBtn from "../../components/buttons/Primary-low-btn.jsx";
import Bread from '../../components/Bread';
import Link from "next/link";

import { getStrapiMedia } from "../../utils/medias";
import NextImage from 'next/image';

const Photos = ({galleryPhotos}) => {
  let [bigPhoto, setBigPhoto] = useState(false);
  let [photoIndex, setPhotoIndex] = useState(0);
  let [showPhotoIndex, setShowPhotoIndex] = useState(6);

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  function showMore(params) {
    if (showPhotoIndex < galleryPhotos[photosIndex].photos.length) {
      setShowPhotoIndex(showPhotoIndex + 6);
    }
  }

  function showBigPhoto(index) {
    if (bigPhoto) {
      setBigPhoto(false);
    } else {
      setBigPhoto(true);
    }
    setPhotoIndex(index);
  }

  function changeBigPhoto(param) {
    if (param === "right") {
      if (photoIndex === galleryPhotos[photosIndex].photos.length - 1) {
        setPhotoIndex(0);
      } else {
        setPhotoIndex(++photoIndex);
      }
    }

    if (param === "left") {
      if (photoIndex === 0) {
        setPhotoIndex(galleryPhotos[photosIndex].photos.length - 1);
      } else {
        setPhotoIndex(--photoIndex);
      }
    }
  }

  let [photosIndex, setPhotosIndex] = useState(0);
  let [amount, setAmount] = useState(0)

  useEffect(() => {
    galleryPhotos.forEach(({subTitle}, index) => {
      if (subTitle === window.location.href.split('?')[1]) {
        setPhotosIndex(index);
        setAmount(galleryPhotos[index].photos.length)
      }
    });
  },[])

  return (
    <div className={style.main_wrap}>
      <div className={style.bread_wrap}>
        <Bread className={`${style.crumbs_position}`}>
          <Link href='/'>Головна</Link>
          <Link href='/gallery/gallery'> / Галерея</Link>
          <Link href=''><a> / {galleryPhotos[photosIndex].title}</a></Link>
        </Bread>
        <Link href='/gallery/gallery'>
          <a className={style.arrow_back}> 
            <img src="/gallery/arrow-back.svg" alt="img" />
            До і після
          </a>
        </Link>
      </div>
      {bigPhoto ? (
        <ZoomSlider
          src={galleryPhotos[photosIndex].photos[photoIndex].url}
          alternativeText={galleryPhotos[photosIndex].photos[photoIndex].alternativeText}
          photoIndex={photoIndex + 1}
          number={galleryPhotos[photosIndex].photos.length}
          changeBigPhoto={(param) => {
            changeBigPhoto(param);
          }}
          showBigPhoto={() => {
            showBigPhoto();
          }}
        />
      ) : null}
      <div className={style.photo_wrap}>
        {galleryPhotos[photosIndex].photos?.map(({ src, id, url, alternativeText }, index) => {
          return (
            <Fragment key={id}>
              {index < 330 && index < showPhotoIndex ? (
                <div>
                  <div
                    onClick={() => {
                      showBigPhoto(index);
                    }}
                    className={style.zoom}
                  ></div>
                      {url ? <NextImage 
                        loader={loader}
                        layout="fill"
                        objectFit="contain"
                        src={url}
                        alt={alternativeText || ""}
                      /> : null}
                      {/* <img src={} alt="" /> */}
                </div>
              ) : null}
            </Fragment>
          );
        })}
      </div>

      {/* {showPhotoIndex >= 330 ? (
        <div className={style.photo_wrap}>
          {photos?.map(({ src, id }, index) => {
            return (
              <Fragment key={id}>
                {index >= 330 && index < 660 && showPhotoIndex >= 330 ? (
                  <div>
                    <div
                      onClick={() => {
                        showBigPhoto(index);
                      }}
                      className={style.zoom}
                    ></div>
                    <img src={src} alt='img' />
                  </div>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      ) : null} */}

      {/* {showPhotoIndex >= 660 ? (
        <div className={style.photo_wrap}>
          {photos?.map(({ src, id }, index) => {
            return (
              <Fragment key={id}>
                {index >= 660 && index < 990 && showPhotoIndex >= 660 ? (
                  <div>
                    <div
                      onClick={() => {
                        showBigPhoto(index);
                      }}
                      className={style.zoom}
                    ></div>
                    <img src={src} alt='img' />
                  </div>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      ) : null} */}

      {/* {showPhotoIndex >= 990 ? (
        <div className={style.photo_wrap}>
          {photos?.map(({ src, id }, index) => {
            return (
              <Fragment key={id}>
                {index >= 990 && index < 1320 && showPhotoIndex >= 990 ? (
                  <div>
                    <div
                      onClick={() => {
                        showBigPhoto(index);
                      }}
                      className={style.zoom}
                    ></div>
                    <img src={src} alt='img' />
                  </div>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      ) : null} */}
      {showPhotoIndex >= amount ? (
        null
      ) : (
        <div className={style.btn_wrap}>
          <ShowMoreBtn
            showMore={() => {
              showMore();
            }}
          >
            Показати ще
          </ShowMoreBtn>
        </div>
      )}
    </div>
  );
};

export default Photos;
