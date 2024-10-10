import Grid from '@/component/blogs/page-blogs-grid';
import Footer from '@/component/footer/page-footer';
import Head from '@/component/head/page-head';
import classes from '@/component/head/page-head.module.css';
import SubHead from '@/component/head/page-sub-header-tkani';
import { getAllBlogs as get } from '@/lib/blog';
const FabricsFetch = async () => {
  const fabrics = await get();
  return <Grid fabrics={fabrics} />;
};
const Blogs = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <div className=" pt-[190px] lg:pt-[185px] mb-[50px] p-[10px]">
        <FabricsFetch />
      </div>
      <Footer />
    </main>
  );
};
export default Blogs;
