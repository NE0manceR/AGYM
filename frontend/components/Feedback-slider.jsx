import React, { useState, useRef, useEffect, Fragment } from 'react';
import CloseMobMenuIcon from '../public/icon-svg/Close-mob-menu-icon';
import NextBtnIcon from '../public/icon-svg/Next-btn-icon';
import style from '../styles/modules/feedback-slider.module.scss';
import GradientText from './Gradient-text';
import { getStrapiMedia } from "../utils/medias";
import NextImage from 'next/image';

const FeedbackSlider = ({feedback}) => {

let [slidePosition, setSlideposition] = useState(-392)
let [indexStatus, setIndexStatus] = useState(2);
let wrap = useRef()
let [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/NYSj2RH29m8?start=1')
let [videoStatus, setVideoStatus] = useState(false)

useEffect(() => {
  let position = slidePosition
  let smalWidth = (1200 - window.innerWidth) / 2
  

  if(window.innerWidth <= 1200) {
    setSlideposition(slidePosition - smalWidth)
  } 
}, [])

function changeSlide(param) {
  let position = slidePosition
  let smalWidth = (1200 - window.innerWidth) / 2

  if(param === true && indexStatus < feedback.length - 1) {
    if(window.innerWidth <= 1200) {
      position - smalWidth
    }

    position -= 392


    setIndexStatus(indexStatus + 1)
    setSlideposition(position)
  } 

  if(param === false && indexStatus >= 1) {

    position += 392
    
    setIndexStatus(indexStatus - 1)
    setSlideposition(position)
  }
}

function setVideoLink(link) {
  setVideoStatus(videoStatus = !videoStatus)
  setVideoSrc(link)
}

function showVideo() {

}

const loader = ({ src }) => {
  return getStrapiMedia(src)
}

  return (
    <div className={style.feedback}>

      {videoStatus ? 
          <div className={style.big_video}>
            <CloseMobMenuIcon className={style.close_video} close={()=>setVideoLink()} />
            <iframe width="100%" height="80%" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        :
        null
      }
   
      <h2 className={style.feedback__title}>
          <GradientText>Клієнти </GradientText>
          кажуть
      </h2>
      <div className={style.feedback__slider}>

      <div
        ref={wrap}
        className={style.feedback__wrap}
        style={{transform:`translateX(${slidePosition}px`}}
        >
        {feedback.map(({id, fullName, description, avatar, video_url}, index)=>{
          return (
            <Fragment key={id}>
              { video_url !== '' && video_url !== null  ? 

                <div className={`${style.feedback__slide} ${indexStatus === index ? style.active : ''}`}>
                  <div className={`${style.feedback__text} ${style.video}`}>
                    {indexStatus === index ?
                      <img src="/slider/Group 2.svg" alt="img" 
                        onClick={()=>{setVideoLink(video_url)}}
                      />
                        :
                      <img src="/slider/PlayVideo.svg" alt="img" />
                      }
                    
                  </div>
                  <div className={style.feedback__avatar} >
                    <NextImage 
                      loader={loader}
                      layout="fill"
                      objectFit="contain"
                      src={avatar?.url}
                      alt={avatar?.alternativeText || ""}
                    />
                  </div>
                  {/* <img className={style.feedback__avatar} src={avatar.url} alt="img" /> */}
                  <span className={style.feedback__name} >{fullName}</span>
                </div>
              : 
              <div className={`${style.feedback__slide} ${indexStatus === index ? style.active : ''}`}>
                <div className={style.feedback__text}>
                    <img className={style.feedback__icon} src="/slider/“.png" alt="img" />
                    <span className={style.feedback__t}>{description}</span>
                </div>
                <div className={style.feedback__avatar} >
                  <NextImage 
                    loader={loader}
                    layout="fill"
                    objectFit="contain"
                    src={avatar?.url}
                    alt={avatar?.alternativeText || ""}
                  />
                </div>
                {/* <img className={style.feedback__avatar} src={avatar.url} alt="img" /> */}
                <span className={style.feedback__name} >{fullName}</span>
               </div>
              }
            </Fragment>
          )
        })}
      </div>
       
      </div>
      <div className={style.feedback__btn_wrap}>
        <NextBtnIcon
          changeSlide={()=>{changeSlide(false)}}
          className={style.left_btn} />
        <div className={style.circle_wrap}>
          {feedback.map(({id}, index)=>{
            return (
              <div key={id} className={`${style.circle} ${indexStatus === index  ? style.active_circle : ''}`}></div>
            )
          })}
         
        </div>
        <NextBtnIcon
          changeSlide={()=>{changeSlide(true)}}
          className={style.right_btn} />
      </div>

    </div>
  );
};

export default FeedbackSlider;
