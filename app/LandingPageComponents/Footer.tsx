import React from 'react'

import { FaInstagram, FaTwitter, FaFacebook, FaCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="relative flex flex-col justify-end bg-gradient-to-b from-[#0D223F] to-[#0E100F] h-[20rem] ">
            <div className="flex flex-col sm:flex-row justify-between items-center ">
                <div className="flex p-5 sm:ml-5 gap-3 w-1/3">
                    <img className="h-10 w-10 rounded-md" src="mogi.jpeg" />
                    <p className="mt-2 mr-3">MOGIVERSE</p>
                </div>
                <nav className="sm:w-1/3 flex justify-center ">
                    <div className="flex flex-row flex-wrap w-[90%] justify-center mx-auto items-center gap-4">
                        <button className="text-white">About</button>
                        <button className="text-white">Services</button>
                        <button className="text-white">Pricing</button>
                        <button className="text-white">Contact us</button>
                        <button className="text-white">Terms & Conditions</button>
                    </div>
                </nav>

                <div className="flex space-x-4  my-4 w-1/3 items-center justify-end pr-6">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center">
                    <FaCopyright />
                    <p className="ml-1">Copyright 2023 Mogiverse</p>
                </div>
            </div>
        </div>
    );
}

export default Footer