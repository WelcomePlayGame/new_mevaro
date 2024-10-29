import Grid from '@/component/fabrics/page-fabrics-grid';
import Footer from '@/component/footer/page-footer';
import Head from '@/component/head/page-head';
import classes from '@/component/head/page-head.module.css';
import SubHead from '@/component/head/page-sub-header-tkani';
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
      <div className=" pt-[190px] lg:pt-[185px] mb-[50px] p-[10px]">
        <FabricsFetch />
      </div>
      <div className={`${classes.container_describe_fabrics}`}>
        <hr />
        <h2 className={`${classes.container_describe_fabrics_h2}`}>
          <strong>Оберіть Меблеві Тканини</strong>
        </h2>
        <p>
          Меблеві тканини є важливою складовою при виборі меблів, адже вони
          визначають не лише зовнішній вигляд, а й комфорт та довговічність
          виробу.
        </p>
        <p>
          В асортименті представлені різноманітні тканини, що відрізняються за
          кольором, текстурою та властивостями. Від велюру та жакарду до
          мікрофібри та екошкіри – кожен матеріал має свої унікальні
          характеристики: зносостійкість, легкість у догляді, стійкість до
          забруднень та вигорання.
        </p>
        <p>
          Завдяки широкому вибору ви зможете підібрати ідеальну тканину, яка
          гармонійно доповнить інтер’єр вашого дому або офісу, додасть затишку
          та стилю вашому простору.
        </p>
      </div>
      <Footer />
    </main>
  );
};
export default Fabrics;
