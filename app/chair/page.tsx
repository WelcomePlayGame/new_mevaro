import React from 'react';
import Head from '@/component/head/header_update';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';

import Chair from '@/component/chair/page-chair';

const SofaPage = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <Chair />
      <Footer />
    </main>
  );
};

export default SofaPage;
