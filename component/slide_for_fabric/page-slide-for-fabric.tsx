'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import classes from './page-slide-for-fabric.module.css';
import { getAllFabrics } from '@/lib/fabric';
import Image from 'next/image';
import Link from 'next/link';

const SlideForFabric = () => {
  const [fabrics, setFabrics] = useState([]);

  useEffect(() => {
    const fetchFabrics = async () => {
      const data = await getAllFabrics();
      setFabrics(data);
    };
    fetchFabrics();
  }, []);

  return (
    <article>
      <h3 className={`${classes.container_h3_slide}`}>
        <strong>Можливо Вас також зацікавить інші тканини?</strong>
      </h3>
      <Swiper
        spaceBetween={30}
        navigation={false}
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
          1200: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Autoplay]}
      >
        {fabrics.map((fabric, index) => (
          <SwiperSlide
            key={index}
            className={`${classes.container_swiper_slide}`}
          >
            <Link
              href={`/fabrics/${fabric.slug}`}
              className={`${classes.container_link}`}
            >
              <div className={`${classes.container_for_img}`}>
                <Image
                  src={`${process.env.URL_AWS}${fabric.images[0]}`}
                  fill
                  alt={fabric.title}
                  className={`${classes.container_img}`}
                />
              </div>
              <h4 className={`${classes.container_h4_for_slide}`}>
                {fabric.title}
              </h4>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default SlideForFabric;
