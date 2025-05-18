import Grid from '@/component/fabrics/page-fabrics-grid';
import Footer from '@/component/footer/page-footer';
import classes from '@/component/head/page-head.module.css';
import HeadUpdate from '@/component/head/header_update';
import { getAllFabrics as get } from '@/lib/fabric';
import type { Metadata } from 'next';
import Crumbs from '@/component/breadcrumbs/page-crumbs';

export const metadata: Metadata = {
  title: '🛠 Каталог меблевої тканини|Mevaro【Широкий вибір】',
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
    title: '🛠 Каталог меблевої тканини|Mevaro【Широкий вибір】',
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
    canonical: `${process.env.BASE_URL}/fabrics`,
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
    <div>
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
    Меблеві тканини є важливою складовою при виборі меблів, адже вони визначають не лише зовнішній вигляд, а й комфорт, практичність та довговічність виробу. Саме якісна оббивка здатна перетворити звичайний диван чи крісло на справжній елемент стилю і затишку у вашому інтер’єрі.
  </p>
  <p>
    В асортименті представлені найрізноманітніші види тканин: <strong>велюр, рогожка, жаккард, мікрофібра, шеніл, флок, екошкіра</strong> тощо. Кожна з них має свої переваги – деякі краще підходять для інтенсивного щоденного використання, інші – для вишуканих дизайнерських рішень. 
  </p>
  <p>
    Важливими характеристиками тканин є <em>зносостійкість (Martindale), стійкість до вигорання, здатність відштовхувати вологу та пил, простота в догляді, гіпоалергенність</em>. Наприклад, мікрофібра та флок ідеальні для домівок із дітьми або домашніми тваринами, а велюр додає м’якості та елегантності.
  </p>
  <p>
    Для кожного типу меблів — чи то диван, крісло, стілець чи ліжко — ми допоможемо підібрати оптимальну тканину за кольором, фактурою та експлуатаційними властивостями. Ви зможете обрати варіанти як у нейтральних відтінках, так і яскраві акценти, що освіжать ваш інтер’єр.
  </p>
  <p>
    Завдяки широкому вибору, індивідуальному підходу та безкоштовній консультації з зразками тканин, ви отримаєте саме те, що найкраще підійде для вашого простору — функціонально, красиво та на роки вперед.
  </p>
</div>

      <Footer />
    </div>
  );
};

export default Fabrics;
