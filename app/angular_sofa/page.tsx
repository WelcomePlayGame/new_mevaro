import React from 'react';
import Head from '@/component/head/header_update';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import AngularSofa from '@/component/angular_sofa/page-angular';

const AngularSofaPage = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <AngularSofa />
      <Footer />
    </section>
  );
};

export default AngularSofaPage;
