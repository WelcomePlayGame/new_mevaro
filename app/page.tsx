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
  return {
    alternates: {
      canonical: `${process.env.BASE_URL}`,
      languages: {
        ru: `${process.env.BASE_URL}/ru`,
      },
    },
  };
};

export default function Home() {
  return (
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
  );
}
