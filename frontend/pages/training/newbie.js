import React, { useState } from "react";
import style from "../../styles/modules/newbie.module.scss";
import Link from "next/link";
import Bread from "../../components/Bread";
import GradientText from "../../components/Gradient-text";
import TrainGallery from "../../components/Train-gallery";
import TrialTrainingBtn from "../../components/buttons/Trial-training-btn";
import TrialTrainingModal from "../../components/Trial-training-modal"
import PlayVideo from "../../components/Play-video";

const Newbie = ({newbie}) => {
  let [showTrainModal, setShowTrainModal] = useState(false);
  let [consultation, setConsultation] = useState(false)

  function showModalTrain(status) {
    setConsultation(status)
    setShowTrainModal(showTrainModal = !showTrainModal)
  }


  let photos = [
    {id: 1, src: '/train_gallery/3.png'},
    {id: 2, src: '/train_gallery/8.png'},
    {id: 3, src: '/train_gallery/6.png'},
    {id: 4, src: '/train_gallery/4.png'},
    {id: 5, src: '/train_gallery/2.png'},
    {id: 6, src: '/train_gallery/1.png'},
    {id: 7, src: '/train_gallery/2.png'},
    {id: 8, src: '/train_gallery/6.png'},
    {id: 9, src: '/train_gallery/7.png'},
    {id: 52, src: '/train_gallery/2.png'},
    {id: 63, src: '/train_gallery/1.png'},
    {id: 74, src: '/train_gallery/2.png'},
    {id: 85, src: '/train_gallery/6.png'},
    {id: 96, src: '/train_gallery/7.png'}
  ]

  return (
    <div className={style.newbie}>
        {showTrainModal ? 
        <TrialTrainingModal 
          closeWindow={()=>{showModalTrain();}}
          consultation={consultation}
          
        /> : '' }
        <Bread className={style.crumbs}>
          <Link href="/">Головна</Link>
          <Link href="/"> / Фітнес для початківців</Link>
        </Bread>
      <section className={style.main}>
        <PlayVideo
          className={style.main__video}
          src={newbie.video_url}
        />
        <div className={style.text_wrap}>
          <h2 className={style.title}>
            <span>ФІТНЕС ДЛЯ</span>
            <GradientText>ПОЧАТКІВЦІВ </GradientText>
          </h2>
          <span className={style.text}>
            Для тих, хто тільки починає своє знайомство зі спортом та атлетикою
            у тренажерному залі у нас розроблені та перевірені на сотнях
            програми, що складаються з трьох рівнів. Ти переходиш на наступний
            лише тоді, коли ТВОЄ тіло готове.
            <br />
            <br />
            Ми не про схуднути за два тижні до відпустки, ми за зміну способу
            життя, щоб спорт став не шоком та біллю, а твоїм заслуженим якісним
            дофаміном та зарядом енергії надовго
          </span>
          <TrialTrainingBtn
            consultation
            className={style.consultation_btn}
            funcAction={()=>{showModalTrain(false);}}
          >
            Пробне тренування
          </TrialTrainingBtn>
        </div>
        <div className={style.img_wrap}>
          <PlayVideo
            className={style.video_mobile}
            src={newbie.video_url}
          />
          <img
            className={style.main_bcg}
            src={"/services/newbie.webp"}
            alt="img"
          />
        </div>
      </section>
      <section className={style.check_wrap}>
        <div className={style.check}>
          <img src={"/services/Vector.png"} alt="img" />
          <span>Базові програми для адаптації в залі</span>
        </div>
        <div className={style.check}>
          <img src={"/services/Vector.png"} alt="img" />
          <span>Враховуємо травми та обмеження</span>
        </div>
        <div className={style.check}>
          <img src={"/services/Vector.png"} alt="img" />
          <span>Розвиваємо все тіло рівномірно</span>
        </div>
      </section>
      <section className={style.photo_wrap}>
        <h2 className={`${style.title} ${style.training}`}>
          <span>ЯК ВИГЛЯДАЄ </span>
          <GradientText>ТРЕНУВАННЯ </GradientText>
        </h2>
        <TrainGallery photos={newbie.galleries} />
      </section>
      <section className={style.sport_integration}>
        <div className={style.integration_text}>
          <h2 className={`${style.title} ${style.integration_title}`}>
            <GradientText>ІНТЕГРУЙТЕ СПОРТ </GradientText>
            <span>В СВОЄ ЖИТТЯ</span>
          </h2>
          <span className={style.itegration_text}>
            І нехай він буде таким же безумовним рефлексом, як і чистити зуби,
            дихати чи посміхатись
          </span>
          <TrialTrainingBtn
            consultation
            className={style.consultation_btn}
            funcAction={()=>{showModalTrain(false);}}
          >Пробне тренування
          </TrialTrainingBtn>
        </div>
      </section>
    </div>
  );
};

export default Newbie;
