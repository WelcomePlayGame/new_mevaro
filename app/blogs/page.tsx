import Grid from '@/component/blogs/page-blogs-grid';
import Footer from '@/component/footer/page-footer';
import classes from '@/component/head/page-head.module.css';
import HeadUpdate from '@/component/head/header_update';
import { getAllBlogs as get } from '@/lib/blog';
import SubHead from '@/component/head/page-sub-head';
import type { Metadata } from 'next';
import SaleBox from '@/component/sale_box/page-sale-box';
import Crumbs from '@/component/breadcrumbs/page-crumbs';
export const metadata: Metadata = {
  title: 'ᐈКорисні Поради від Mevaro. Корисна інформація про меблі',
  description:
    'ᐈІнформаційний Блог від Mevaro – місто Київ. Цікаві факти, поради та корисна інформація про меблі, їх вибір, догляд і перетяжку.',
  keywords: ['Блог від Mevaro', 'корисна інформація про меблі', 'меблі'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈКорисні Поради від Mevaro. Корисна інформація про меблі',
    description:
      'ᐈІнформаційний Блог від Mevaro – місто Київ. Цікаві факти, поради та корисна інформація про меблі, їх вибір, догляд і перетяжку.',
    url: 'https://www.mevaro.kiev.ua/image/mebli/peretyajka.jpg',
    siteName:
      '🛠 Інформаційний Блог від Mevaro - місто Київ. Корисна інформація про меблі',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/mebli/peretyajka.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/mebli/peretyajka.jpg`,
        width: 1800,
        height: 1600,
        alt: '🛠 Інформаційний Блог від Mevaro - місто Київ. Корисна інформація про меблі',
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
    canonical: `${process.env.BASE_URL}/blogs/`,
  },
  category: 'Меваро - Блог',
};
const FabricsFetch = async () => {
  const fabrics = await get();
  return <Grid fabrics={fabrics} />;
};
const Blogs = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <HeadUpdate />
        <SubHead />
      </div>
      <div className="pt-[240px] lg:pt-[150px]  lg:pl-[50px]">
        <Crumbs
          crumbs={[
            { label: 'Перетяжка меблів', url: '/' },
            { label: 'Каталог Тканин', url: '/fabrics' },
            { label: 'Блог Mevaro' },
          ]}
        />
      </div>
      <div className=" pt-[1px] lg:pt-[1px] mb-[10px] p-[10px]">
        <FabricsFetch />
      </div>
      <SaleBox />
      <Footer />
    </section>
  );
};
export default Blogs;
