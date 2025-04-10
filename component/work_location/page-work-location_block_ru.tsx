import React from 'react';
import classes from './page-work-location.module.css';

const WorkLocation = () => {
  return (
    <section className={`${classes.container_work_location}`}>
      <hr />
      <h4 className={`${classes.container_work_location_h4}`}>
        Мы делаем замену блока в следующих районах:
      </h4>
      <section className={`${classes.container_section_ol}`}>
        <ol className={`${classes.container_ol}`}>
          <li className={`${classes.container_li}`}>Троещина</li>
          <li className={`${classes.container_li}`}>Лесная</li>
          <li className={`${classes.container_li}`}>Воскресенка</li>
          <li className={`${classes.container_li}`}>Левобережка</li>
          <li className={`${classes.container_li}`}>Русановка</li>
          <li className={`${classes.container_li}`}>Софиевская Борщаговка</li>
          <li className={`${classes.container_li}`}>
            Петропавловская Борщаговка
          </li>
          <li className={`${classes.container_li}`}>Южная Борщаговка</li>
          <li className={`${classes.container_li}`}>Оболонь</li>
          <li className={`${classes.container_li}`}>Крюковщина</li>
        </ol>
      </section>
    </section>
  );
};

export default WorkLocation;
