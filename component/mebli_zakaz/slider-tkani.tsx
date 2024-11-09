'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { getAllFabrics as get } from '@/lib/fabric';
import classes from './mebli.module.css';
const SliderTkani = () => {
  const [fabric, setFabrics] = useState([]);
  useEffect(() => {
    const fetchFabrics = async () => {
      try {
        const fetchedFabrics = await get();
        setFabrics(fetchedFabrics);
      } catch (error) {
        console.error('Error fetching fabrics:', error);
      }
    };

    fetchFabrics();
  }, []);
  return (
    <section>
      <div className="flex flex-col items-center">
        <h5 className={`${classes.container_h5}`}>
          Які тканини використовуються?
        </h5>
      </div>
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
        }}
        modules={[Navigation, Autoplay]}
        className={``}
        // style={{ height: '80vh' }}
      >
        {fabric.map((fabric, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <a href={`/fabrics/${fabric.slug}`}>
                <img
                  src={`${process.env.URL_AWS}${fabric.images[0]}`}
                  alt={fabric.title}
                  className={`${classes.container_slide}`}
                />
              </a>
              <span className={`${classes.container_span}`}>
                {fabric.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-center">
        <hr className="bg-[#000] mt-[30px] h-[5px] w-[300px] lg:w-[500px] mb-[50px]" />
      </div>
    </section>
  );
};

export default SliderTkani;
