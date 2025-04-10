'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import classes from './page-slider.module.css';
const Slider = () => {
  const imgArray = [
    '/image/slider_main/1.jpg',
    '/image/slider_main/2.jpg',
    '/image/slider_main/3.jpg',
    '/image/slider_main/4.jpg',
    '/image/slider_main/5.jpg',
  ];
  return (
    <main>
      <h2 className={`${classes.element_h2} text-center  underline`}>
        Перетяжка &quot;До&quot; та &quot;Після&quot;
      </h2>
      <Swiper
        spaceBetween={30}
        navigation={false} // Включите навигацию, если необходимо
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Autoplay]} // Уберите EffectFade
        className={``}
      >
        {imgArray.map((url, index) => (
          <SwiperSlide key={index}>
            <div className={`${classes.container_div}`}>
              <Image src={url} width={600} height={600} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};
export default Slider;
