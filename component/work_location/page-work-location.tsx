import React from 'react';
import classes from './page-work-location.module.css';
const WorkLocation = () => {
  return (
    <section className={`${classes.container_work_location}`}>
      <hr />
      <h4 className={`${classes.container_work_location_h4}`}>
        ми працюємо по Києву
      </h4>
      <section className={`${classes.container_section_ol}`}>
        <ol className={`${classes.container_ol}`}>
          <li className={`${classes.container_li}`}>Троещина</li>
          <li className={`${classes.container_li}`}>Лісова</li>
          <li className={`${classes.container_li}`}>Воскресенка</li>
          <li className={`${classes.container_li}`}>Лівобережка</li>
          <li className={`${classes.container_li}`}>Русановка</li>
          <li className={`${classes.container_li}`}>Софіївська Борщагівка</li>
          <li className={`${classes.container_li}`}>
            Петропавлівська Борщагівка
          </li>
          <li className={`${classes.container_li}`}>Південна Борщагівка</li>
          <li className={`${classes.container_li}`}>Оболонь</li>
          <li className={`${classes.container_li}`}>Крюковщина</li>
        </ol>
      </section>
    </section>
  );
};

export default WorkLocation;
