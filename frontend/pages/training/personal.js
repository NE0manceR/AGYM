import React, { useState } from 'react';
import style from '../../styles/modules/personal.module.scss';
import Link from "next/link";
import Bread from "../../components/Bread";
import GradientText from "../../components/Gradient-text";
import Consultation from "../../components/buttons/Trial-training-btn";
import TrainGallery from "../../components/Train-gallery";
import TrialTrainingBtn from "../../components/buttons/Trial-training-btn";
import TrialTrainingModal from "../../components/Trial-training-modal"
import PlayVideo from "../../components/Play-video";




const Personal = ({personalVideo, membership}) => {

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
    <div className={style.personal}>
        {showTrainModal ? 
          <TrialTrainingModal 
          closeWindow={()=>{showModalTrain();}}
          consultation={consultation}
          
        /> : '' }
      <Bread className={style.crumbs}>
        <Link href="/">Головна</Link>
        <Link href="/"> / Персональні тренування</Link>
      </Bread>
      <section className={style.main}>
        <PlayVideo
          className={style.main__video}
          src={personalVideo.video_url}

        />
        <div className={style.text_wrap}>
          <h2 className={style.title}>
            <GradientText>ПЕРСОНАЛЬНІ </GradientText>
            <span>ТРЕНУВАННЯ</span>
          </h2>
          <span className={style.text}>
            Індивідуальний підхід - ось база персонального тренування. Усі твої болячки будуть враховані, усі навантаження - виважені.
            <br />
            <br />
            Якщо стосунки з залом у тебе тільки починаються - це унікальна можливість почати все правильно: техніка виконання вправ, біомеханіка процесів, послідовність навантажень - під протекцією тренера.
          </span>
          <Consultation
            consultation
            funcAction={()=>{showModalTrain(true);}}
            className={style.consultation_btn}>
            Отримати консультацію
          </Consultation>
        </div>
        <div className={style.img_wrap}>
          <img
            className={style.main_bcg}
            src={"/services/personal.webp"}
            alt="img"
          />
        </div>
      </section>
      
      <section className={style.check_wrap}>
        <div className={style.check}>
          <img src={"/services/Vector.png"} alt="img" />
          <span>Індивідуальна програма</span>
        </div>
        <div className={style.check}>
          <img src={"/services/Vector.png"} alt="img" />
          <span>Контроль під час тренування</span>
        </div>
        <div className={style.check}>
          <img src={"/services/Vector.png"} alt="img" />
          <span>Безпечне виконання вправ</span>
        </div>
        <div className={style.check}>
          <img src={"/services/Vector.png"} alt="img" />
          <span>Кращий та швидший результат</span>
        </div>
      </section>

      <section className={style.photo_wrap}>
        <h2 className={`${style.title} ${style.training}`}>
          <span>ЯК ВИГЛЯДАЄ </span>
          <GradientText>ТРЕНУВАННЯ </GradientText>
        </h2>
        <TrainGallery photos={personalVideo.galleries} />
      </section>

      <section className={style.sport_integration}>
        <div className={style.integration_text}>
          <h2 className={`${style.title} ${style.integration_title}`}>
            <span>Хочеш мати те, чого ніколи не мав - </span>
            <GradientText>роби те, чого раніше не робив </GradientText>
          </h2>
          <span className={style.itegration_text}>
            При замовленні програми персональних тренувань на місяць ти отримаєш аналіз та  рекомендації по харчуванню та консультацію нутриціолога, як приємний бонус.
          </span>
            <GradientText className={style.price_text}>
              Вартість: {membership.personalTrainingPrice} ГРН/МІС <span>(12 ТРЕНУВАННЬ)</span>
            </GradientText>
          <TrialTrainingBtn
            consultation
            funcAction={()=>{showModalTrain(false);}}
            
          >Пробне тренування</TrialTrainingBtn>
        </div>
      </section>
  
    </div>
  );
};

export default Personal;
