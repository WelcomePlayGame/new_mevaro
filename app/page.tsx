import Head from 'next/head';

import SubHead from '@/component/head/page-sub-head';
import Footer from '@/component/footer/page-footer';
import MapGoogle from '@/component/map_google/page-map-google';
import HeadUpdate from '@/component/head/header_update';
import VideoSection from '@/component/video_section/page-video-section';
import TypeWorks from '@/component/type_works/page-type-works';
import FaqPage from '@/component/faq/page-faq';
import Tringle from '@/component/tringle/page-tringle';
import WorkLocation from '@/component/work_location/page-work-location';
import Reviews from '@/component/reviews/page-reviews';
export const metadata = {
  title: 'ᐈПеретяжка меблів|Mevaro【Безкоштовна Доставка】Київ',
  description:
    '⭐️Замов Консультацію Київ|Перетяжка меблів. Доступні ціни✓【ШИРОКИЙ ВИБІР ТКАНИН✓Гарантія 12 місяців✓Офіційний договір✓Чекаємо фото виробу Viber | Telegram.',
  alternates: {
    canonical: 'https://mevaro.kiev.ua',
    languages: {
      'uk-UA': 'https://mevaro.kiev.ua',
      'ru-UA': 'https://mevaro.kiev.ua/ru',
      'x-default': 'https://mevaro.kiev.ua',
    },
  },
  openGraph: {
    title: 'ᐈПеретяжка меблів|Mevaro【Безкоштовна Доставка】Київ',
    description:
      '⭐Перетяжка меблів у Києві. Доступні ціни✓【ШИРОКИЙ ВИБІР ТКАНИН】✓Гарантія 12 місяців✓Офіційний договір✓Якісне виконання в термін.',
    url: 'https://mevaro.kiev.ua',
    type: 'website',
    images: [
      {
        url: 'https://mevaro.kiev.ua/logo/logo.png',
        width: 800,
        height: 600,
        alt: 'Mevaro - перетяжка меблів',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ᐈПеретяжка меблів|Mevaro【Безкоштовна Доставка】Київ',
    description:
      '⭐Перетяжка меблів у Києві. Доступні ціни✓【ШИРОКИЙ ВИБІР ТКАНИН】✓Гарантія 12 місяців✓Офіційний договір✓Якісне виконання в термін.',
    images: ['https://mevaro.kiev.ua/logo/logo.png'],
  },
};

export default function Home() {
  const pathname = '';
  const baseUrl = 'https://mevaro.kiev.ua';
  const currentTitle = 'ᐈПеретяжка меблів|Mevaro【Безкоштовна Доставка】Київ';
  const description =
    '⭐Перетяжка меблів у Києві. Доступні ціни✓【ШИРОКИЙ ВИБІР ТКАНИН】✓Гарантія 12 місяців✓Офіційний договір✓Якісне виконання в термін.';

  return (
    <>
      <Head>
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${baseUrl}${pathname}`} />
        <meta property="og:image" content={`${baseUrl}/logo/logo.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}/logo/logo.png`} />

        {/* hreflang */}
        <link rel="alternate" href={baseUrl} hrefLang="uk-UA" />
        <link rel="alternate" href={`${baseUrl}/ru`} hrefLang="ru-UA" />
        <link rel="alternate" href={baseUrl} hrefLang="x-default" />

        {/* rel="nofollow" приклад */}
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
        <HeadUpdate />
        <SubHead />
        <VideoSection />
        <TypeWorks />
        <Tringle />
        <FaqPage />
        <Reviews />
        <WorkLocation />
        <MapGoogle />
        <Footer />
      </section>
    </>
  );
}
