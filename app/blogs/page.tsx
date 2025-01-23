import Grid from '@/component/blogs/page-blogs-grid';
import Footer from '@/component/footer/page-footer';
import classes from '@/component/head/page-head.module.css';
import HeadUpdate from '@/component/head/header_update';
import { getAllBlogs as get } from '@/lib/blog';
import SubHead from '@/component/head/page-sub-head';
import type { Metadata } from 'next';
import SaleBox from '@/component/sale_box/page-sale-box';
export const metadata: Metadata = {
  title:
    'ᐈІнформаційний Блог від Mevaro - місто Київ. Корисна інформація про меблі',
  description:
    '【Корисна інформація в світі меблів. Читайте у нас на порталі】',
  keywords: ['Блог від Mevaro', 'корисна інформація про меблі', 'меблі'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title:
      '🛠 Інформаційний Блог від Mevaro - місто Київ. Корисна інформація про меблі',
    description:
      '🚚 Корисна інформація в світі меблів. Читайте у нас на порталі',
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
      <div className=" pt-[190px] lg:pt-[185px] mb-[50px] p-[10px]">
        <FabricsFetch />
      </div>
      <SaleBox />
      <Footer />
    </section>
  );
};
export default Blogs;
