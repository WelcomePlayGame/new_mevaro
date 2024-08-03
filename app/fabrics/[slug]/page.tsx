import Crumbs from '@/component/breadcrumbs/page-crumbs';
import Delivery from '@/component/delivery_tkan_svg/page-delivery';
import AboutUs from '@/component/delivery_tkan_svg/page-we';
import Footer from '@/component/footer/page-footer';
import Head from '@/component/head/page-head';
import classes from '@/component/head/page-head.module.css';
import SubHead from '@/component/head/page-sub-head';
import ButtonCart from '@/component/modal_cart/button_cart';
import SliderProduct from '@/component/slider_main_page/page-slide-product';
import { getFabricBySlug as get } from '@/lib/fabric';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const fabric = await get(params?.slug);
  return {
    title: fabric?.seo_title,
    description: fabric?.seo_description,
  };
};
const Fabric = async ({ params }: { params: { slug: string } }) => {
  const fabric = await get(params.slug);
  const embed_url = fabric?.url_video.replace(
    'youtube.com/shorts/',
    'youtube.com/embed/'
  );
  const createMarkup = (html: any) => ({ __html: html });
  const discount10 = fabric.price * 0.9 * Number(process.env.DOLLAR_RATE);
  const discount5 = fabric.price * 0.95 * Number(process.env.DOLLAR_RATE);
  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <div className={`pt-[190px] lg:pt-[185px]`}>
        <section className="flex flex-col ">
          <div className="flex flex-col lg:flex-row lg:justify-center p-[20px] lg:space-x-20">
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
              className="flex flex-col items-center mt-[50px] lg:p-[15px]"
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
                  від 10 пог.м - {discount5.toFixed(2)} грн./пог.м{' '}
                  <span className="bg-[red] text-[#fff] p-[2px]">
                    знижка -5%
                  </span>
                </span>
                <span className="m-[5px]">
                  від 20 пог.м - {discount10.toFixed(2)} грн./пог.м{' '}
                  <span className="bg-[red] text-[#fff] p-[2px]">
                    знижка -10%
                  </span>{' '}
                </span>
              </div>
              <div className="">
                <span className="text-[2.5rem] text-[red] font-bold">
                  {fabric.price * Number(process.env.DOLLAR_RATE)}
                </span>{' '}
                грн./пог.м
              </div>
              <hr className={`${classes.hr_style}`} />
              <div>
                <ButtonCart
                  price={fabric.price}
                  title={fabric.title}
                  discount10={discount10}
                  discount5={discount5}
                  url={fabric.images[0]}
                />
              </div>
            </div>
            <div className="flex flex-col  items-start mt-[30px]">
              <div className="flex flex-col">
                <h3 className="flex justify-normal items-center text-[1.5rem] space-x-10">
                  <Delivery />
                  Швидка доставка
                </h3>
                <ul className="list-disc list-inside p-[10px]">
                  <li className="text-[1.2rem]">Нова Пошта</li>
                  <li className="text-[1.2rem]">Делівері</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="flex justify-normal items-center text-[1.5rem] space-x-10">
                  <AboutUs /> Чому ми?
                </h3>
                <ul className="list-disc list-inside p-[10xp]">
                  <li className="text-[1.2rem] ">
                    10 років працюємо з тканинами
                  </li>
                  <li className="text-[1.2rem]">
                    якісні тканини перевірені часом
                  </li>
                </ul>
              </div>
              <hr className={`${classes.hr_style}`} />
              <div className="mt-[15px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={embed_url}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="p-[30px]">
          <div
            dangerouslySetInnerHTML={createMarkup(fabric.content)}
            className="break-words text-[1.1rem] leading-6 list-disc "
          />
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Fabric;
