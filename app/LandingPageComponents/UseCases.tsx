import React, {useState, useRef, useEffect} from 'react'

const UseCases = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  console.log('isVisible', isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setIsVisible(entry.isIntersecting)
      console.log('entry', entry)
    })
    if(myRef.current) observer.observe(myRef.current)
  }, [])
  return (
    <>
    <div className="hidden sm:block z-[2] h-[20rem] w-[40rem] sm:h-[12.5rem] sm:w-[12.5rem] rounded-l-full bg-[#2412A3] blur-[8rem] absolute left-0"></div>
          <div className="hidden sm:block z-[2] h-[20rem] w-[40rem] sm:h-[15.5rem] sm:w-[12.5rem] rounded-l-full bg-gradient-to-b from-[#7E7FFE] to-[#CB6AEF] blur-[8rem] absolute right-0 top-[15rem]"></div>

          <h1 className="text-xl sm:text-2xl font-semibold text-center">Current AI Video Dubbing <br />Use Cases</h1>
          <h1 className="text-center text-sm sm:text-lg">The Application for Ai Dubbing are limitless, but here are just a few</h1>
          <div  className={`flex flex-wrap  w-[90%] gap-4 justify-between mx-auto z-[5] items-center`}>
            <span ref= {myRef} className={`${isVisible ? 'animate-fadeInTop': ''} flex flex-col items-center justify-center h-[45%] w-[45%] sm:h-[25%] sm:w-[20%] `}>
              <img className="mx-auto shadow-xl shadow-[#61619e] rounded-2xl" src="UC1.svg" />
              <h1 className="text-sm sm:text-lg">Documentaries</h1>
            </span>
            <span ref= {myRef} className={`${isVisible ? 'animate-fadeInTop': ''} flex flex-col items-center justify-center h-[45%] w-[45%] sm:h-[25%] sm:w-[20%]`}>
              <img className="mx-auto shadow-xl shadow-[#61619e] rounded-2xl" src="UC2.svg" />
              <h1 className="text-sm sm:text-lg">News Videos</h1>
            </span>
            <span ref= {myRef} className={`${isVisible ? 'animate-fadeInTop': ''} flex flex-col items-center justify-center h-[45%] w-[45%] sm:h-[25%] sm:w-[20%]`}>
              <img className=" mx-auto shadow-xl shadow-[#61619e] rounded-2xl" src="UC3.svg" />
              <h1 className="text-sm sm:text-lg">Training Videos</h1>
            </span>
            <span ref= {myRef} className={`${isVisible ? 'animate-fadeInTop': ''} flex flex-col items-center justify-center h-[45%] w-[45%] sm:h-[25%] sm:w-[20%]`}>
              <img className=" mx-auto shadow-xl shadow-[#61619e] rounded-2xl" src="UC4.svg" />
              <h1 className="text-sm sm:text-lg">Marketing Videos</h1>
            </span>
          </div>

          <h1 className="text-lg font-medium text-center">Coming soon - Live & Movie Dubbing</h1>
    </> 
  )
}

export default UseCases