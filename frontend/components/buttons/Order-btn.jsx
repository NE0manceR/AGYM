import Link from 'next/link';
import React from 'react';
import style from '../../styles/modules/order.module.scss';

const OrderBtn = () => {
  return (
    <div className={style.order_btn}>
      <Link href="/">
        <a>
          <span>Замовити</span>
        </a>
      </Link>
    </div>
  );
};

export default OrderBtn;
