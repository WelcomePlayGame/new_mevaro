import Footer from '@/component/footer/page-footer';
import Head from '@/component/head/page-head';
import classes from '@/component/head/page-head.module.css';
import SubHead from '@/component/head/page-sub-head';
import { getFabricBySlug as get } from '@/lib/fabric';
export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const fabric = await get(params?.slug);
  return {
    title: fabric.title,
    description: fabric.description,
  };
};
const Fabric = async ({ params }: { params: { slug: string } }) => {
  const fabric = await get(params.slug);
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
        <div className={`${classes.container_div}`}>{fabric?.title}</div>;
        <Footer />
      </div>
    </main>
  );
};

export default Fabric;
