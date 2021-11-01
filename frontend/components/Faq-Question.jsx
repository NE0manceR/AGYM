import React,{ useState, useRef } from 'react';
import style from '../styles/modules/faq-question.module.scss';
import Arrow from '../public/icon-svg/Drop-down-icon';

const FaqQuestion = ({question, answer}) => {
  let text_wrap = useRef();
  let text = useRef();
  let title = useRef();

  let [faqHeight, setFaqHeight] = useState(0)


  function showText() {

    if(faqHeight === 0) {
      setFaqHeight(text.current.clientHeight + 32)
    } else {
      setFaqHeight(0)
    }
  }

  return (
    <div className={`${style.faq} ${faqHeight > 0 ? style.faq_active : ''}`}>
      <div
        ref={title}
        className={style.title_wrap}
        onClick={()=>{showText();}}
      >
        <span className={style.question}>
          {question}
        </span>
        <div className={`${style.arrow} ${faqHeight > 0 ? style.active_arrow : ''}`}>
          <Arrow  />
        </div>
      </div>
      <div
        ref={text_wrap} 
        className={`${style.answer_wrap} ${faqHeight > 0 ? style.active : ''}`}
        style={{height: faqHeight,}}
      >
        <span ref={text}>
          {answer}
        </span>
      </div>
    </div>
  );
};

export default FaqQuestion;
