'use client';
import Head from 'next/head';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import Footer from '@/component/footer/page-footer';
import FirstSection from '@/component/mebli_zakaz/first_section';
import SecondSection from '@/component/mebli_zakaz/second_section';
import Third_section from '@/component/mebli_zakaz/third_section';
import SliderTkani from '@/component/mebli_zakaz/slider-tkani';
import HeadUpdate from '@/component/head/header_update_zakaz';
import MapGoogle from '@/component/map_google/page-map-google';
import Reviews from '@/component/reviews/page-reviews';
import { usePathname } from 'next/navigation';

const MebliZakaz = () => {
  const pathname = usePathname();
  const baseUrl = process.env.BASE_URL;
  const currentTitle = 'ᐈВиготовлення меблів на замовлення | Mevaro';
  const description =
    '⭐Виготовлення мʼяких меблів на замовлення у Києві та області. ✓Індивідуальний дизайн ✓Якісні матеріали ✓Гарантія 12 місяців.';

  return (
    <>
      <Head>
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${baseUrl}${pathname}`} />
        <meta
          property="og:image"
          content={`${baseUrl}/image/mebli/ugl_sofa.jpg`}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentTitle} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${baseUrl}/image/mebli/ugl_sofa.jpg`}
        />

        {/* hreflang */}
        <link
          rel="alternate"
          href={`${baseUrl}/mebli_zakaz`}
          hrefLang="uk-UA"
        />
        <link
          rel="alternate"
          href={`${baseUrl}/ru/mebli_zakaz`}
          hrefLang="ru-UA"
        />
        <link
          rel="alternate"
          href={`${baseUrl}/mebli_zakaz`}
          hrefLang="x-default"
        />

        {/* rel="nofollow" соціальні посилання */}
        <link
          rel="nofollow"
          href="https://www.instagram.com/mevaro_peretyajka"
        />
        <link
          rel="nofollow"
          href="https://www.facebook.com/www.mevaro.kiev.ua"
        />
        <link rel="nofollow" href="https://www.youtube.com/@MevaroKiev" />

        <title>{currentTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <section>
        <div className={`${classes.container_head_block}`}>
          <HeadUpdate />
          <SubHead />
        </div>

        <FirstSection />
        <hr className="bg-[#000] mt-[30px] h-[5px]" />
        <SecondSection />
        <hr className="bg-[#000] mt-[30px] h-[5px] mb-[30px]" />
        <Third_section />
        <SliderTkani />
        <Reviews />
        <MapGoogle />
        <Footer />
      </section>
    </>
  );
};

export default MebliZakaz;
