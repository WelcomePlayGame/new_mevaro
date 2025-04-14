import Link from 'next/link';
import FacebookSVG from '../svg/page-facebook';
import InstagramSVG from '../svg/page-instagram';
import classes from './page-footer.module.css';
import YoutubeSVG from '../svg/page-yuotube';
import MapGoogle from '@/component/map_google/page-map-google';
import Blog from '../svg/page-blog';

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <ol className={`${classes.container_soc} items-center`}>
        <li>
          <Link
            href={'https://www.facebook.com/www.mevaro.kiev.ua'}
            target="_blank"
          >
            <FacebookSVG />
          </Link>
        </li>
        <li>
          <a
            href={'https://www.instagram.com/mevaro_peretyajka/'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ознайомитись з нашими роботами в  Instagram"
          >
            <InstagramSVG />
          </a>
        </li>
        <li>
          <a
            href={'https://www.youtube.com/@MevaroKiev'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ознайомитись з нашими роботами в  Youtube"
          >
            <YoutubeSVG />
          </a>
        </li>
        <li>
          <a href={'/blogs'} aria-label="Ознайомитись з нашим блогом">
            <Blog />
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com/mevaro_kiev"
            aria-label="Ознайомитись з Pinterest"
            target="_blank"
          >
            Pinterest
          </a>
        </li>
      </ol>
      <div className={`${classes.container_mini_menu}`}>
        <ol className={`${classes.container_mini_menu_ol}`}>
          <li>
            <a href="karta_map" aria-label="Карта Сайта">
              Карта Сайту
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/search?sca_esv=4f7c836df226b895&authuser=0&hl=ru&gl=ua&output=search&q=Mevaro&ludocid=10220279674707005093&lsig=AB86z5X22yA71rdTu7odcHkLMWEd&ved=1i%3A4%2Ct%3A109124%2Ce%3A3%2Cp%3AQkdDZ-u0DP-TwPAPr5LqyQk%3A64#mpd=~4100839171516405367/customers/reviews"
              target="_blank"
            >
              Відгуки на Google
            </a>
          </li>
          <li>
            <a href="/about_us" target="_blank">
              Про Нас
            </a>
          </li>
          <li></li>
        </ol>
      </div>
      <div className={`${classes.container_adress}`}>
        <address>місто Київ</address>
        <address>{process.env.NEXT_PUBLIC_STREET_UA}</address>
      </div>
    </footer>
  );
};
export default Footer;
