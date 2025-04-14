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
const MebliZakaz = () => {
  return (
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
  );
};
export default MebliZakaz;
