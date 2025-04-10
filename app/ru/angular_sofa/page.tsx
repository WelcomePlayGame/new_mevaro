import AngularSofaRU from '@/component/angular_sofa/page-angular_ru';
import Footer from '@/component/footer/page-footer_ru';
import Head from '@/component/head/header_update';

Head;
const Angular_Sofa = () => {
  return (
    <section>
      <Head />
      <AngularSofaRU />
      <Footer />
    </section>
  );
};
export default Angular_Sofa;
