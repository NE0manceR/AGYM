import React from 'react';
import style from '../styles/modules/Social-network.module.scss';

const SocialNetwork = ({className=''}) => {
  return (
    <div className={`${style.social} ${className}`}>
          <span>Слідкуй за нами</span>
          <div>
            <a className={style.facebook} href="https://www.facebook.com/fitness.agym.lviv" target="_blank"></a>
            <a className={style.instagram} href="https://www.instagram.com/agym.lviv/?hl=uk" target="_blank"></a>
            <a className={style.youtube} href="https://www.youtube.com/channel/UCnfSqcHUMT5Cyy4KXDXlVsw" target="_blank"></a>
          </div>
        </div>
  );
};

export default SocialNetwork;
