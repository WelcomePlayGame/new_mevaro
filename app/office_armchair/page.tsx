import Head from '@/component/head/page-head';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import OfficeArmChair from '@/component/office_armchair/page-office_armchair';
const Office = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <OfficeArmChair />
      <Footer />
    </main>
  );
};
export default Office;
