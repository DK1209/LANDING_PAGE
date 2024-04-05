"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';

//Landing Page Components
import FeaturesCard from "./LandingPageComponents/FeaturesCard";
import FAQ from "./LandingPageComponents/FAQSection/FAQ";
import Footer from "./LandingPageComponents/Footer";
import CarouselSlider from "./LandingPageComponents/CarouselSlider";
import Video from "./LandingPageComponents/Video";
import ContactUsCard from "./LandingPageComponents/ContactUsCard";
import UseCases from "./LandingPageComponents/UseCases";
import LandingPageHeader from "./LandingPageComponents/LandingPageHeader";
import InfoCards from "./LandingPageComponents/InfoCards/InfoCards";
import PageLoader from './PageLoader/PageLoader';


export default function LandingPage() {
  const router = useRouter();
  const myRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  // console.log('isVisible', isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(true)
      // console.log('entry', entry)
    })
    if (myRef.current) observer.observe(myRef.current)
  }, [])

  // useEffect(() => {
  //   // Simulate loading process (replace with actual loading logic)
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);

  if (isLoading) {
    return (
      <PageLoader />
    )
  }

  return (
    <div>
      <LandingPageHeader />
      {/* main body */}
      <div className="relative flex flex-col items-center w-full p-2 gap-16">

        <section ref={myRef} id='intro' className={`${isVisible ? 'animate-fadeInTop' : ''} flex flex-col items-center w-full p-2 gap-4 text-base`}>
          <h1 className="sm:text-4xl text-2xl text-center w-[90%] mx-auto">
            Elevate Your Content with Exclusive Translation and Dubbing Magic!
          </h1>

          <div className="hidden md:block left-[24rem] h-[50rem] absolute z-[3] w-[20rem] rounded-xl bg-gradient-to-b from-[#0F2B55] to-[#0F2A54]  blur-[10rem] transform -rotate-[50deg]"></div>
          <div className="hidden md:block right-[24rem] md:h-[50rem] absolute z-[3] w-[20rem] rounded-xl bg-gradient-to-b from-[#0F2B55] to-[#0F2A54]  blur-[10rem] transform rotate-[50deg]"></div>

          <Video />
          <button
            onClick={() => {
              setLoading(true)
              router.push("/user/login")
            }}
            className="p-2 z-[5] sm:p-4 mt-2 lg:mt-8 rounded-md bg-gradient-to-r from-[#7B81FE] [#9666FC] to-[#D16AED] hover:scale-110 hover:cursor-pointer duration-200">
            Try Now for Free
          </button>
        </section>

        <section ref={myRef} className={`${isVisible ? 'animate-fadeInTop' : ''} flex flex-col relative h-fit w-full py-2  gap-4`}>
          <div className="flex items-center justify-center w-full h-fit ">
            {/**gradient */}
            <div className="hidden sm:block h-[8rem] w-[20rem] sm:h-[12.5rem] sm:w-[12.5rem] rounded-l-full bg-gradient-to-b from-[#7E7FFE] to-[#CB6AEF] blur-[7rem] absolute left-0"></div>
            <h1 className="sm:text-2xl xl:text-4xl text-xl font-bold ">
              "Discover Our Exclusive Solutions"
            </h1>
            {/**gradient */}
            <div className="hidden sm:block h-[8rem] w-[15rem] sm:h-[12.5rem] sm:w-[12.5rem] rounded-r-full bg-gradient-to-b from-[#7E7FFE] to-[#CB6AEF] blur-[7rem] mt-40 absolute top-55 lg:top-50 right-0"></div>

          </div>

          <div >
            <CarouselSlider />
          </div>

        </section>

        <section ref={myRef} className={`${isVisible ? 'animate-fadeInTop' : ''} flex flex-col flex-wrap justify-center items-center w-full xl:w-[90%] 2xl:w-[80%]`} id="" >
          <InfoCards />
        </section>

        <section ref={myRef} className={`${isVisible ? 'animate-fadeInTop' : ''} relative w-full flex flex-col justify-center items-center gap-4 p-2`} >
          <UseCases />
        </section>

        <section ref={myRef} className={`  flex w-full`} >
          <FeaturesCard />
        </section>

        <section className={`animate-none relative xl:w-[80%] flex flex-col items-center justify-center sm:gap-16`} id="FAQ" >
          <div className="hidden sm:block z-[2] h-[50rem] w-[60rem] sm:h-[12.5rem] sm:w-[12.5rem] rounded-l-full bg-gradient-to-br from-[#D69F9F] to-[#9E212100] blur-[6rem] absolute left-0"></div>
          <div className="hidden sm:block absolute h-[15rem] w-[10rem] blur-[10rem] top-1/2 right-0 z-[2] bg-green-200"></div>
          <h1 className="text-center text-xl sm:text-2xl font-semibold">Frequently Asked Questions</h1>
          <div className="flex w-full sm:px-16 gap-12">
            <FAQ />
            <span ref={myRef} className={`${isVisible ? 'animate-float ' : ''} hidden sm:block`}> <img className='z-[5]' src='/robot.png' /> </span>
          </div>
        </section>

        <section className={` mt-16 w-full sm:h-[20rem]`} id="contact" >
          <ContactUsCard />
          <Footer />
        </section>

      </div>
    </div>
  );
}

