import Image from 'next/image';
import clasess from './page-head.module.css';

const SubHead = () => {
  return (
    <main className={`${clasess.head_sub}`}>
      <div className={`${clasess.container_logo_h1}`}>
        <div className={`${clasess.container_logo}`}>
          <img src={'/logo/logo.png'} alt="Mevaro" />
        </div>
        <div>
          <h1>Перетяжка меблів Київ</h1>
        </div>
      </div>
      <div>Call us</div>
      <div>Write us</div>
    </main>
  );
};
export default SubHead;
