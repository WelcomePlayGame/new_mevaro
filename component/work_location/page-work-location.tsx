import React from 'react';
import classes from './page-work-location.module.css';

const WorkLocation = () => {
  return (
    <section
      className={`${classes.container_work_location}`}
      itemScope
      itemType="http://schema.org/Place"
    >
      <hr />
      <h4 className={`${classes.container_work_location_h4}`} itemProp="name">
        Ми робимо перетяжку по таким районам:
      </h4>
      <section
        className={`${classes.container_section_ol}`}
        itemProp="containsPlace"
      >
        <ol className={`${classes.container_ol}`}>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Троещина</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Лісова</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Воскресенка</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Лівобережний</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Русанівка</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Софіївська Борщагівка</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Петропавлівська Борщагівка</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Борщагівка</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Оболонь</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Крюковщина</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Харківський массив</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Позняки</span>
          </li>
          <li
            className={`${classes.container_li}`}
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">Осокорки</span>
          </li>
        </ol>
      </section>
    </section>
  );
};

export default WorkLocation;
