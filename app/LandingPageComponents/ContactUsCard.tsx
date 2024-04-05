import React from 'react'

const ContactUsCard = () => {
    return (
        <div className="relative z-10 flex flex-col space-x-4 bg-gradient-to-r from-[#0F2B55] to-[#308EC2] w-full md:w-[80%] lg:w-[50%] h-full p-8 sm:rounded-2xl items-center justify-center gap-8 top-0 left-0 right-0 mb-[-10%] mx-auto">
          <h1 className="sm:text-2xl text-xl text-center mb-5">
            Dive into the Future with us!
          </h1>
          <p className="mb-5">
            Join the ranks of avant-garde! Subscribe to MogiVerse Insider for a
            backstage pass to our digital odyssey. Stay ahead, stay inspired
            Subscribe now!
          </p>
          <div className="flex bg-white w-full sm:w-2/3 justify-between rounded-full">
            <input
              className="text-black p-3 focus:outline-none w-4/5"
              type="text"
              placeholder="Enter Email"
            />
            <button className="rounded-full bg-gradient-to-r from-[#0F2B55] to-[#308EC2] w-1/5 border-2 hover:scale-95 hover:cursor-pointer duration-200">
              Sent
            </button>
          </div>
        </div>
      );
}

export default ContactUsCard