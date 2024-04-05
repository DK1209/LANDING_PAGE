import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

const personData = [
    {
      image: "/Images/person1.svg",
    },
    {
      image: "/Images/person2.svg"
    },
    {
      image: "/Images/person3.svg",
    },
    {
      image: "/Images/person4.svg",
    },
    {
      image: "/Images/person5.svg",
    },
    {
      image: "/Images/person6.svg"
    },
    {
      image: "/Images/person7.svg",
    },
    {
      image: "/Images/person8.svg",
    },
  ]
  
const Card1 = () => {

  const myRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // console.log('isVisible', isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setIsVisible(entry.isIntersecting)
      // console.log('entry', entry)
    })
    if(myRef.current) observer.observe(myRef.current)
  }, [])
  
    return (
        <div ref={myRef} className={`${isVisible ? 'animate-fadeInLeft': '' } w-full sm:w-1/2 h-fit md:h-[70%] md:items-center md:justify-center xl:h-[90%] bg-[#ffffff60] backdrop-blur flex flex-col flex-wrap rounded-2xl border-[2px] p-2 sm:p-4 shadow-md shadow-gray-300 md:gap-6 gap-4`}>
            <div className="font-semibold text-base xl:text-2xl">10+ AI Voices & Your Unique Cloned Voice Unleashed <img className=" inline-block w-24 xl:w-40 " src="/Images/frequency.svg" /></div>
            <div className=" h-fit w-[20rem] flex mx-auto md:w-full xl:hidden ">
                <Swiper
                    slidesPerView={5}

                    spaceBetween={5}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}

                    // pagination={{
                    //   clickable: true,
                    // }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className=" w-full flex myswiper lg:hidden"
                >

                    {
                        personData.map((item, index) => (
                            <SwiperSlide key={index}>

                                <img className='h-16 w-16' src={item.image} />

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* <span className=" rounded-full bg-[#ffffff45] flex items-center justify-center w-8 h-8">...</span> */}
            </div>

            <div className='hidden xl:flex flex-row flex-wrap w-[90%] '>
            {
                        personData.map((item, index) => (
                            <div key={index}>

                                <img className='h-20 w-20' src={item.image} />

                            </div>
                        ))
                    }
            </div>
            <p className="text-sm xl:text-lg">Your Sound, Your Style: Dive into 10+ AI Voices, Shaped by Gender, Age & Style Choices for a Truly Unique Experience</p>
        </div>
    )
}

export default Card1