import Crumbs from '@/component/breadcrumbs/page-crumbs';
import AddComment from '@/component/comment/page-add-comment';

import Footer from '@/component/footer/page-footer';

import classes from '@/component/head/page-head.module.css';

import ButtonCart from '@/component/modal_cart/button_cart';
import SaleBox from '@/component/sale_box/page-sale-box';
import SlideForFabric from '@/component/slide_for_fabric/page-slide-for-fabric';
import SliderProduct from '@/component/slider_main_page/page-slide-product';
import VideoPlayer from '@/component/video_player/page-video-player';
import { getFabricBySlug as get } from '@/lib/fabric';
import Link from 'next/link';
import HeadUpdate from '@/component/head/header_update _tkani';
export const generateMetadata = async ({ params }) => {
  const fabric = await get(params?.slug);
  return {
    title: fabric?.seo_title,
    description: fabric?.seo_description,
  };
};

const Fabric = async ({ params }) => {
  const fabric = await get(params.slug);
  const embed_url = fabric?.url_video.replace(
    'youtube.com/shorts/',
    'youtube.com/embed/'
  );
  const createMarkup = (html) => ({ __html: html });
  const discount10 = fabric.price * 0.9 * Number(process.env.DOLLAR_RATE);
  const discount5 = fabric.price * 0.95 * Number(process.env.DOLLAR_RATE);

  return (
    <main>
      <div className={`${classes.container_head_block}`}>
        <HeadUpdate />
      </div>
      <div className="pt-[190px] lg:pt-[185px]">
        <section className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-center p-[20px] lg:space-x-20">
            {/* Product Information Section */}
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
            {/* Product Details and Pricing Section */}
            <div
              className={`${classes.container_price} flex flex-col items-center mt-[190px] lg:mt-[20px] lg:p-[15px]`}
              style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
            >
              <div className={`${classes.container_div}`}>
                <h2 className={`${classes.container_h2_fabric} uppercase`}>
                  {fabric?.title}
                </h2>
              </div>
              <div>
                <ol className={`${classes.list_characteristics}`}>
                  <li>
                    Склад {fabric.title}: {fabric.compound}
                  </li>
                  <li>
                    Щільність {fabric.title}: {fabric.density}
                  </li>
                  <li>
                    Стійкість до зносу {fabric.title}: {fabric.resistance}
                  </li>
                  {fabric.isChecked && (
                    <li>Перевага {fabric.title}: Антикіготь</li>
                  )}
                </ol>
              </div>
              <hr className={`${classes.hr_style}`} />
              <div className="flex flex-col text-[14px] pt-[30px]">
                <span className={`${classes.container_span_sell} m-[5px]`}>
                  від 10 пог.м - {discount5.toFixed(2)} грн./пог.м знижка{' '}
                  <span className={`${classes.container_span_sell_bellow} `}>
                    5%
                  </span>
                </span>
                <span className={`${classes.container_span_sell} m-[5px]`}>
                  від 20 пог.м - {discount10.toFixed(2)} грн./пог.м знижка {``}
                  <span className={`${classes.container_span_sell_bellow} `}>
                    10%
                  </span>
                </span>
              </div>
              <div>
                <span className="text-[2.5rem] text-[red] font-bold strong">
                  <strong>
                    {fabric.price * Number(process.env.DOLLAR_RATE)}
                  </strong>
                </span>{' '}
                грн./пог.м
              </div>
              <hr className={`${classes.hr_style}`} />
              <ButtonCart
                price={fabric.price}
                title={fabric.title}
                discount10={discount10}
                discount5={discount5}
                url={fabric.images[0]}
              />
            </div>
            {/* Additional Information Section */}
            <div
              className={`${classes.container_info_full} flex flex-col items-start mt-[30px]`}
            >
              <div className={`${classes.container_info} flex flex-col`}>
                <div>
                  <h3 className="flex justify-normal items-center text-[1.5rem] space-x-10 gap-[20px]">
                    🚐 Швидка доставка
                  </h3>
                  <ul className="list-disc list-inside p-[10px]">
                    <li className="text-[1.2rem]">Нова Пошта</li>
                    <li className="text-[1.2rem]">Делівері</li>
                  </ul>
                </div>
                <div className={` flex flex-col`}>
                  <h3 className="flex justify-normal items-center text-[1.5rem] space-x-10 gap-[20px]">
                    📣 Чому ми?
                  </h3>
                  <ul className="list-disc list-inside p-[10xp]">
                    <li className="text-[1.2rem]">
                      10 років працюємо з тканинами
                    </li>
                    <li className="text-[1.2rem]">
                      якісні тканини перевірені часом
                    </li>
                  </ul>
                </div>
              </div>
              <hr className={`${classes.hr_style}`} />
              {embed_url && <VideoPlayer embed_url={embed_url} />}
              <div>
                <Link href={`#reviews`} className={`${classes.link_reviews}`}>
                  переглянути або додати відгук(и)
                </Link>
              </div>
            </div>

            <SaleBox />
          </div>
        </section>
        <section className="p-[30px]">
          <div
            dangerouslySetInnerHTML={createMarkup(fabric.content)}
            className={`${classes.container_content} break-words leading-6 `}
          />
        </section>
        <AddComment />
        <SlideForFabric />
        <Footer />

        {/* JSON-LD Markup for Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              name: fabric.title,
              image: fabric.images[0],
              description: fabric.content,
              brand: {
                '@type': 'Brand',
                name: 'Mevaro',
              },
              offers: {
                '@type': 'Offer',
                url: `https://www.mevaro.kiev.ua/fabrics/${params.slug}`,
                priceCurrency: 'UAH',
                price: (fabric.price * Number(process.env.DOLLAR_RATE)).toFixed(
                  2
                ),
                priceValidUntil: '2025-01-01',
                itemCondition: 'https://schema.org/NewCondition',
                availability: 'https://schema.org/InStock',
                hasMerchantReturnPolicy: {
                  '@type': 'MerchantReturnPolicy',
                  url: 'https://www.mevaro.kiev.ua/return-policy',
                },
                shippingDetails: {
                  '@type': 'OfferShippingDetails',
                  shippingRate: {
                    '@type': 'MonetaryAmount',
                    value: '100.00',
                    currency: 'UAH',
                  },
                  deliveryTime: {
                    '@type': 'ShippingDeliveryTime',
                    handlingTime: {
                      '@type': 'QuantitativeValue',
                      minValue: 2,
                      maxValue: 3,
                      unitCode: 'DAY',
                    },
                    transitTime: {
                      '@type': 'QuantitativeValue',
                      minValue: 3,
                      maxValue: 5,
                      unitCode: 'DAY',
                    },
                  },
                },
              },
            }),
          }}
        />
      </div>
    </main>
  );
};

export default Fabric;
