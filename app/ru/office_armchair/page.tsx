import Head from '@/component/head/header_update_office_armchair_ru';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import OfficeArmChair from '@/component/office_armchair/page-office_armchair_ru';

const Office = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <OfficeArmChair />
      <Footer />
    </section>
  );
};
export default Office;
