import Grid from '@/component/fabrics/page-fabrics-grid';
import Footer from '@/component/footer/page-footer';

import classes from '@/component/head/page-head.module.css';
import HeadUpdate from '@/component/head/header_update _tkani';
import { getAllFabrics as get } from '@/lib/fabric';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈКаталог меблевої тканини – великий вибір в Україні',
  description:
    '【Каталог меблевих тканин: широкий асортимент, різноманітні кольори та фактури.】Замовляйте якісні тканини для перетяжки меблів з доставкою по Україні!',
  keywords: [
    'каталог тканин',
    'меблеві тканин',
    'велюр',
    'замша',
    'рогожка',
    'мікровелюр',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: '🛠 Каталог меблевої тканини – великий вибір в Україні',
    description:
      'Ознайомтесь із каталогом меблевих тканин: широкий асортимент, різноманітні кольори та фактури. Замовляйте якісні тканини для перетяжки меблів з доставкою по Україні!',
    url: 'https://www.mevaro.kiev.ua/image/pere_2.jpg',
    siteName: '🛠 Каталог меблевої тканини – великий вибір в Україні',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/pere_2.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/pere_2.jpg`,
        width: 1800,
        height: 1600,
        alt: '🛠 Каталог меблевої тканини – великий вибір в Україні',
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
  alternates: {
    canonical: `${process.env.BASE_URL}/fabrics/`,
  },
  category: 'Меваро - Каталог Тканин',
};
const FabricsFetch = async () => {
  const fabrics = await get();
  return <Grid fabrics={fabrics} />;
};
const Fabrics = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <HeadUpdate />
      </div>
      <div className=" pt-[190px] lg:pt-[185px] mb-[50px] p-[10px]">
        <FabricsFetch />
      </div>
      <div className={`${classes.container_describe_fabrics}`}>
        <hr />
        <h2 className={`${classes.container_describe_fabrics_h2}`}>
          <strong>Оберіть Меблеві Тканини</strong>
        </h2>
        <p>
          Меблеві тканини є важливою складовою при виборі меблів, адже вони
          визначають не лише зовнішній вигляд, а й комфорт та довговічність
          виробу.
        </p>
        <p>
          В асортименті представлені різноманітні тканини, що відрізняються за
          кольором, текстурою та властивостями. Від велюру та жакарду до
          мікрофібри та екошкіри – кожен матеріал має свої унікальні
          характеристики: зносостійкість, легкість у догляді, стійкість до
          забруднень та вигорання.
        </p>
        <p>
          Завдяки широкому вибору ви зможете підібрати ідеальну тканину, яка
          гармонійно доповнить інтер’єр вашого дому або офісу, додасть затишку
          та стилю вашому простору.
        </p>
      </div>
      <Footer />
    </main>
  );
};
export default Fabrics;
