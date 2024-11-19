import MakePillow from '@/component/make_pillows/page-make-pillows';
import React from 'react';
import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update';
import SubHead from '@/component/head/page-sub-head';

const Pillow = () => {
  return (
    <section>
      <HeadUpdate />
      <SubHead />
      <MakePillow />
      <Footer />
    </section>
  );
};

export default Pillow;
