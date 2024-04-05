import React, {useEffect, useState} from 'react'
import { useRouter } from "next/navigation";
import { GrSystem } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaDollarSign, FaInfoCircle} from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import PageLoader from '../PageLoader/PageLoader';

const LandingPageHeader = () => {
    const router = useRouter();
    const [isHamburger, setIsHamburger] = useState(false);
    const setMenu = () => {
      setIsHamburger(!isHamburger);
    };
  
    const [isDrawer, setIsDrawer] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleDrawer = () => {
        setIsDrawer((prev) => !prev)
    }

    // useEffect(() => {
    //       // Simulate loading process (replace with actual loading logic)
    //       const timeout = setTimeout(() => {
    //         setLoading(false);
    //       }, 5000);
      
    //       return () => clearTimeout(timeout);
    //     }, []);
    // if(isLoading){
    //     return (
    //       <PageLoader/>
    //     )
    //   }

      
    return (
        <>
        {isLoading ? 
        <PageLoader/>: null}

            {isDrawer ?
                <div className=" fixed inset-y-0 right-0 bg-black w-[80%] h-full sm:hidden z-[100] animate-slide-in rounded-l-lg">

                    <div className=" py-4 flex justify-between items-center px-4 border-b-[2px] border-gray-500">
                        <h1 className="font-semibold">MOGIVERSE</h1>
                        <RxCross1 className="text-xl text-white h-4 w-4 z-[20]" onClick={handleDrawer} />
                    </div>

                    <ul className="flex flex-col mx-auto w-[90%] gap-2 my-4">
                        <li className="flex items-center gap-2  rounded-md shadow-md p-4"><GrSystem />Services</li>
                        <li className="flex items-center gap-2  rounded-md shadow-md p-4"><FaDollarSign />Pricing</li>
                        <li className="flex items-center gap-2  rounded-md shadow-md p-4"><FaInfoCircle />About us</li>
                        <li className="flex items-center gap-2  rounded-md shadow-md p-4"><FaRegMessage />Contact us</li>
                    </ul>
                </div> : null}

            <div className="flex flex-col items-center justify-end p-4 sticky top-0 bg-[#101825] backdrop-filter backdrop-blur-md bg-opacity-50 z-[50]">
                <div className="flex items-center w-full justify-between">
                    <div className="flex items-center p-2 md:ml-6">
                        <img
                            className="h-8 w-8 md:h-10 md:w-10 rounded-md"
                            src="/Images/mogi.jpeg"
                            alt="Mogiverse Logo"
                        />
                        <p className="ml-2 text-sm md:text-base">MOGIVERSE</p>
                    </div>

                    <nav className="hidden sm:block">
                        <div className="flex justify-center items-center space-x-5 z-10">
                            <button className="text-white p-2 rounded-md hover:bg-gradient-to-r from-[#7B81FE] [#9666FC] to-[#D16AED] hover:scale-110 duration-200">Services</button>
                            <button className="text-white p-2 rounded-md hover:bg-gradient-to-r from-[#7B81FE] [#9666FC] to-[#D16AED] hover:scale-110 duration-200" onClick={()=>router.push('/subscription')}>Pricing</button>
                            <button className="text-white p-2 rounded-md hover:bg-gradient-to-r from-[#7B81FE] [#9666FC] to-[#D16AED] hover:scale-110 duration-200">About us</button>
                            <button className="text-white p-2 rounded-md hover:bg-gradient-to-r from-[#7B81FE] [#9666FC] to-[#D16AED] hover:scale-110 duration-200">Contact us</button>
                        </div>
                    </nav>

                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={() => {
                                setLoading(true)
                                router.push("/user/login") 
                            }}
                            className="z-[5] p-2 px-6 rounded-md bg-gradient-to-r from-[#7B81FE] [#9666FC] to-[#D16AED] hover:scale-110 duration-200 text-sm md:text-base md:mr-6 hover:scale-110 hover:cursor-pointer duration-200"
                        >
                            Sign In
                        </button>
                        <span className="sm:hidden text-2xl" onClick={handleDrawer}><GiHamburgerMenu /></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingPageHeader