import { useState } from 'react';
import style from '../../styles/modules/gallery.module.scss';
import Bread from '../../components/Bread';
import Link from "next/link";
import BeforeText from '../../public/icon-svg/Before-text'
import { Fragment } from "react";
import GradientText from "../../components/Gradient-text";
import TrialTrainingBtn from '../../components/buttons/Trial-training-btn';
import TrialTrainingModal from "../../components/Trial-training-modal";

const Gallery = () => {

  let [showTrainModal, setShowTrainModal] = useState(false);
  let [consultation, setConsultation] = useState(false)

  function showModalTrain(status) {
    setConsultation(status)
    setShowTrainModal(showTrainModal = !showTrainModal)
  }
  
  return (
    <Fragment>
        {showTrainModal ? 
        <TrialTrainingModal 
          closeWindow={()=>{showModalTrain();}}
          consultation={consultation}
          
        /> : '' }
      <div className={style.gallery}>
      <Bread className={style.crumbs}>
        <Link href="/">Головна</Link>
        <Link href="/"> / Галерея</Link>
      </Bread>

      <div className={style.before}>
        <div>
          <span>Досягнення у тренуваннях наших клієнтів</span>
          <img src="/gallery/before/photo1.webp" alt="img" />
        </div>
        <div>
          <img src="/gallery/before/before1.webp" alt="img" />
        </div>
        <div>
          <img src="/gallery/before/before1.webp" alt="img" />
        </div>
        <div>
        <img src="/gallery/before/before22.webp" alt="img" />
        </div>
        <Link href="/gallery/photos?before"><a className={style.text_link }><BeforeText before /></a></Link>
      </div>

      <div className={style.couch}>
        <div className={style.left}>
          <img src="/gallery/trainers/1.webp" alt="img" />
          <img src="/gallery/trainers/4.webp" alt="img" />
        </div>
        <div className={style.right}>
          <div>
            <img src="/gallery/trainers/2.webp" alt="img" />
            <span>Тненуйтесьз найкращими</span>
          </div>
          <div>
            <img src="/gallery/trainers/3.webp" alt="img" />
          </div>
          <div>
            <img src="/gallery/trainers/5.webp" alt="img" />
          </div>
        </div>
        <Link href="/gallery/photos?trainers"><a className={style.text_link }><BeforeText coach /></a></Link>
      </div>

      <div className={style.gym}>
        <span>Професфйна лінія тренажерів</span>
        <div className={style.right}>
          <div>
            <img src="/gallery/gym/gym1.webp" alt="img" />
            <img src="/gallery/gym/gym2.webp" alt="img" />
          </div>
          <div>
            <img src="/gallery/gym/gym3.webp" alt="img" />
            <img src="/gallery/gym/gym1.webp" alt="img" />
          </div>
        </div>
        <Link href="/gallery/photos?gym"><a className={style.text_link }><BeforeText className={style.gym_text} gym /></a></Link>
      </div>

      <div className={style.challenge}>
        <span>Приєднуйся до наших челенджів</span>
        <div className={style.right}>
          <div>
            <img src="/gallery/gym/gym1.webp" alt="img" />
            <img src="/gallery/chalange/chalange1.webp" alt="img" />
          </div>
          <div>
            <img src="/gallery/gym/gym1.webp" alt="img" />
            <img src="/gallery/chalange/chalange2.webp" alt="img" />
          </div>
        </div>
        <Link href="/gallery/photos?competition"><a className={style.text_link }><BeforeText challange /></a></Link>
      </div>

      <div className={style.client}>
        <div className={style.left}>
          <img src="/gallery/clients/1.webp" alt="img" />
          <img src="/gallery/clients/clients2.webp" alt="img" />
          <img src="/gallery/clients/2.webp" alt="img" />
        </div>
        <div className={style.right}>
          <div>
            <img src="/gallery/clients/4.webp" alt="img" />
            <span>Ваші успіхи</span>
          </div>
          <div>
            <img src="/gallery/clients/clients1.webp" alt="img" />
          </div>
          <div>
            <img src="/gallery/clients/6.webp" alt="img" />
          </div>
        </div>
        <Link href="/gallery/photos?clients"><a className={style.text_link }><BeforeText client /></a></Link>
      </div>
    </div>
      <div className={style.gallery_mobile}>
        <section className={style.mob_before}>
          <GradientText className={style.title}>ДО І ПІСЛЯ</GradientText>
          <span className={style.under_title}>Досягнення у тренуваннях наших клієнтів</span>
          <div>
           <Link href="/gallery/photos?before">
              <img src="/gallery/mobile-version/Before/2.jpg" alt="img" />
           </Link>
           <Link href="/gallery/photos?before">
              <img src="/gallery/mobile-version/Before/3.jpg" alt="img" />
           </Link>
          </div>
          <Link href="/gallery/photos?before">
              <img src="/gallery/mobile_img.webp" alt="img" />
           </Link>
          <Link href="/gallery/photos?before">
            <img src="/gallery/mobile-version/Before/1.jpg" alt="img" />
          </Link>
        </section>

        <section className={style.mob_coach}>
          <GradientText className={style.title}>ТРЕНЕРИ</GradientText>
          <span className={style.under_title}>Тненуйтесь з найкращими</span>
          <div>
          <Link href="/gallery/photos?trainers">
            <img src="/gallery/mobile-version/Trainers/DSC_0078.jpg" alt="img" />
          </Link>
          <Link href="/gallery/photos?trainers">
            <img src="/gallery/mobile-version/Trainers/1.png" alt="img" />
          </Link>
          </div>
          <Link href="/gallery/photos?trainers">
            <img src="/gallery/trainers/coach3.webp" alt="img" />
          </Link>
          <div>
          <Link href="/gallery/photos?trainers">
            <img src="/gallery/trainers/coach4.webp" alt="img" />
          </Link>
          <Link href="/gallery/photos?trainers">
            <img src="/gallery/trainers/coach5.webp" alt="img" />
          </Link>
          </div>
        </section>

        <section className={style.mob_gym}>
          <GradientText className={style.title}>ЗАЛ</GradientText>
          <span className={style.under_title}>Професфйна лінія тренажерів</span>
          <div>
          <Link  href="/gallery/photos?gym">
            <img src="/gallery/mobile-version/Gym/IMG_3253.jpg" alt="img" />
          </Link>
          <Link href="/gallery/photos?gym">
            <img src="/gallery/mobile-version/Gym/IMG_3253.jpg" alt="img" />
          </Link>
          </div>
            <Link href="/gallery/photos?gym"><img src="/gallery/mobile-version/Gym/IMG_3253.jpg" alt="img" /></Link>
            <Link href="/gallery/photos?gym"><img src="/gallery/mobile-version/Gym/IMG_3253.jpg" alt="img" /></Link>
        </section>

        <section className={style.mob_challange}>
          <GradientText className={style.title}>ЗМАГАННЯ</GradientText>
          <span className={style.under_title}>Приєднуйся до наших челенджів</span>
          <div>
            <Link href="/gallery/photos?competition"><img src="/gallery/mobile-version/chalange/2.jpg" alt="img" /></Link>
            <Link href="/gallery/photos?competition"><img src="/gallery/mobile-version/chalange/1.jpg" alt="img" /></Link>
          </div>
            <Link href="/gallery/photos?competition"><img src="/gallery/mobile-version/chalange/2.jpg" alt="img" /></Link>
            <Link href="/gallery/photos?competition"><img src="/gallery/mobile-version/chalange/1.jpg" alt="img" /></Link>
        </section>

        <section className={style.mob_client}>
          <GradientText className={style.title}>КЛІЄНТИ</GradientText>
          <span className={style.under_title}>Ваші успіхи</span>
          <div>
            <Link href="/gallery/photos?clients"><img src="/gallery/mobile-version/clients/1.jpg" alt="img" /></Link>
            <Link href="/gallery/photos?clients"><img src="/gallery/mobile-version/clients/4.jpg" alt="img" /></Link>
          </div>
          <Link href="/gallery/photos?clients"><img src="/gallery/mobile-version/clients/2.jpg" alt="img" /></Link>
          <div>
            <Link href="/gallery/photos?clients"><img src="/gallery/mobile-version/clients/3.jpg" alt="img" /></Link>
            <Link href="/gallery/photos?clients"><img src="/gallery/mobile-version/clients/1.jpg" alt="img" /></Link>
          </div>
        </section>
      </div>

      <div className={style.integrate}>
        <h2 className={`${style.integrate__title} ${style.home__title}`}>
        Інтегруй спорт<GradientText> у своє життя</GradientText>
        </h2>
        <TrialTrainingBtn
          consultation
          funcAction={()=>{showModalTrain();}}
            
        >Пробне тренування</TrialTrainingBtn>
      </div>
    </Fragment>
  );
};



export default Gallery;
