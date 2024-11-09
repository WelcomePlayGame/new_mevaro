import Grid from '@/component/blogs/page-blogs-grid';
import Footer from '@/component/footer/page-footer';

import classes from '@/component/head/page-head.module.css';
import HeadUpdate from '@/component/head/header_update _blog';
import { getAllBlogs as get } from '@/lib/blog';
import SubHead from '@/component/head/page-sub-head';
const FabricsFetch = async () => {
  const fabrics = await get();
  return <Grid fabrics={fabrics} />;
};
const Blogs = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <HeadUpdate />
        <SubHead />
      </div>
      <div className=" pt-[190px] lg:pt-[185px] mb-[50px] p-[10px]">
        <FabricsFetch />
      </div>
      <Footer />
    </section>
  );
};
export default Blogs;
