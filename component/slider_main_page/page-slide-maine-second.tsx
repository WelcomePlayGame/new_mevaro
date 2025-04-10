'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import classes from './page-slider.module.css';

const Slider = () => {
  const imgArray = [
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.mevaro.kiev.ua%2Fposts%2Fpfbid0REqUsmGfJXTPRz6ohpka2bRZ58CK37mphnFhxKNbwxHG2S5iBevnEHQDQB35aDwcl&show_text=false&width=500" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.mevaro.kiev.ua%2Fposts%2Fpfbid033jexJrQ6TiCeJRCSxZnA4VkrBvJarFhkh2atS2LixYDyaGAvH672ZRca7TwFP84Jl&show_text=false&width=500" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.mevaro.kiev.ua%2Fposts%2Fpfbid07tTxLBPUNuyJ2SUwysnf98aHdc81e5Zkk6aPKgbFjofPgduzP8jXrezVVuSaVHwFl&show_text=false&width=500" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
  ];

  return (
    <main>
      <h2 className={`${classes.element_h2} text-center underline mb-[30px]`}>
        Роботи від Mevaro
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
        modules={[Navigation, Autoplay]}
        className={``}
        style={{ height: '80vh' }}
      >
        {imgArray.map((iframeContent, index) => (
          <SwiperSlide key={index} style={{ height: '100%', padding: '10px' }}>
            <div
              className={`${classes.container_div}`}
              style={{ height: '100%' }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: iframeContent }}
                style={{ height: '100%' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Slider;
