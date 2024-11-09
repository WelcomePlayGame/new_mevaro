import Head from '@/component/head/header_update';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import OfficeArmChair from '@/component/office_armchair/page-office_armchair';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '🛠 Перетяжка Офісного Крісла місто Київ Меваро | Безкоштовна Доставка',
  description:
    '🚚 Безкоштовна Доставка по місту Київ. Широкий вибір мебельної тканини для оббивки меблів.',
  keywords: [
    'перетяжка офісного крісла',
    'ремон офісного крісла Київ',
    'оббивка офісного крісла',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title:
      '🛠 Перетяжка офісного Крісла місто Київ Меваро | Безкоштовна Доставка',
    description:
      '🚚 Безкоштовна Доставка по місту Київ. Широкий вибір мебельної тканини для оббивки меблів.',
    url: 'https://www.mevaro.kiev.ua/image/armchair.jpg',
    siteName: '🛠 Перетяжка офісного крісла місто Київ Меваро',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/office_armchair.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/office_armchair.jpg`,
        width: 1800,
        height: 1600,
        alt: 'перетяжка меблів',
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

  category: 'Меблі Україна',
};
const Office = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <OfficeArmChair />
      <Footer />
    </section>
  );
};
export default Office;
