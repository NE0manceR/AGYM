import React, { useEffect, useState } from "react";
import style from "../../styles/modules/article.module.scss";
import Bread from "../../components/Bread";
import Link from "next/link";
import Arrow from "../../public/icon-svg/Arrow-back";
import { TelegramShareButton, ViberShareButton } from "next-share";
import { MailruShareButton } from "react-share";
import ShareIcon from "../../public/icon-svg/SocialShare-icon";
import GradientText from "../../components/Gradient-text";
import { getBlogBySlug } from "../../utils/api";
import { useRouter } from "next/router";

const Article = () => {
  let [someText, setSomeText] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState({ name: "load" });
  useEffect(() => {
    setSomeText(window.location.href);
  });

  useEffect(() => {
    getBlogBySlug(slug).then((resp) => {
      if (resp && resp[0]) {
        setArticle(resp[0]);
      }
    });
  }, []);

  function copyLink() {
    navigator.clipboard.writeText(someText);
  }

  function changeTheme(params) {
    let name = "";

    if (params === "Харчування") {
      name = "eat";
    }

    if (params === "Тренування") {
      name = "taining";
    }

    if (params === "Здоровий спосіб життя") {
      name = "life";
    }

    if (params === "Краса") {
      name = "beauty";
    }

    if (params === "Нутрицевтики") {
      name = "nutraceuticals";
    }

    if (params === "Поради тренера") {
      name = "advices";
    }

    if (params === "Клуб") {
      name = "club";
    }

    if (params === "Рецепти") {
      name = "recipes";
    }

    return name;
  }

  return (
    <div className={style.article}>
      <Bread className={style.crumbs}>
        <Link href='/'>Головна</Link>/<Link href='/blog'>Блог</Link>/
        <a>{article.name}</a>
      </Bread>
      <main className={style.main}>
        <div className={style.share_wrap}>
          <Link href='/blog'>
            <a className={style.link_back}>
              <Arrow />
              Назад до статей
            </a>
          </Link>
          <div className={style.share_btn_wrap}>
            <span>Поділитись</span>
            <div
              className={`${style.shareLink} ${style.shareTips}`}
              onClick={() => {
                copyLink();
              }}
            >
              <ShareIcon
                className={`${style.share_icon} ${style.shareLink}`}
                copyLink
              />
            </div>
            <div className={`${style.shareTelegram} ${style.shareTips}`}>
              <TelegramShareButton url={someText}>
                <ShareIcon className={`${style.share_icon}`} telegram />
              </TelegramShareButton>
            </div>
            <Link href='/'>
              <a
                className={`${style.shareMail} ${style.shareTips}`}
                href={`mailto:; ?body=${someText};`}
                target='_blank'
              >
                <ShareIcon className={style.share_icon} mail />
              </a>
            </Link>
            <div className={`${style.shareViber} ${style.shareTips}`}>
              <ViberShareButton url={someText}>
                <ShareIcon className={style.share_icon} viber />
              </ViberShareButton>
            </div>
          </div>
        </div>
        <GradientText className={style.article_title}>
          {article.name}
        </GradientText>
        <span className={style.theme}>
          {article.theme_blogs?.map(({ id, name }) => {
            return (
              <span
                key={id}
                className={`${style.item} ${style[changeTheme(name)]}`}
              >
                {name}
              </span>
            );
          })}
        </span>
        <span className={style.text}>{article.descriptionTop}</span>
        <img className={style.blog_img} src='/article/photo.png' alt='img' />
        <span className={style.text}>{article.descriptionBottom}</span>
        <span className={style.share_info}>
          ІНФОРМАЦІЯ БУЛА КОРИСНОЇ ДЛЯ ТЕБЕ? ПОДІЛИСЬ НЕЮ У СОЦ. МЕРЕЖАХ!
        </span>
        <div className={style.share_btn_info}>
          <div
            className={`${style.shareLink} ${style.shareTips}`}
            onClick={() => {
              copyLink();
            }}
          >
            <ShareIcon
              className={`${style.share_icon} ${style.shareLink}`}
              copyLink
            />
          </div>
          <div className={`${style.shareTelegram} ${style.shareTips}`}>
            <TelegramShareButton url={someText}>
              <ShareIcon className={`${style.share_icon}`} telegram />
            </TelegramShareButton>
          </div>
          <Link href='/'>
            <a
              className={`${style.shareMail} ${style.shareTips}`}
              href={`mailto:; ?body=${someText};`}
              target='_blank'
            >
              <ShareIcon className={` ${style.share_icon}`} mail />
            </a>
          </Link>
          <div className={`${style.shareTips} ${style.shareViber} `}>
            <ViberShareButton url={someText}>
              <ShareIcon className={style.share_icon} viber />
            </ViberShareButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Article;
