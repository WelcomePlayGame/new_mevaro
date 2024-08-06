import HeadZakaz from '@/component/head/page-head-mebli-zakaz';
import SubHead from '@/component/head/page-sub-head-zakaz';
import classes from '@/component/head/page-head.module.css';
import Footer from '@/component/footer/page-footer';
import FirstSection from '@/component/mebli_zakaz/first_section';
import SecondSection from '@/component/mebli_zakaz/second_section';
const MebliZakaz = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <HeadZakaz />
        <SubHead />
      </div>
      <FirstSection />
      <SecondSection />
    </main>
  );
};
export default MebliZakaz;
