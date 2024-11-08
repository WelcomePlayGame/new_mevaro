import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update _blog';
import SubHead from '@/component/head/page-sub-head';
import ReplaceBlock from '@/component/replace_block/page-raplace-block';
import React from 'react';

const Block = () => {
  return (
    <section>
      <HeadUpdate />
      <SubHead />
      <ReplaceBlock />
      <Footer />
    </section>
  );
};

export default Block;
