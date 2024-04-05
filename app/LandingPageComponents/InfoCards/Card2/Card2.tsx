import React, { useRef, useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

const languageData = [
    {
      image: "/Images/India (IN).svg",
      title: "Hindi"
    },
    {
      image: "/Images/Italy (IT).svg",
      title: "Italian"
    },
    {
      image: "/Images/South Korea (KR).svg",
      title: "Korean"
    },
    {
      image: "/Images/Saudi Arabia (SA).svg",
      title: "Arabian"
    },
    {
      image: "/Images/India (IN).svg",
      title: "Hindi"
    },
    {
      image: "/Images/Italy (IT).svg",
      title: "Italian"
    },
    {
      image: "/Images/South Korea (KR).svg",
      title: "Korean"
    },
    {
      image: "/Images/Saudi Arabia (SA).svg",
      title: "Arabian"
    },
  ]


const Card2 = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setIsVisible(entry.isIntersecting)
      
    })
    if(myRef.current) observer.observe(myRef.current)
  }, [])
  return (
    <div
    ref = {myRef}
    className={` w-full sm:w-full h-fit sm:min-h-1/2 bg-[#ffffff60] backdrop-blur flex flex-col rounded-2xl border-[2px] p-2 sm:p-4 shadow-md shadow-gray-300 gap-4`}>
    <div className="font-semibold text-base xl:text-2xl ">140+ Languages</div>
    <div className=" h-fit w-[20rem] sm:w-full ">
        <Swiper
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            direction="horizontal"
            className=" w-full flex myswiper"
        >

            {
                languageData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <span  className="flex flex-col items-center">
                            <img className='h-16 w-16' src={item.image} />
                            <h1 className="text-center">{item.title}</h1>
                        </span>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        {/* <span className=" rounded-full bg-[#ffffff45] flex items-center justify-center w-8 h-8">...</span> */}
    </div>
    <p className="text-sm xl:text-lg">"Effortless Translation: Upload, Select Language, and Transform Any Content with a Single Click!"</p>
</div>
  )
}

export default Card2