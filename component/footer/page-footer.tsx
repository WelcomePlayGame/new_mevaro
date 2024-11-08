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
            href={'https://www.youtube.com/@WelcometoMeVARO'}
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
      </ol>
      <div className={`${classes.container_adress}`}>
        <address>місто Київ</address>
        <address>вул. Екскаваторна 37</address>
      </div>
    </footer>
  );
};
export default Footer;
