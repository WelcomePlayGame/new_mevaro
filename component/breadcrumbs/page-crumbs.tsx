import React from 'react';
import classes from './page-breadcrumbs.module.css';

export interface CrumbsProps {
  crumbs: {
    label: string;
    url?: string;
  }[];
}

const Crumbs = ({ crumbs }: CrumbsProps) => {
  // Генеруємо JSON-LD для BreadcrumbList
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: crumb.url || undefined,
    })),
  };

  return (
    <section>
      <ol className={`${classes.breadcrumbs} flex justify-normal`}>
        {crumbs.map((crumb, index) => (
          <li key={index} className={`${classes.breadcrumbs_li}`}>
            {crumb.url ? (
              <a href={crumb.url} className="breadcrumps_a">
                {crumb.label}
              </a>
            ) : (
              <span className="breadcrumps_label">{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && <span> / </span>}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList),
        }}
      />
    </section>
  );
};

export default Crumbs;
