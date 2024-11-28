import React from 'react';
import classes from './mebli.module.css';
import Image from 'next/image';
const Third_section = () => {
  return (
    <section>
      <h2 className="text-center text-[1.5rem]">Меблі на замовлення Київ</h2>
      <div className="flex flex-col items-center lg:flex-wrap lg:flex-row lg:justify-center lg:items-center m-[10px]">
        <div className="flex flex-col items-center p-[7px]">
          <Image
            src="/image/mebli/sofa.jpg"
            alt="Виготовлення дивану"
            width={600}
            height={300}
            className={`${classes.container_img_third}`}
          />
          <h4 className={`${classes.container_img_third_h4}`}>
            Виготовлення дивану
          </h4>
        </div>
        <div className="flex flex-col items-center p-[7px]">
          <Image
            src="/image/mebli/ugl_sofa.jpg"
            alt="Виготовлення кутового дивану"
            width={600}
            height={300}
            className={`${classes.container_img_third}`}
          />
          <h4 className={`${classes.container_img_third_h4}`}>
            Виготовлення кутового дивану
          </h4>
        </div>
        <div className="flex flex-col items-center p-[7px]">
          <Image
            src="/image/mebli/lijko.jpg"
            alt="Виготовлення кутового дивану"
            width={600}
            height={300}
            className={`${classes.container_img_third}`}
          />
          <h4 className={`${classes.container_img_third_h4}`}>
            Виготовлення ліжка
          </h4>
        </div>
        <div className="flex flex-col items-center p-[7px]">
          <Image
            src="/image/mebli/paneli.jpg"
            alt="Виготовлення кутового дивану"
            width={600}
            height={300}
            className={`${classes.container_img_third}`}
          />
          <h4 className={`${classes.container_img_third_h4}`}>
            Виготовлення стінових панелей
          </h4>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="flex flex-col items-center">
        <hr className="bg-[#000] mt-[30px] h-[5px] w-[300px] lg:w-[500px] mb-[50px]" />
      </div>
    </section>
  );
};

export default Third_section;
