'use client';
import Link from 'next/link';
import classes from './page-head.module.css';

const HeadZakaz = () => {
  return (
    <menu>
      <ul className={`${classes.head_top}`}>
        <li>
          <Link href="/fabrics">Каталог тканин</Link>
        </li>
        <li>
          <a href="/#map">Наша адреса</a>
        </li>
      </ul>
    </menu>
  );
};
export default HeadZakaz;
