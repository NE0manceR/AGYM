import React from 'react';
import style from '../styles/modules/footer.module.scss';
import Form from './Form';
import SocialNetwork from './Social-network';

const Footer = ({about}) => {
  return (
    <div>
      <section className={style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454.9095819214359!2d24.03862090112924!3d49.83574547074478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fec76e1e9d074f9!2sAysedora!5e0!3m2!1sen!2sua!4v1627743403154!5m2!1sen!2sua" style={{border: 'none', width: '100%', height: '100%'}} zoom="10"  loading="lazy"></iframe>
      </section>    

      <div className={style.footer}>
      <div id="contacts" className={style.contacts}>
        <h4 className={style.title}>Графік роботи</h4>
        <span className={style.text}>Пн-Пт  9:00-22:30</span>
        <span className={style.text}>Сб        9:00-21:30</span>
        <span className={style.text}>Нд       вихідний</span>
        <br />
        <br />
        <span className={style.text}>Пн Ср Пт   -    Жіночі дні</span>
        <span className={style.text}>Вт Чт Сб    -    Чоловічі дні</span>
        <br />
        <br />
        <h4 className={style.title}>Адреса</h4>
        <span className={style.text}>{about.city}</span>
        <span className={style.text}>{about.street}</span>
        <br />
        <br />
        <h4 className={style.title}>Контакти</h4>
        <a className={style.text} href="tel:0322 75 66 74">роб. {about.working_phone}</a>
        <a className={style.text} href="tel:050 553 6110">моб. {about.mobile_phone}</a>

        <span className={style.text}>сайт	{about.site}</span>
        <br />
        <br />
        <h4 className={style.title}>Email</h4>
        <span className={style.text}>{about.mail}</span>
      </div>
      <Form />
      <section className={style.mob_map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454.9095819214359!2d24.03862090112924!3d49.83574547074478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fec76e1e9d074f9!2sAysedora!5e0!3m2!1sen!2sua!4v1627743403154!5m2!1sen!2sua" style={{border: 'none', width: '100%', height: '100%'}} zoom="10" loading="lazy"></iframe>
      </section> 
      <SocialNetwork className={style.footer_social} />
    </div>
      <div className={style.under}>
        <span>© Copyright 2021. Agym All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
