import Head from '@/component/head/page-head';
import classes from '@/component/head/page-head.module.css';
import SubHead from '@/component/head/page-sub-head';

const Fabrics = () => {
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
    </main>
  );
};
export default Fabrics;
