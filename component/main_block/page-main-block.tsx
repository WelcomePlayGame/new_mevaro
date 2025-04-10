import Image from 'next/image';
import React from 'react';
import classes from './page-main-block.module.css';
const ImageMainBlock = () => {
  return (
    <main className={` ${classes.container} flex flex-col items-center`}>
      <h2 className={`text-center`}>Перетяжка та ремонт</h2>
      <h3>М&apos;яких Меблів</h3>
      <div className="relative ">
        <Image
          src={`/image/main_fon.png`}
          width={600}
          height={600}
          alt="Перетяжка меблів Mevaro"
        ></Image>
      </div>
      <div>
        <span className={``}>Безкоштовна Консультація</span>
      </div>
    </main>
  );
};

export default ImageMainBlock;
