import React from 'react'
import './PageLoader.css'

const PageLoader = (show: any) => {
  return show && (
    <main className=' absolute top-0 left-0 w-full h-full z-[100] bg-[#00000080]'>
      <div className="spinner ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>

  );
}

export default PageLoader