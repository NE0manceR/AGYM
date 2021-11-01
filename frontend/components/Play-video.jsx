import React, { useState } from 'react';
import CloseMobMenuIcon from '../public/icon-svg/Close-mob-menu-icon';
import style from '../styles/modules/Play-video.module.scss'

const PlayVideo = ({src, className}) => {
  let [showVideo, setShowVideo] = useState(false);

  function playVideo(param) {
    setShowVideo(showVideo = !showVideo)
  }

  return (
    <div 
      className={`${style.video} ${className}`}
    >
        { showVideo ?
          <div className={style.video_wrap}>
            <div className={style.btn_wrap}>
              <CloseMobMenuIcon
                close={()=> playVideo()}
                className={style.close_btn} />
            </div>
            <div className={style.video_animation}>
              <iframe
                width="100%"
                height="100%"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
            {/* <video autoplay="" controls="controls" className={style.gym_video} src="/title_video.mp4"></video> */}

          </div>
        : null}
        <img onClick={()=> playVideo()} src="/Play_btn.png" alt="img" />
    </div>
  );
};

export default PlayVideo;
