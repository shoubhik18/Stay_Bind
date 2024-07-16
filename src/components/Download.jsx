// import React from 'react'
// import iphone from '../assets/iPhone15Pro.png'
// import play from '../assets/Playstore.png'
// import app from '../assets/applestore.png'

// const Download = () => {
//   return (
//     <div className="bg-hero-pattern items-center bg-cover h-[90vh] flex " >
//       <div className="items-center">
//         <img className='h-[90vh]' src={iphone} alt="" />
//       </div>
//       <div className="items-center space-y-28 ">
//         <h1 className='text-4xl font-black  ' >Download The StayBind App</h1>
//         <div className="flex space-x-6  justify-center">
//           <img className='h-12'  src={play} alt="" />
//           <img className='h-12'  src={app} alt="" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Download


import React from "react";
import image2 from "../assets/iPhone15Pro.png";
import apple from "../assets/applestore.png";
import store from "../assets/Playstore.png";

const Download = () => {
  return (
    <div className='bg-hero-pattern bg-center h-[90vh] flex flex-col lg:flex-row justify-center items-center p-8 lg:p-16 space-y-10   lg:space-y-0 lg:space-x-16'>
      <div className='flex justify-center items-center'>
        <img
          className='w-full max-w-md lg:max-w-none lg:w-auto h-auto object-contain'
          src={image2}
          alt=''
        />
      </div>
      <div className='flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-28'>
        <h1 className='text-4xl font-black'>Download The Stay Bind App</h1>
        <div className='flex space-x-8 h-14 justify-center'>
          <img className='h-full' src={store} alt='' />
          <img className='h-full' src={apple} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Download;