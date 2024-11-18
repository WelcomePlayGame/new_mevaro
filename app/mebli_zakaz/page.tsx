import HeadZakaz from '@/component/head/page-head-mebli-zakaz';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import Footer from '@/component/footer/page-footer';
import FirstSection from '@/component/mebli_zakaz/first_section';
import SecondSection from '@/component/mebli_zakaz/second_section';
import Third_section from '@/component/mebli_zakaz/third_section';
import SliderTkani from '@/component/mebli_zakaz/slider-tkani';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈ Виготовлення м’яких меблів під замовлення|Ексклюзивний дизайн',
  description:
    'Замовляйте виготовлення м’яких меблів за індивідуальним дизайном у Києві ⭐ Висока якість, широкий вибір тканин та матеріалів ✅ Ідеально для вашого інтер’єру!',
  keywords: [
    'м’яких меблів під замовлення',
    'м’яких меблів під замовлення Україна',
    'м’яких меблів під замовлення Київ',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title:
      'ᐈ Виготовлення м’яких меблів під замовлення у Києві | Ексклюзивний дизайн',
    description:
      'Замовляйте виготовлення м’яких меблів за індивідуальним дизайном у Києві ⭐ Висока якість, широкий вибір тканин та матеріалів ✅ Ідеально для вашого інтер’єру!',
    url: 'https://www.mevaro.kiev.ua/image/mebli/ugl_sofa.jpg',
    siteName:
      'ᐈ Виготовлення м’яких меблів під замовлення у Києві | Ексклюзивний дизайн',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/mebli/ugl_sofa.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/mebli/ugl_sofa.jpg`,
        width: 1800,
        height: 1600,
        alt: 'заміна пружинного блока',
      },
    ],
    locale: 'ua_UA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'ᐈ Виготовлення м’яких меблів під замовлення у Києві',
};
const MebliZakaz = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <HeadZakaz />
        <SubHead />
      </div>

      <FirstSection />

      <hr className="bg-[#000] mt-[30px] h-[5px]" />
      <SecondSection />
      <hr className="bg-[#000] mt-[30px] h-[5px] mb-[30px]" />
      <Third_section />
      <SliderTkani />
      <Footer />
    </section>
  );
};
export default MebliZakaz;
