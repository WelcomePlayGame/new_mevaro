import React from 'react';
import HeadUpdate from '@/component/head/header_update_sofa_ru';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import Sofa from '@/component/sofa/page-sofa_ru';

const SofaPage = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <HeadUpdate />
        <SubHead />
      </div>
      <Sofa />
      <Footer />
    </section>
  );
};

export default SofaPage;
