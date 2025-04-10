import React from 'react';
import Head from '@/component/head/header_update';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import Lijko from '@/component/lijko/page-lijko';

const SofaPage = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <Lijko />
      <Footer />
    </section>
  );
};

export default SofaPage;
