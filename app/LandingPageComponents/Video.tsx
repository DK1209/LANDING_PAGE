import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';


const Video = () => {
  // const { ref: myRef, inView: myElementIsVisible } = useInView();

  const myRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setIsVisible(true)
      
    })
    if(myRef.current) observer.observe(myRef.current)
  }, [])
  return (
    <video
      ref={myRef}
      autoPlay
      loop
      muted
      playsInline
      width="950"
      height="240"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      // className="rounded-xl z-10"
      // width="750"
      // height="250"
      // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      className={`${isVisible ? 'animate-popUp': ''} justify-center flex mx-auto rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl z-[10]`}
    ></video>
  );
}

export default Video