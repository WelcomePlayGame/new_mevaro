'use client';
import Link from 'next/link';
import classes from './page-head.module.css';
import { usePathname } from 'next/navigation';

const Head = () => {
  const path = usePathname();
  return (
    <section>
      <ol className={`${classes.head_top}`}>
        <li>{path !== '/' && <Link href="/">Перетяжка</Link>}</li>
        {path !== '/fabrics' && (
          <li>
            <Link href="/fabrics">Каталог тканин</Link>
          </li>
        )}

        <li>
          <a href="/#block">Заміна пружинного блока</a>
        </li>
        <li>
          <a href="/#pillow">Пошити подушки</a>
        </li>
        <li>
          <a href="/#reviews">Відгуки</a>
        </li>
        <li>
          <a href="/#map">Наша адреса</a>
        </li>
      </ol>
    </section>
  );
};
export default Head;
