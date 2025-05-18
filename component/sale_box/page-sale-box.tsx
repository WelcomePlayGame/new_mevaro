'use client';
import { useState } from 'react';
import classes from './page-sale-box.module.css';
import PopSale from './page-pop-sale';

const SaleBox = () => {
  return (
    <div>
      <div>
        <div className={`${classes.container_sale}`}>
          <span className={`${classes.container_sale_span}`}>
            <a href="https://t.me/mevaro_bot" target="_blanck">
              Вас цікавить знижка?
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SaleBox;
