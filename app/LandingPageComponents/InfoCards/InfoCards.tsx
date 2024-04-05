import React, { useEffect, useRef, useState } from 'react'
import Card1 from './Card1/Card1'
import Card2 from './Card2/Card2'
import Card3 from './Card3/Card3'

const InfoCards = () => {
    const myRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    // console.log('isVisible', isVisible);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting)
            // console.log('entry', entry)
        })
        if (myRef?.current) observer.observe(myRef.current)
    }, [])
    return (
        <div className='w-full p-4 gap-4 z-5'>
            <h1 className="z-[7] sm:text-2xl text-center text-xl  font-bold">Unmatched Brilliance</h1>
         
            <div className="relative xl:w-[100%] mx-auto  flex-wrap ">
                {/**gradient */}
                <div className="z-2 hidden sm:block w-[70rem] h-[40rem] rounded-full bg-gradient-to-b from-[#0F2B55] to-[#0F2A54] blur-[15rem] absolute top-[20rem] left-2/3 transform -translate-x-2/3 -translate-y-2/3"></div>

                <div className="flex flex-col sm:flex-row z-[5] items-start justify-center gap-4 my-3 w-full sm:w-full sm:h-[27rem] xl:px-16 mx-auto">
                    <Card1 />
                    <div ref={myRef} className={`${isVisible ? 'animate-fadeInRight ' : ''} w-full sm:w-1/2 sm:h-full justify-center items-center sm:justify-start sm:items-start mx-auto flex flex-col  gap-5 z-[5]`}>
                        <Card2 />  
                        <Card3 />  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCards