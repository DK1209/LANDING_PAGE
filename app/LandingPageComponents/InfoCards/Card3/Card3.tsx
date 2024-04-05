import React, { useRef, useState, useEffect } from 'react'

const Card3 = () => {
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
        <div
            ref={myRef}
            className={` w-full sm:w-[90%] justify-start h-fit sm:min-h-1/2 bg-[#ffffff60] backdrop-blur flex flex-col rounded-2xl border-[2px] p-4 shadow-md shadow-gray-300 gap-4`}>
            <h1 className="font-semibold text-base xl:text-2xl ">Transforming Words into Symphony</h1>
            <p className="text-sm xl:text-lg">Elevate your content with our Text-to-Speech AI. Effortlessly convert written words into a captivating audio experience. Personalized, natural, and engaging – let your words be heard like never before</p>
        </div>
    )
}

export default Card3