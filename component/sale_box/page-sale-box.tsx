'use client';
import { useState } from 'react';
import classes from './page-sale-box.module.css';
import PopSale from './page-pop-sale';

const SaleBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <main>
      <div>
        <div className={isChecked ? 'hidden' : `${classes.container_sale}`}>
          <span
            className={`${classes.container_sale_span}`}
            onClick={handleChecked}
          >
            Вас цікавить знижка?
          </span>
        </div>
      </div>
      <PopSale isChecked={isChecked} setIsChecked={setIsChecked} />
    </main>
  );
};
export default SaleBox;
