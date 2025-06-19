import React from 'react';
import classes from './page-replace-block.module.css';
import Image from 'next/image';
const ReplaceBlock = () => {
  return (
    <section id="block" className={`${classes.container_block} pt-[30px]`}>
      <h2>Замена пружинного блока Киев</h2>
      <div className={`${classes.container_div} `}>
        <Image
          src={'/image/block.jpg'}
          width={600}
          height={600}
          alt="Замена пружинного блока Киев"
        />
      </div>

      <div className={`${classes.container_price_block}`}>
        <div className={`${classes.container_one_block}`}>
          <h3>Бюджет</h3>
          <span>5000 грн</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Замена Пружинного Блока</li>
              <li>Гарантия 12 месяцев</li>
              <li>Бесплатная Доставка</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.container_one_block_main}`}>
          <h3>Средний </h3>
          <span>5500 грн</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Замена Пружинного Блока</li>
              <li>Гарантия 12 месяцев</li>
              <li>Бесплатная Доставка</li>
              <li>Замена Поролона</li>
              <li>Замена Войлока</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.container_one_block}`}>
          <h3>Люкс</h3>
          <span>6500 грн +-</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Замена Пружинного Блока</li>
              <li>Гарантия 12 месяцев</li>
              <li>Бесплатная Доставка</li>
              <li>Замена Поролона</li>
              <li>Замена Войлока</li>
              <li>Замена Ткани</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplaceBlock;
