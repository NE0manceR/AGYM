import Head from "next/head";
import style from '../styles/modules/about.module.scss';
import Bread from '../components/Bread';
import Link from "next/link";
import GradientText from '../components/Gradient-text';
import SecondaryBtn from "../components/buttons/Secondary-btn";
import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../public/icon-svg/Drop-down-icon.jsx'
import InstagramIcon from "../public/icon-svg/Instagram-icon";
import FacebookIcon from "../public/icon-svg/Facebook-icon";

const About = () => {
  let rightText = useRef("");
  let [moreText, setMoreText] = useState(true);
  let [moreText2, setMoreText2] = useState(true);
  let [moreText3, setMoreText3] = useState(true);
  let moreInfoText = useRef();
  let moreInfoText2 = useRef();
  let moreInfoText3 = useRef();
  let [moreInfoHeight, setMoreInfoHeight] = useState(0);
  let [moreInfoHeight2, setMoreInfoHeight2] = useState(0);
  let [moreInfoHeight3, setMoreInfoHeight3] = useState(0);

  let [teamTitle, setTeamTitle] = useState(800);

  function showMore() {
    setMoreText(moreText = !moreText)
  }

  function resizeWindow(params) {
    if(window.innerWidth <= 550)  {
      setMoreText(false)
      setMoreText2(false)
      setMoreText3(false)
    } else {
      setMoreText(true)
      setMoreText2(true)
      setMoreText3(true)
    }

    if(window.innerWidth <= 700) {
      setTeamTitle(0)
    } else {
      setTeamTitle(800)
    }
  }

  function showText(member) {

    if(moreInfoHeight === 0 && member === 1) {
      setMoreInfoHeight(moreInfoText.current.clientHeight)
    } 

    if(moreInfoHeight !== 0 && member === 1) {
      setMoreInfoHeight(0)
    }

    if(moreInfoHeight2 === 0 && member === 2) {
      setMoreInfoHeight2(moreInfoText2.current.clientHeight)
    }

    if(moreInfoHeight2 !== 0 && member === 2) {
      setMoreInfoHeight2(0)
    }

    if(moreInfoHeight3 === 0 && member === 3) {
      setMoreInfoHeight3(moreInfoText3.current.clientHeight)
    }

    if(moreInfoHeight3 !== 0 && member === 3) {
      setMoreInfoHeight3(0)
    }
  }

  useEffect(()=>{
    setTeamTitle(window.innerWidth)
    window.addEventListener('resize', resizeWindow)
  },[])

  return (
    <div className={style.about}>
      <section className={style.gym_bcg}>
        <div className={style.gym}>
          <Bread className={style.crumbs}>
            <Link href="/">Головна</Link>
            <Link href="/"> / Про нас</Link>
          </Bread>
          <h2 className={style.title}>
            <GradientText> ПРО</GradientText>
            ТРЕНАЖЕРНИЙ ЗАЛ
          </h2>
          <div className={`${style.text_wrap} ${moreText ? style.text_wrap_more : ''}`}>
            <span className={style.left_text}>
              Agym унікальний тренажерний зал, який стартував ще в 2003р. Ми перші, хто проекспериментували у відокремленні тренувальних днів для чоловіків і жінок і не прогадали. Це  покращило тренувальний процес та атмосферу мікроклімату.
              <br></br>
              <br></br>
              Це місце з позитивною компанійською атмосферою, де не тільки покращують свою фізичну підготовку, атлетичну фігуру, здоров'я, а й стають справжніми друзями.
            </span>
            {moreText ? 
            <span
              ref={rightText}
              className={`${style.right_text} ${showMore ? style.show_text : ''}`}
            >
            <Link href="#instructor">Фахові інструктори</Link> завжди допоможуть вам досягти найкращих результатів. Кожному відвідувачеві надається методично-тренувальне скерування, відносно обраної мети.
            <br></br>
            <br></br>
            У нас тренувальна площа 200 м, професійна лінія тренажерів фірми “VASIL-GYM”, понад 40 тренажерів, кардіо лінія та тренажер для розвантаження та відновлення стану хребта.
          </span> : ''}
          <SecondaryBtn
            showMore={()=>{showMore()}}
            className={style.more}>
            <span> {moreText ? 'Меньше' : 'Більше'}</span>
          </SecondaryBtn>
          </div>
        </div>
        <span id="instructor"></span>
      </section>

      <div className={style.team_bcg}>
        <section className={style.team}>
          {teamTitle > 700 ?
            <h2 className={style.title}>
              КОМАНДА <GradientText> A GYM</GradientText>
            </h2>
           : 
            <h2 className={style.title}>
              <GradientText> ТРЕНЕРИ</GradientText> A GYM
            </h2>
           }
          <span className={style.title_text}>
            Ми живемо активним та здоровим способом життям. 
            Для того, щоб ми могли ділитись своїм досвідом та допомагати іншим реалізовувати свої цілі  ми створили Фітнес клуб “Айседора” в якому присутня дружня атмосфера і позитивний настрій.
            Наше работа це і є наша улюблена справа, якої ми живемо і реалізуємо в житті. Це безмежний досвід яким ми готові ділитися. 
          </span>
          <div className={style.member}>
            <img className={style.avatar} src="/about/ALX_6125 1.png" alt="avatar" />
            <div className={style.member_info}>
              <GradientText className={style.name}>ЛАЗАРЧИК ЮРІЙ ВЯЧЕСЛАВОВИЧ</GradientText>
              <span className={style.prof}>Інструктор ф/к “Аgym”</span>
              <div className={style.social_wrap}>
                <a href="https://www.google.com" target="_blank"><InstagramIcon className={style.instagram_icon} /></a>
                <a href="https://www.google.com" target="_blank"><FacebookIcon className={style.facebook_icon} /></a>
              </div>
              <div
                className={style.main_sub_info}
              >
                Освіта вища-спортивна ЛУФКС, педагог 1й категорії (викладач фізичної культури і спорту)
                <br></br>
                <br></br>
                Стаж тренерської діяльності 25 років.
                <br></br>
                <br></br>
                В минулому КМС - гирьовий спорт. Діючий фізкультурник любительського спорту, за напрямком фітнес, атлетизм, методист фізичної діяльності і спортивної дієтології.
              </div>
              <div className={style.main_info}>
                Послуги: тренер, викладач 1-ї категорії фізичної культури та спорту, індивідуальні програми,
                спортивне харчування.
                <br></br>
                <br></br>
                В минулому КМС – гирьовий порт. 
                <br></br>
                <br></br>
                Довід роботи в цій сфері фітнесу, атлетизму та спортивного харчування більше 25 років – багато про що може розказати. Це не просто знання, а перевірений на тисячах людей досвід, практичні моменти, яких не можливо десь навчитись.
                А науковий підхід та доказова база – це ще і твоя можливість іти в ногу з часом в 
              </div>
              <div
                style={{height: moreInfoHeight}}
                className={style.more_info}
              >
                <span ref={moreInfoText} className={style.more_info_text}>
                Послуги: тренер, викладач 1-ї категорії фізичної культури та спорту, індивідуальні програми, спортивне харчування.
                В минулому КМС – гирьовий порт. 
                <br />
                <br />
                Довід роботи в цій сфері фітнесу, атлетизму та спортивного харчування більше 25 років – багато про що може розказати. Це не просто знання, а перевірений на тисячах людей досвід, практичні моменти, яких не можливо десь навчитись.
                А науковий підхід та доказова база – це ще і твоя можливість іти в ногу з часом в напрямку здоров’я та прекрасної форми.
                <br />
                <br />
                Напевно немає такого питання щодо анатомії людини, техніки вправ, роботи організму вцілому, на яке б Юрій не зміг дати відповідь. Його тренування, це не тільки правильна техніка, а ще і теорія, в подробицях.
                <br />
                <br />
                Як хобі: велоспорт, мотоспорт
                </span>
              </div>
              <div
                className={style.info_btn}
                onClick={()=>{showText(1);}}
              >
                {moreInfoHeight > 0  ? 'Меньше' : 'Більше'}
                <Arrow
                  className={`${style.info_arrow} ${moreInfoHeight > 0 ? style.info_arrow_active : ''}`}
                />
              </div>
            </div> 
          </div>

          <div className={style.member}>
            <img className={style.avatar} src="/about/ALX_6125 2.png" alt="avatar" />
            <div className={style.member_info}>
              <GradientText className={style.name}>МАЙКО ОЛЕКСАНДР ВОЛОДИМИРОВИЧ</GradientText>
              <span className={style.prof}>Інструктор ф/к “Аgym”</span>
              <div className={style.social_wrap}>
              <a href="https://www.google.com" target="_blank"><InstagramIcon className={style.instagram_icon} /></a>
              <a href="https://www.google.com" target="_blank"><FacebookIcon className={style.facebook_icon} /></a>
              </div>
              <div
                className={style.main_sub_info}
              >
                  Починаючи займатись спортом з 6 років, отримав розряди в таких видах, як Гірські лижі, Фехтування, Плавання.
                <br></br>
                <br></br>
                Суддя України зі стренфлексу.
                <br></br>
                <br></br>
                Хобі: окрім тренажерного залу люблю займатися йогою кататися на Сноуборді, Роликах, Велосипеді, Коньках, Вейкборді . Але саме улюблене це страйкбол.
                <br></br>
                <br></br>
                Стаж тренерської діяльності 17 років.
              </div>
              <div className={style.main_info}>
                Послуги: тренер, індивідуальні програми, WorkOut, спортивне харчування
                Починаючи займатись спортом з 6 років, отримав розряди в таких видах, як Гірські лижі, Фехтування, Плавання.

                <br></br>
                <br></br>
                В минулому М.С. - Стрибки на батуті (олімпійський вид спорту)
                Суддя України зі Стренфлексу
                <br></br>
                <br></br>
                З часом здобув досвід у практиках Йоги та медитації.
              </div>
              <div
                style={{height: moreInfoHeight2}}
                className={style.more_info}
              >
                <span ref={moreInfoText2} className={style.more_info_text}>
                Послуги: тренер, індивідуальні програми, WorkOut, спортивне харчування
                <br></br>
                <br></br>
                Починаючи займатись спортом з 6 років, отримав розряди в таких видах, як Гірські лижі, Фехтування, Плавання.
                <br></br>
                <br></br>
                В минулому М.С. - Стрибки на батуті (олімпійський вид спорту)
                Суддя України зі Стренфлексу
                .
                З часом здобув досвід у практиках Йоги та медитації.
                <br></br>
                Досвід роботи фітнес тренером – більше 18 років. Якщо ти ніколи не знайомився зі спортом, то методика тренування Олександра  – ідеальна для  твого початку. Безпечна техніка виконання вправ та правильні навантаження – це та база, якою ти зможеш користуватися усе життя. Працюю не тільки з початківцями. Мої учні завдяки методикам  без всякого «фарму» досягають гарних результатів за рік часу у вигляді жиму лежачи 150 кг. Станових тяг та присідання зі штангою понад 180 кг. і ці хлопці не є професійними спортсменами.  Дівчата теж отримують гарні результати у вигляді струнких фігур :) та підтягнутих сідниць.
                <br></br>
                Як хобі: сноуборд, ролики, велоспорт, ковзани, вейкборди́нг, бадмінтон. А ще, окреме місце в серці займає страйкбол.
                </span>
              </div>
              <div
                className={style.info_btn}
                onClick={()=>{showText(2);}}
              >
                {moreInfoHeight2 > 0  ? 'Меньше' : 'Більше'}
                <Arrow
                  className={`${style.info_arrow} ${moreInfoHeight2 > 0 ? style.info_arrow_active : ''}`}
                />
              </div>
            </div> 
          </div>

          <div className={style.member}>
            <img className={style.avatar} src="/about/ALX_6125 3.png" alt="avatar" />
            <div className={style.member_info}>
              <GradientText className={style.name}>МАЙКО ІРИНА</GradientText>
              <span className={style.prof}>Нутріціолог ф/к “Аgym”</span>
              <div className={style.social_wrap}>
              <a href="https://www.google.com" target="_blank"><InstagramIcon className={style.instagram_icon} /></a>
              <a href="https://www.google.com" target="_blank"><FacebookIcon className={style.facebook_icon} /></a>
              </div>
              <div
                className={style.main_sub_info}
              >
                  Освіта вища. Майстер Спорту з прижків на батуті, Спортом почав займатися з шести років. Маю спортивні розряди в Гірських лижах, Фехтува́нні, Плаванні.
                <br></br>
                <br></br>
                Суддя України зі стренфлексу.
                <br></br>
                <br></br>
                В минулому КМС - гирьовий спорт. Діючий фізкультурник любительського спорту, за напрямком фітнес, атлетизм, методист фізичної діяльності і спортивної дієтології.
              </div>
              <div className={style.main_info}>
                Послуги: індивідуальні консультації та тренінги для компаній
                <br></br>
                <br></br>
                Більше 20 років жила ресторанним бізнесом, керуючи різними ресторанами Львова. Завжди хотілося, щоб люди від їжі отримували не тільки енергію, а ще і якість, комфорт, задоволення, радість.
                <br></br>
                <br></br>
                Мене завжди приваблювала тема їжі, її походження, традиції різних країн, поєднання продуктів та  їх кращі методи приготування.
                Як хобі - сміливо можу назвати  кулінарію та сам процес приготування. Це для
              </div>
              <div
                style={{height: moreInfoHeight3}}
                className={style.more_info}
              >
                <span ref={moreInfoText3} className={style.more_info_text}>
                Послуги: індивідуальні консультації та тренінги для компаній
                <br></br>
                <br></br>

                Більше 20 років жила ресторанним бізнесом, керуючи різними ресторанами Львова. Завжди хотілося, щоб люди від їжі отримували не тільки енергію, а ще і якість, комфорт, задоволення, радість.
                <br></br>
                <br></br>
                Мене завжди приваблювала тема їжі, її походження, традиції різних країн, поєднання продуктів та  їх кращі методи приготування.
                Як хобі - сміливо можу назвати  кулінарію та сам процес приготування. Це для мене, як антистрес, деколи цілий квест та безмежний простір для фантазій та експериментів.
                <br></br>
                <br></br>
                З часом виявилось, що  не все так просто у формуванні правильної та збалансованої тарілки.
                Ми часто їмо достатньо по калоріях, а наш організм не доїдає – просто голодує -  по мікроеленетах, вітамінах, органічних кислотах, мінералах, клітковині. Не правильне поєднання тих чи інших продуктів – не дає повноцінно засвоїтися вітамінам та мікроелементам. Методи приготування – також важливі, бо на чому смажити, скільки та як варити – принципові питання.
                Від цього виникають дефіцити та такі симптоми, як
                -	Зайва вага або її брак
                -	Хронічна втома
                -	Алергії
                -	Проблеми з кишківником та слабкий імунітет
                <br></br>
                <br></br>
                Знання в області продуктів, технологій приготування їжі, сезонності та локальності – здобуті досвідом та підтвердженні практикою. 
                Навчалась в Школі здоров’я Катерини Толстікової, Першій Школі Біохакінгу
                Я навчу тебе як правильно та збалансовано харчуватись, прокачати звички та змінити погляд на життя та їжу, без голоду та стресу!!!
                </span>
              </div>
              <div
                className={style.info_btn}
                onClick={()=>{showText(3);}}
              >
                {moreInfoHeight3 > 0  ? 'Меньше' : 'Більше'}
                <Arrow
                  className={`${style.info_arrow} ${moreInfoHeight3 > 0 ? style.info_arrow_active : ''}`}
                />
              </div>
            </div> 
          </div>
        </section>
      </div>
    </div>
  );
};



export default About;
