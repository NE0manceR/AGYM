import React from "react";
import style from "../styles/modules/faq.module.scss";
import Link from "next/link";
import GradientText from "../components/Gradient-text";
import Bread from "../components/Bread";
import FaqQuestion from "../components/Faq-Question";

const Faq = ({faqs}) => {

  return (
    <div className={style.faq}>
      <Bread className={style.crumbs}>
        <Link href="/">Головна</Link>
        <Link href="/"> / Найпоширеніші запитання</Link>
      </Bread>
      <h2 className={style.title}>
        Найпоширеніші<GradientText> запитання</GradientText>
      </h2>
      <div className={style.question_wrap}>
        {faqs.map(({description, title, id}) => {
          return (
            <FaqQuestion
              key={id}
              question={title}
              answer={description}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Faq;
