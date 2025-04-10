import SubHead from '@/component/head/page-sub-head';
import Footer from '@/component/footer/page-footer_ru';
import MapGoogle from '@/component/map_google/page-map-google_ru';

import HeadUpdate from '@/component/head/header_update_ru';
import VideoSection from '@/component/video_section/page-video-section';
import TypeWorks from '@/component/type_works/page-type-works_ru';
import FaqPage from '@/component/faq/page-faq_ru';
import Tringle from '@/component/tringle/page-tringle';
import WorkLocation from '@/component/work_location/page-work-location_ru';
export const generateMetadata = async () => {
  return {
    alternates: {
      canonical: `${process.env.BASE_URL}/ru`,
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
      <WorkLocation />
      <MapGoogle />
      <Footer />
    </section>
  );
}
