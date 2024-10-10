import React from 'react';
import classes from './page-replace-block.module.css';
import Image from 'next/image';
const ReplaceBlock = () => {
  return (
    <main id="block" className={`${classes.container_block}`}>
      <h2>Заміна пружинного блока</h2>
      <div className={`${classes.container_div} `}>
        <Image
          src={'/image/block.jpg'}
          width={600}
          height={600}
          alt="Заміна пружинного блоку"
        />
      </div>
      {/* <img src={'/image/block.jpg'} alt={'Заміна пружинного блоку'} /> */}
      <div className={`${classes.container_price_block}`}>
        <div className={`${classes.container_one_block}`}>
          <h3>Бюджет</h3>
          <span>4800 грн</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Заміна Пружинного Блока</li>
              <li>Гарантія 12 місяців</li>
              <li>Безкоштовна Доставка</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.container_one_block_main}`}>
          <h3>Середній </h3>
          <span>5500 грн</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Заміна Пружинного Блока</li>
              <li>Гарантія 12 місяців</li>
              <li>Безкоштовна Доставка</li>
              <li>Заміна Поролона</li>
              <li>Заміна Войлока</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.container_one_block}`}>
          <h3>Люкс</h3>
          <span>6500 грн +-</span>
          <div className={`${classes.container_ul_block}`}>
            <ul>
              <li>Заміна Пружинного Блока</li>
              <li>Гарантія 12 місяців</li>
              <li>Безкоштовна Доставка</li>
              <li>Заміна Поролона</li>
              <li>Заміна Войлока</li>
              <li>Заміна Тканини</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReplaceBlock;
