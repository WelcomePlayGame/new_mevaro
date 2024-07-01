import Link from 'next/link';
import FacebookSVG from '../svg/page-facebook';
import InstagramSVG from '../svg/page-instagram';
import classes from './page-footer.module.css';

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <div className={`${classes.container_soc}`}>
        <div>
          <Link
            href={'https://www.facebook.com/www.mevaro.kiev.ua'}
            target="_blank"
          >
            <FacebookSVG />
          </Link>
        </div>
        <div>
          <Link
            href={'https://www.instagram.com/mevaro_peretyajka/'}
            target="_blank"
          >
            <InstagramSVG />
          </Link>
        </div>
      </div>
      <div className={`${classes.container_adress}`}>
        <span>місто Київ</span>
        <span>вул. Екскаваторна 37</span>
      </div>
    </footer>
  );
};
export default Footer;
