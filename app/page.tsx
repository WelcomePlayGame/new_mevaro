import Head from 'next/head';
import { usePathname } from 'next/navigation';

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

export const generateMetadata = async () => {
  const baseUrl = process.env.BASE_URL;

  return {
    title: 'ᐈПеретяжка меблів|Mevaro【Безкоштовна Доставка】',
    description:
      '⭐Перетяжка меблів у Києві. Доступні ціни✓【ШИРОКИЙ ВИБІР ТКАНИН】✓Гарантія 12 місяців✓Офіційний договір✓Якісне виконання в термін.',
    alternates: {
      canonical: baseUrl,
      languages: {
        'uk-UA': baseUrl,
        'ru-RU': `${baseUrl}/ru`,
      },
    },
    openGraph: {
      title: 'ᐈПеретяжка меблів|Mevaro【Безкоштовна Доставка】',
      description:
        '⭐Перетяжка меблів у Києві. Доступні ціни✓【ШИРОКИЙ ВИБІР ТКАНИН】✓Гарантія 12 місяців✓Офіційний договір✓Якісне виконання в термін.',
      url: baseUrl,
      type: 'website',
      siteName: 'Mevaro',
      images: [
        {
          url: `${baseUrl}/image/peretyajka_600_600.jpg`,
          width: 1200,
          height: 630,
          alt: 'Перетяжка меблів Mevaro',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ᐈПеретяжка меблів|Mevaro【Безкоштовна Доставка】',
      description:
        '⭐Перетяжка меблів у Києві. Доступні ціни✓【ШИРОКИЙ ВИБІР ТКАНИН】✓Гарантія 12 місяців✓Офіційний договір✓Якісне виконання в термін.',
      images: [`${baseUrl}/image/peretyajka_600_600.jpg`],
    },
    other: {
      robots: 'index, follow',
    },
  };
};

export default function Home() {
  const pathname = usePathname();
  const baseUrl = 'https://mevaro.kiev.ua';
  const currentTitle = 'ᐈПеретяжка меблів|Mevaro【Безкоштовна Доставка】';
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
