import React, {useState} from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQCard = (item: { question: string, answer: string }, index: number) => {
    const [isFaqDown, setFaqDown] = useState(false);
    const handleFaq = () => {
      setFaqDown((prev) => !prev)
    }
    return (
        <div key={index} className="bg-[#FFF9F925] p-4 rounded-md w-full ">
            <div className="flex justify-between">
                <p>
                    {item.question}
                </p>
                <span key={index} className="arrow" onClick={handleFaq}>
                    {isFaqDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
            </div>
            {isFaqDown && (
                <div className="animate-fadeInTop">
                    <p>
                        {item.answer}
                    </p>
                </div>
            )}

        </div>
    );
}

export default FAQCard