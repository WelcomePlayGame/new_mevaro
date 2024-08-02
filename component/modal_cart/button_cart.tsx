'use client';
import classes from './page-button.module.css';
import { useState } from 'react';
import PopCart from './pop_cart';
const ButtonCart = ({
  price,
  title,
  discount10,
  discount5,
  url,
}: {
  price: number;
  title: string;
  discount10: number;
  discount5: number;
  url: string;
}) => {
  const [isClosed, setCloset] = useState(false);
  const handleChanged = () => {
    setCloset(!isClosed);
  };
  return (
    <main>
      <a className={`${classes.btn} m-[10px]`} onClick={handleChanged}>
        Купити
      </a>
      <PopCart
        isClosed={isClosed}
        title={title}
        price={price}
        discount10={discount10}
        discount5={discount5}
        url={url}
      />
    </main>
  );
};
export default ButtonCart;
