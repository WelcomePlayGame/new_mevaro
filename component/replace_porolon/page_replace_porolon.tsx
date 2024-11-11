import React from 'react';
import classes from './replace_porolon.module.css';
import Image from 'next/image';

const ReplacePorolon = () => {
  return (
    <section className={`${classes.container_porolon}`}>
      <h2 className={`${classes.container_porolon_h1}`}>Заміна поролона</h2>
      <div className={`${classes.container_porolon_top}`}>
        <div className={`${classes.container_porolon_wrap_image}`}>
          <Image
            src={'/image/porolon.webp'}
            fill
            alt="Заміна поролона"
            className={`${classes.container_porolon_img}`}
          />
        </div>
        <h3 className={`${classes.container_porolon_h3}`}>
          Щільність поролона
        </h3>
        <p className={`${classes.container_porolon_describe}`}>
          (вартість залежить від товщини поролона та щільності)
        </p>
        <div className={`${classes.container_porolon_bottom}`}>
          <div className={`${classes.container_type_porolon}`}>
            <span className={`${classes.container_type_porolon_span}`}>
              Поролон 25кг/м.куб
            </span>
          </div>
          <div className={`${classes.container_type_porolon}`}>
            <span className={`${classes.container_type_porolon_span}`}>
              Поролон 28кг/м.куб
            </span>
          </div>
          <div className={`${classes.container_type_porolon}`}>
            <span className={`${classes.container_type_porolon_span}`}>
              Поролон 35кг/м.куб
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplacePorolon;
