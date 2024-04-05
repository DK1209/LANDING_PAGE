import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const CarouselData = [
    {
      image: "/Images/carousel1.svg",
      title: "Video Dubbing"
    },
    {
      image: "/Images/carousel2.svg",
      title: "Audio Dubbing"
    },
    {
      image: "/Images/carousel3.svg",
      title: "Translation"
    },
    {
      image: "/Images/carousel4.svg",
      title: "Text to Speech"
    },
    {
      image: "/Images/carousel5.svg",
      title: "Translation"
    },

  ];

const CarouselSlider = () => {
    return (
        <div className="h-[50%] w-full sm:h-[15rem] flex flex-wrap mx-auto">
          <Swiper
            navigation
            breakpoints={{
              330: {
                slidesPerView: 1.3
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
  
            spaceBetween={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper  "
          >
            {
              CarouselData.map((item, index) => (
                <SwiperSlide key={index}>
                  <span className="flex flex-col justify-center items-center mx-auto">
                    <img src={item.image} className="sm:h-[18rem] sm:w-[25rem] h-[9rem] xl:h-[16rem] xl:w-[18rem] 2xl:w-[25rem]  w-full" />
                    <h1 className="text-center text-sm sm:text-xl">{item.title}</h1>
                  </span>
                </SwiperSlide>
              ))
            }
  
          </Swiper>
        </div>
      );
}

export default CarouselSlider