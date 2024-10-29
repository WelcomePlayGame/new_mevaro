'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import classes from './page-slider.module.css';
import { useState } from 'react';
import ZoomImage from '../zoom/ZoomImageProps';

const SliderProduct = ({ imgArray }: { imgArray: any[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const changeUrl = (url: string) => {
    const extension = url.split('.').pop();
    let updateUrl = url.replace(`.${extension}`, '');
    updateUrl = updateUrl.replace(/-/g, ' ');
    return <span className={`${classes.element_span}`}>{updateUrl}</span>;
  };

  return (
    <main>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {imgArray.map((url, index) => (
          <SwiperSlide key={index}>
            <div className={`${classes.container_div} w-[600px] h-[300px]`}>
              <ZoomImage src={`${process.env.URL_AWS}${url}`} alt={url} />
            </div>
            <div className={`${classes.container_element_span}`}>
              {changeUrl(url)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${classes.container_miniSlider}`}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className=""
        >
          {imgArray.map((url, index) => (
            <SwiperSlide key={`${index}_second_slider`}>
              <div className={classes.thumbnail}>
                <Image
                  src={`${process.env.URL_AWS}${url}`}
                  width={100}
                  height={100}
                  alt={url}
                  className="rounded "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default SliderProduct;
