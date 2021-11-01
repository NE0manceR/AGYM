import style from '../styles/modules/Feedback-slider-mob.module.scss';
import React, { Fragment, useState } from 'react';
import GradientText from './Gradient-text';
import NextBtnIcon from '../public/icon-svg/Next-btn-icon';
import CloseMobMenuIcon from '../public/icon-svg/Close-mob-menu-icon';
import { getStrapiMedia } from "../utils/medias";
import NextImage from 'next/image';


const FeedbackSliderMob = ({feedback}) => {
  let [indexStatus, setIndexStatus] = useState(2);
  let [slidePosition, setSlideposition] = useState(-592)
  let [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/NYSj2RH29m8?start=1')
  let [videoStatus, setVideoStatus] = useState(false)

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  function changeSlide(param) {
    let  position = slidePosition
    if(param === true &&  indexStatus < feedback.length - 1) {
      setIndexStatus(indexStatus + 1)
      position -= 296
      setSlideposition(position)
    }

    if(param === true && indexStatus === feedback.length - 1) {
      setSlideposition(0)
      setIndexStatus(0)
    }

    if(param === false && indexStatus > 0) {
      setIndexStatus(indexStatus - 1)
      position += 296
      setSlideposition(position)
    }

    if(param === false && indexStatus === 0) {
      setSlideposition(-296 * (feedback.length - 1))
      setIndexStatus(feedback.length - 1)
  }
  }

  function setVideoLink(link) {
    setVideoStatus(videoStatus = !videoStatus)
    setVideoSrc(link)
  }

  return (
 <div className={style.mob_slider_bcg}>
     {videoStatus ? 
          <div className={style.big_video}>
            <CloseMobMenuIcon className={style.close_video} close={()=>setVideoLink()} />
            <iframe width="100%" height="80%" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        :
        null
      }
    <div className={style.mob_slider}>
    <h2 className={style.mob_slider__title}>
          <GradientText>Клієнти </GradientText>
          кажуть
      </h2>
    <div className={style.test}>
    <div 
      style={{transform:`translateX(${slidePosition}px`}}
      className={style.mob_slider__wrap}>
      {feedback.map(({id, fullName, description, avatar, video_url}, index)=>{
        return (
          <Fragment>
            {video_url !== '' && video_url !== null ? 
              <div key={id} className={`${style.mob_slider__slide_wrap} ${index === indexStatus ? style.active : ''}`}>
                  <div className={`${style.video} ${style.mob_slider__slide}`}>
                    <img src="/slider/Group 2.svg" alt="img" 
                        onClick={()=>{setVideoLink(video_url)}}
                    />
                    {/* <img className={style.mob_slider__icon} src="/slider/“.png" alt="img" /> */}
                    {/* {/* <span>{text}</span> */}
                  </div>
                  {/* <img className={style.mob_slider__avatar} src={avatar} alt="img" /> */}
                  <div className={style.mob_slider__avatar} >
                    <NextImage 
                      loader={loader}
                      layout="fill"
                      objectFit="contain"
                      src={avatar?.url}
                      alt={avatar?.alternativeText || ""}
                    />
                  </div>
                  <span className={style.mob_slider__name} >{fullName}</span>
              </div>
              :
            <div
              key={id} className={`${style.mob_slider__slide_wrap} ${index === indexStatus ? style.active : ''}`}>
               <div className={style.mob_slider__slide}> 
                 <img className={style.mob_slider__icon} src="/slider/“.png" alt="img" />
                 <span>{description}</span>
               </div>
               <div className={style.mob_slider__avatar} >
                  <NextImage 
                    loader={loader}
                    layout="fill"
                    objectFit="contain"
                    src={avatar?.url}
                    alt={avatar?.alternativeText || ""}
                  />
                </div>
               {/* <img className={style.mob_slider__avatar} src={avatar} alt="img" /> */}
               <span className={style.mob_slider__name} >{fullName}</span>
            </div>
          }
          </Fragment>
     
        )
      })}
    </div>

    <div className={style.btn_wrap}>
      <NextBtnIcon 
        changeSlide={()=>{changeSlide(false)}}
        className={style.left_btn}

      />
      <div className={style.dot_wrap}>
        {feedback.map(({id}, index)=>{
          return (
            <div key={id} className={`${indexStatus === index ? style.active_dot : ''}`}></div>
          )
        })}
      </div>
      <NextBtnIcon 
        changeSlide={()=>{changeSlide(true)}}
        className={style.right_btn}
      />
    </div>
    
    </div>
  </div>
 </div>
  );
};

export default FeedbackSliderMob;
