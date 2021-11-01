import React from 'react';
import style from '../../styles/modules/more-btn.module.scss';
import Link from "next/link";


const MoreBtn = ({link}) => {
  return (
    <Link href={`${link}`}><a className={style.more_btn}>Дізнатись більше</a></Link>
  );
};

export default MoreBtn;
