import React from 'react';
import classes from './page-breadcrumbs.module.css';
export interface Crumbs {
  crumbs: {
    label: string;
    url?: string;
  }[];
}

const Crumbs = ({ crumbs }: Crumbs) => {
  return (
    <section>
      <ol className={`${classes.breadcrumbs} flex justify-normal`}>
        {crumbs.map((crumb: any, index: any) => {
          return (
            <li key={index}>
              <a href={crumb.url} className="breadcrumps_a">
                {crumb.label}
              </a>
              {index < crumbs.length - 1 && <span> / </span>}
            </li>
          );
        })}
      </ol>
    </section>
  );
};
export default Crumbs;
