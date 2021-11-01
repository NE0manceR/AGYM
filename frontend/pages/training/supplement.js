import React, { useState } from 'react';
import Link from "next/link";
import Bread from "../../components/Bread";
import GradientText from "../../components/Gradient-text";
import style from '../../styles/modules/supplement.module.scss';
import Consultation from '../../components/buttons/Trial-training-btn';
import TrialTrainingModal from '../../components/Trial-training-modal';
import PlayVideo from '../../components/Play-video';


const Supplement = ({supplementVideo}) => {

  let [showTrainModal, setShowTrainModal] = useState(false);
  let [consultation, setConsultation] = useState(false)

  function showModalTrain(status) {
    setConsultation(status)
    setShowTrainModal(showTrainModal = !showTrainModal)
  }

  return (
    <div className={style.supplement}>
      {showTrainModal ? 
        <TrialTrainingModal 
          closeWindow={()=>{showModalTrain();}}
          consultation={consultation}
          
        /> : '' 
      }
      <div className={style.bread_wrap}>
        <Bread className={style.crumbs}>
          <Link href="/">Головна</Link>
          <Link href="/"> / Спортивне харчування</Link>
        </Bread>
      </div>
      <section className={style.main}>
        <PlayVideo
          className={style.main__video}
          src={supplementVideo.video_url}
        />
        <div className={style.text_wrap}>
          <h2 className={style.title}>
            <span>СПОРТИВНЕ</span>
            <GradientText>ХАРЧУВАННЯ </GradientText>
          </h2>

          <span className={style.text}>
            Ознайомлення з асортиментом та видами спортивного харчування
            <br></br>
            <br></br>
            Консультації по використання спортивного харчування за обраної метою тренування
          </span>
          <Consultation 
            consultation
            className={style.consultation_btn}
            funcAction={()=>{showModalTrain(true);}}
            className={style.consultation_btn}
          >Отримати консультацію</Consultation>
        </div>
        <div className={style.main__img_wrap}>
          <img className={style.main_bcg} src="/services/supplement.webp" alt="img" />
        </div>
      </section>
      <section className={style.article_wrap}>
        <Link href="/blog/article">
          <img className={style.photo1} src="/services/supplementPhoto/Photo1.png" alt="img" />
        </Link>
        <Link href="/blog/article">
          <img className={style.photo2} src="/services/supplementPhoto/Photo2.png" alt="img" />
        </Link>
        <Link href="/blog/article">
          <img className={style.photo3} src="/services/supplementPhoto/Photo3.png" alt="img" />
        </Link>
        <Link href="/blog/article">
          <img className={style.photo4} src="/services/supplementPhoto/Photo4.png" alt="img" />
        </Link>
      </section>
    </div>
  );
};

export default Supplement;
