import Grid from '@/component/fabrics/page-fabrics-grid';
import Footer from '@/component/footer/page-footer';
import classes from '@/component/head/page-head.module.css';
import HeadUpdate from '@/component/head/header_update';
import { getAllFabrics as get } from '@/lib/fabric';
import type { Metadata } from 'next';
import Crumbs from '@/component/breadcrumbs/page-crumbs';

export const metadata: Metadata = {
  title: 'ᐈКаталог меблевої тканини✓Великий вибір в Україні',
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

  // Генеруємо JSON-LD offers на основі fabrics
  const offers = fabrics.map((fabric: { slug: string; price: number }) => ({
    '@context': 'https://schema.org',
    '@type': 'Offer',
    url: `${process.env.BASE_URL}/fabrics/${fabric.slug}`,
    priceCurrency: 'UAH',
    price: fabric.price.toFixed(2),
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Mevaro',
    },
  }));

  return (
    <>
      <Grid fabrics={fabrics} />
      {offers.map((offer, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(offer),
          }}
        />
      ))}
    </>
  );
};

const Fabrics = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <HeadUpdate />
      </div>
      <div className="pt-[150px] lg:pt-[150px] lg:pl-[50px]">
        <Crumbs
          crumbs={[
            { label: 'Перетяжка меблів', url: '/' },
            { label: 'Каталог тканин' },
          ]}
        />
      </div>
      <div className=" pt-[10px] lg:pt-[10px] mb-[30px] p-[10px]">
        <FabricsFetch />
      </div>
      <div className={`${classes.container_describe_fabrics}`}>
        <hr />
        <h2 className={`${classes.container_describe_fabrics_h2}`}>
          <strong>Тканина для меблів</strong>
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
