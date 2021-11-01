import Link from "next/link";
import React from 'react';

import Bread from '../../components/Bread';
import TrialTrainingBtn from "../../components/buttons/Trial-training-btn";
import GradientText from '../../components/Gradient-text';
import PlayVideo from "../../components/Play-video";
import TrainGallery from '../../components/Train-gallery';
import style from '../../styles/modules/training.module.scss';

const Training = ({developmentVideo, membership}) => {

  let photos = [
    {id: 1, src: '/train_gallery/3.png'},
    {id: 2, src: '/train_gallery/8.png'},
    {id: 3, src: '/train_gallery/6.png'},
    {id: 4, src: '/train_gallery/4.png'},
    {id: 5, src: '/train_gallery/2.png'},
    {id: 6, src: '/train_gallery/1.png'},
  ]

  return (
    <div className={style.training}>
      <div className={style.crumbs_wrap}>
        <Bread className={style.crumbs}>
          <Link href="/">Головна</Link>
          <Link href="/"> / Розробка програми тренування</Link>
        </Bread>
      </div>
     <section className={style.info_bcg}>
        <PlayVideo
          className={style.personal_video}
          src={developmentVideo.video_url}
        />
       <div className={style.info}>
        <h2 className={style.title}>
          Розробка 
          <GradientText> програми тренування</GradientText>
        </h2>
          <ul>
            <li>Програми для збільшення м'язової маси тіла</li>
            <li>Програми для зменшення ваги тіла ( схуднення)</li>
            <li>Програми для шліфовки (жорсткого тонусу) м'язової маси</li>
            <li>Функціональні програми</li>
            <li>Аналіз та рекомендації по харчуванню</li>
          </ul>
          <GradientText className={style.train_price}>Вартість: {membership.priceDevelopmentTrainingProgram} грн</GradientText>
          <TrialTrainingBtn link={'/training/program'}>Замовити</TrialTrainingBtn>
       </div>
       <div className={style.mobile_img}>
        <PlayVideo
            className={style.personal_mobile_video}
            src={developmentVideo.video_url}
          />
         <img src="/training/bcg-1.png" alt="img" />
       </div>
     </section>
     <section className={style.what_bcg}>
      <div className={style.what}>
        <div className={style.content_wrap}>
          <h2 className={style.title}>
          Що ти 
          <GradientText> отримаєш</GradientText>
          </h2>
          <div className={style.what_info}>
            <img src="/services/Vector.png" alt="img" />
            <span>
            Індивідуально розроблену програму тренування залежно від цілі
            </span>
          </div>
          <div className={style.what_info}>
            <img src="/services/Vector.png" alt="img" />
            <span>
            Загальні рекомендації по здоровому харчуванню
            </span>
          </div>
          <div className={style.what_info}>
            <img src="/services/Vector.png" alt="img" />
            <span>
            Поради щодо вдосконалення здоров'я 
            </span>
          </div>
          <div className={style.what_info}>
            <img src="/services/Vector.png" alt="img" />
            <span>
            Повний інструктаж
            </span>
          </div>
          <GradientText className={style.train_price}>Вартість: {membership.priceDevelopmentTrainingProgram} грн</GradientText>
          <TrialTrainingBtn link={'/training/program'}>Замовити</TrialTrainingBtn>
        </div>
      </div>
    </section>

    <section className={style.gallery}>
      <h2 className={style.title}>
        результати тренувань з 
        <GradientText className={style.gallery_title}> індивідуальною програмою</GradientText>
      </h2>
    <TrainGallery photos={developmentVideo.galleries}></TrainGallery>
    </section>
    <div className={style.form_bcg}>
      <section className={style.form}>
        <h2 className={style.title}>
          Заповнюй анкету та оримай
          <GradientText className={style.gallery_title}>  свою програму</GradientText>
        </h2>
        <TrialTrainingBtn link={'/training/program'}>Заповнити анкету</TrialTrainingBtn>
      </section>  
    </div>   
    </div>
  )
}

export default Training
