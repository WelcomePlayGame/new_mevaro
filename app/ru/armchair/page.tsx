import Head from '@/component/head/header_update_armchair_ru';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import ArmchairPage from '@/component/armchair/page-armchair_ru';

const ArmChair = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <ArmchairPage />
      <Footer />
    </section>
  );
};
export default ArmChair;