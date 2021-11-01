import React, { useState, useRef, Fragment, useEffect } from 'react';
import style from '../../styles/modules/blog.module.scss';
import GradientText from '../../components/Gradient-text';
import Bread from '../../components/Bread';
import Link from "next/link";
import SearchIcon from '../../public/icon-svg/Search-icon';
import CloseIcon from '../../public/icon-svg/Close-icon-white';
import MoreBtn from '../../components/buttons/Trial-training-btn';
import { TelegramShareButton, ViberShareButton } from 'next-share'
import ShareIcon from '../../public/icon-svg/SocialShare-icon';
import { getStrapiMedia } from "../../utils/medias";
import NextImage from 'next/image';
import { getBlogBySearch, getBlogs, getBlogsByThemeId, getThemeBlogs } from '../../utils/api';



const BlogContainer = () => {

  async function loadData() {
    const themeBlogs = await getThemeBlogs();
    setCurentThemeBlogs(themeBlogs);
    const blogs = await getBlogs();
    setCurrentBlogs(blogs);
    setnonChangeBlogs(blogs);
  }
  useEffect(() => {
    loadData();
  }, [])

  let [activMarker, setActivMarker] = useState(0);
  let [activeInput, setActiveInput] = useState(false);
  let search = useRef();
  let [moreTopics, setMoreTopics] = useState(10);
  const [nonChangeBlogs, setnonChangeBlogs] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [curentThemeBlogs, setCurentThemeBlogs] = useState([]);

  const loader = ({ src }) => {
    return getStrapiMedia(src)
  }

  async function active(id) {
    setActivMarker(id);
    if (id !== 0) {
      const filterBlogs = await getBlogsByThemeId(id);
      setCurrentBlogs(filterBlogs);
    } else {
      setCurrentBlogs(nonChangeBlogs);
    }
  }

  function searchAction(params) {
    if (!activeInput) {
      search.current.focus();
      setActiveInput(true);
    }

    if (params === 'close') {
      setActiveInput(false);
      search.current.value = '';
    }
  }
  async function searchBlogs() {
    const searchBlogs = await getBlogBySearch(search.current.value);
    setCurrentBlogs(searchBlogs);
  }

  function blureInput(params) {
    if (search.current.value === '') {
      setActiveInput(false);
    }
  }

  function changeTheme(params) {
    let name = ''

    if (params === 'Харчування') {
      name = 'eat'
    }

    if (params === 'Тренування') {
      name = 'taining'
    }

    if (params === 'Здоровий спосіб життя') {
      name = 'life'
    }

    if (params === 'Краса') {
      name = 'beauty'
    }

    if (params === 'Нутрицевтики') {
      name = 'nutraceuticals'
    }

    if (params === 'Поради тренера') {
      name = 'advices'
    }

    if (params === 'Клуб') {
      name = 'club'
    }

    if (params === 'Рецепти') {
      name = 'recipes'
    }

    return name;
  }

  function showMoreTopic(params) {
    setMoreTopics(moreTopics + 5)
  }

  let [someText, setSomeText] = useState()

  useEffect(() => {
    setSomeText(window.location.href)
  })

  function copyLink() {
    navigator.clipboard.writeText(someText)

  }


  return (
    <div className={style.blog}>
      <Bread className={style.crumbs}>
        <Link href="/">Головна</Link>
        <Link href="/"> / Блог</Link>
      </Bread>
      <GradientText className={style.title}>БЛОГ</GradientText>
      <main className={style.main}>
        <nav className={style.navigation}>
          {curentThemeBlogs.map(({ name, id, sub_theme_blogs }) => {
            return (
              <div
                key={id}
                className={`${style.marker} ${activMarker === id ? style.marker_active : ''}`}
                onClick={() => { active(id); }}
              >
                {name} <span>{id !== 0 ? (sub_theme_blogs?.length || 0) : nonChangeBlogs.length}</span>
              </div>
            )
          })}
        </nav>
        <article className={style.articles}>
          <div
            className={`${style.search_wrap_bcg} ${activeInput ? style.search_active : ''}`}
            onClick={() => { searchAction(); }}
          >
            <div className={style.search_wrap}>
              <input type="text"
                ref={search}
                onBlur={() => { blureInput(); }}
                placeholder="Назва, тема"
              />
              {activeInput ? <div
                onClick={() => { searchAction('close'); }}
              >
                <CloseIcon />
              </div> : ''}
              <div
                className={style.search_icon_wrap}
                onClick={searchBlogs}
              >
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className={style.mobile_nav}>
            <nav className={`${style.navigation} ${style.mob_navigation}`}>
              {curentThemeBlogs.map(({ name, id }) => {
                return (
                  <div
                    key={id}
                    className={`${style.marker} ${activMarker === id ? style.marker_active : ''}`}
                    onClick={() => { active(id); }}
                  >
                    {name}
                  </div>
                )
              })}
            </nav>
          </div>
          <div className={style.topic}>
            {currentBlogs.map(({ id, name, theme_blogs, photo, descriptionTop, slug }, index) => {
              return (
                <Fragment key={id} >
                  {moreTopics > index ?
                    <div className={style.card}>
                      <div className={style.card_hover}>
                        <span className={style.theme}>
                          {theme_blogs.map(({ id, name, key }) => {
                            return (
                              <span key={id} className={`${style.item} ${style[key]}`}>{name}</span>
                            )
                          })}
                        </span>
                        <span className={style.card_title}>
                          {name}
                        </span>
                        <span className={style.small_descritpion}>{descriptionTop}</span>
                        <div className={style.social_wrap}>
                          {/* <span className={style.more}>Читати більше <img src="/blog/next.png" alt="img" /></span> */}
                          <Link href={'blog/' + slug}>
                            <a className={style.more}>Читати більше <img src="/blog/next.png" alt="img" /></a>
                          </Link>
                          <div className={style.share_wrap}>
                            <div className={style.share_btn_wrap}>
                              <span>Поділитись</span>
                              <div
                                className={`${style.shareLink} ${style.shareTips}`}
                                onClick={() => { copyLink() }}
                              >
                                <ShareIcon className={`${style.share_icon} ${style.shareLink}`} copyLink />
                              </div>
                              <div className={`${style.shareTelegram} ${style.shareTips}`}>
                                <TelegramShareButton url={someText}>
                                  <ShareIcon className={`${style.share_icon}`} telegram />
                                </TelegramShareButton>
                              </div>
                              <Link href="">
                                <a className={`${style.shareMail} ${style.shareTips}`} href={`mailto:; ?body=${someText};`} target="_blank">
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
                        </div>
                      </div>

                      {/* <img src={photo?.url}  alt="img" /> */}
                      <div className={style.img_wraper}>
                        {photo?.url ? <NextImage
                          loader={loader}
                          layout="fill"
                          objectFit="contain"
                          src={photo.url}
                          alt={photo.alternativeText || ""}
                        /> : null}
                      </div>
                      <span className={style.theme}>
                        {theme_blogs.map(({ id, name, key }) => {
                          return (
                            <span key={id} className={`${style.item} ${style[key]}`}>{name}</span>
                          )
                        })}
                      </span>
                      <span className={style.card_title}>
                        {name}
                      </span>
                    </div>
                    : ''
                  }
                </Fragment>
              );
            })}
          </div>
          {moreTopics < currentBlogs.length ? <MoreBtn
            funcAction={() => { showMoreTopic(); }}
            className={style.more_btn}
            consultation>Більше</MoreBtn> : null}
        </article>
      </main>
    </div>
  );
};

export default BlogContainer;
