import Head from '@/component/head/page-head';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import ArmchairPage from '@/component/armchair/page-armchair';
const ArmChair = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <ArmchairPage />
      <Footer />
    </main>
  );
};
export default ArmChair;
