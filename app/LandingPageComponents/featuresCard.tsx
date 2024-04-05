import React from 'react'

import { FaDollarSign, FaInfoCircle, FaMoneyCheckAlt, FaPlay } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import { AiOutlineTranslation } from "react-icons/ai";
import { RiUserVoiceFill } from "react-icons/ri";
import { FaMicrophoneLines, FaRegMessage } from "react-icons/fa6";

const featuresData = [
    {
      icon: <FaPlay />,
      title: "10X",
      desc: "Watch time of your content"
    },
    {
      icon: <CgSearch />,
      title: "300%",
      desc: "Watch time of your content"
    },
    {
      icon: <GoClock />,
      title: "80%",
      desc: "Time Reduction in Video Dubbing"
    },
    {
      icon: <AiOutlineTranslation />,
      title: "99.3%",
      desc: "Accurate Translations"
    },
    {
      icon: <RiUserVoiceFill />,
      title: "100%",
      desc: "Realistic Ai voice-over"
    },
    {
      icon: <FaMicrophoneLines />,
      title: "150",
      desc: "Languages in any voice"
    }
  ]
const FeaturesCard = () => {
    return (
        <div className=" py-4 w-[95%] xl:w-full mx-auto sm:w-full bg-gradient-to-b from-[#216784] to-[#0e3d52] p-4 rounded-lg sm:rounded-none">
          <h1 className="sm:text-2xl text-lg text-center text-white">
            Dubbing and Voiceovers Faster, Profitable & Magical
          </h1>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 ">
            {featuresData.map((item, index) => (
              <div key={index} className="flex flex-col items-center mt-4">
                <span className="text-2xl">{item.icon}</span>
                <h2 className="text-base sm:text-2xl  text-white">{item.title}</h2>
                <p className="text-white text-[12px] sm:text-base text-center">{item.desc}</p>
              </div>
            ))}
  
          </div>
        </div>
      );
}

export default FeaturesCard