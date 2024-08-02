import Grid from '@/component/fabrics/page-fabrics-grid';
import Footer from '@/component/footer/page-footer';
import Head from '@/component/head/page-head';
import classes from '@/component/head/page-head.module.css';
import SubHead from '@/component/head/page-sub-head';
import { getAllFabrics as get } from '@/lib/fabric';
const FabricsFetch = async () => {
  const fabrics = await get();
  return <Grid fabrics={fabrics} />;
};
const Fabrics = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <div className=" pt-[190px] lg:pt-[185px] mb-[50px]">
        <FabricsFetch />
      </div>
      <Footer />
    </main>
  );
};
export default Fabrics;
