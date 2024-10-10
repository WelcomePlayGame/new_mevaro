import Image from 'next/image';
import React from 'react';
import classes from '@/component/head/page-head.module.css';
const ImgSection = () => {
  return (
    <main className="flex flex-col">
      <div className={`${classes.container_h2_wrap}`}>
        <h4 className={`${classes.container_h2_div} `}>
          Які Додаткові послуги надаєте?
        </h4>
      </div>
      <div className="flex flex-col items-center  lg:flex-row lg:flex lg:justify-center ">
        <div className={`${classes.container_img_div} `}>
          <Image
            src="/image/pere_4.png"
            fill
            alt=""
            className={`${classes.container_img}`}
          />
        </div>
        <div className={`${classes.container_img_div} `}>
          <div className={`${classes.tooltip}`}>
            <h3 className={`${classes.container_h3_div}`}>Додаткові роботи:</h3>
            <ul className="flex flex-col items-start text-[16px] lg:text-[2rem] list-disc">
              <li>Заміна поролона</li>
              <li>Заміна пружинного блока</li>
              <li>Заміна або Ремонт Механізму</li>
              <li>Заміна бруса або фанери</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImgSection;
