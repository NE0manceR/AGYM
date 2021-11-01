import React from 'react'
import style from '../../styles/modules/primary-low-btn.module.scss';
import Link from "next/link";;


const PrimaryLowBtn = ({children, link, showMore, className}) => {
  return (
    <div className={`${style.show_more} ${className}`}>
       {link ? 
       <Link href='/gallery'>
          <a><span>{children}</span></a>
        </Link> :
          <p
            onClick={()=>{showMore()}}
          ><span>{children}</span></p>
        }
      </div>
  );
};

export default PrimaryLowBtn;



