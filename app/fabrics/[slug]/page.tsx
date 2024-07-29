import Crumbs from '@/component/breadcrumbs/page-crumbs';
import Delivery from '@/component/delivery_tkan_svg/page-delivery';
import AboutUs from '@/component/delivery_tkan_svg/page-we';
import Footer from '@/component/footer/page-footer';
import Head from '@/component/head/page-head';
import classes from '@/component/head/page-head.module.css';
import SubHead from '@/component/head/page-sub-head';
import SliderProduct from '@/component/slider_main_page/page-slide-product';
import { getFabricBySlug as get } from '@/lib/fabric';
export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const fabric = await get(params?.slug);
  return {
    title: fabric.seo_title,
    description: fabric.seo_description,
  };
};
const Fabric = async ({ params }: { params: { slug: string } }) => {
  const fabric = await get(params.slug);
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
        <section className="flex flex-col p-[50px]">
          <div className="flex  lg:justify-center p-[20px]   space-x-20">
            <div className="flex flex-col items-start">
              <div>
                <Crumbs
                  crumbs={[
                    { label: 'Головна', url: '/' },
                    { label: 'Список меблевих тканин', url: '/fabrics' },
                    { label: `тканина ${fabric.title}` },
                  ]}
                />
              </div>
              <div className="pt-[30px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
                <SliderProduct imgArray={fabric.images} />
                <span className="mt-[7px]">
                  *Передача кольору може бути спотворена пристроєм
                </span>
              </div>
            </div>
            <div
              className="flex flex-col items-center mt-[30px] p-[15px]"
              style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
            >
              <div className={`${classes.container_div}`}>
                <h2 className="text-[1.4rem] uppercase">{fabric?.title}</h2>
              </div>
              <div className="">
                <ul>
                  <li>
                    Склад {fabric.title}: {fabric.compound}
                  </li>
                  <li>
                    Щільність {fabric.title}: {fabric.density}
                  </li>
                  <li>
                    Стійкість до зносу {fabric.title} : {fabric.resistance}
                  </li>
                  {fabric.isChecked && (
                    <li>Перевага {fabric.title} : Антикіготь</li>
                  )}
                </ul>
              </div>
              <hr className={`${classes.hr_style}`} />
              <div className="flex flex-col">
                <span className="m-[5px]">
                  від 10 пог.м - 105.49 грн./пог.м{' '}
                  <span className="bg-[red] text-[#fff] p-[2px]">
                    знижка -5%
                  </span>
                </span>
                <span className="m-[5px]">
                  від 20 пог.м - 78.14 грн./пог.м{' '}
                  <span className="bg-[red] text-[#fff] p-[2px]">
                    знижка -10%
                  </span>{' '}
                </span>
              </div>
              <div className="">
                <span className="text-[2.5rem] text-[red] font-bold">600</span>{' '}
                грн./пог.м
              </div>
              <hr className={`${classes.hr_style}`} />
              <div>
                <a className="bg-[#000] text-[#fff] p-[10px] rounded w-[200px] h-[50px] block text-center text-[1.5rem] mt-[10px]">
                  Купити
                </a>
              </div>
            </div>
            <div className="flex flex-col  items-start">
              <div className="flex flex-col">
                <h3 className="flex justify-normal items-center text-[1.5rem] space-x-10">
                  <Delivery />
                  Швидка доставка
                </h3>
                <ul className="list-disc">
                  <li className="text-[1.2rem]">Нова Пошта</li>
                  <li className="text-[1.2rem]">Делівері</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="flex justify-normal items-center text-[1.5rem] space-x-10">
                  <AboutUs /> Чому ми?
                </h3>
                <ul className="list-disc">
                  <li className="text-[1.2rem]">
                    10 років працюємо з тканинами
                  </li>
                  <li className="text-[1.2rem]">
                    якісні тканини перевірені часом
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Fabric;
