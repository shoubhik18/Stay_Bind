// import React from "react";
// import Line from "../assets/Line.png";
// import fOne from "../assets/FOne.png";
// import fTwo from "../assets/FTwo.png";
// import { FaRegCalendar } from "react-icons/fa";
// import { HiMiniCursorArrowRipple } from "react-icons/hi2";
// import { FaRupeeSign } from "react-icons/fa";
// import { MdChatBubbleOutline } from "react-icons/md";
// import { MdConstruction } from "react-icons/md";
// import { MdSpeed } from "react-icons/md";
// import { MdOutlineCalculate } from "react-icons/md";
// import { AiOutlineWhatsApp } from "react-icons/ai";

// const Features = () => {
//   return (
//     <div className="py-40  mx-auto ">
//       <h1 className="text-center font-extrabold text-4xl">Features</h1>
//       <img className="mx-auto " src={Line} alt="" />
//       <div className="flex space-x-10 -space-y-14 items-center justify-center mt-16 ">
//         <h1 className="text-xl font-extrabold ">What to expect from Us</h1>
//         <img src={fOne} className="h-36" alt="" />
//       </div>
//       <div className="flex space-x-4  items-center justify-center mt-4 ">
//         <img src={fTwo} className="h-20" alt="" />
//         <h1 className="text-xl font-extrabold ">We are Coming Soon</h1>
//       </div>
//       <div className=" px-16 py-12  flex space-x-8 w-full">
//         <div className=" shadow border-2 p-4 py-6 rounded-md w-1/4">
//           <FaRegCalendar className="text-blue-700 size-10 mb-4 " />
//           <h1 className="font-bold text-xl mb-2">Multi Calendar</h1>
//           <p className="text-lg">
//             Create user interface design with unique & modern ideas
//           </p>
//         </div>
//         <div className=" shadow border-2 p-4 py-6 rounded-md w-1/4 ">
//           <HiMiniCursorArrowRipple className="text-blue-700 size-10 mb-4 " />
//           <h1 className="font-bold text-xl mb-2">
//             Direct Booking / Reservation
//           </h1>
//           <p className="text-lg">
//             Create digital user products with updated ideas
//           </p>
//         </div>
//         <div className=" shadow border-2 p-4 py-6 rounded-md w-1/4">
//           <FaRupeeSign className="text-blue-700 size-10 mb-4 " />
//           <h1 className="font-bold text-xl mb-2">Pricing Control</h1>
//           <p className="text-lg">
//             Create advance design prototype with Figma apps.
//           </p>
//         </div>
//         <div className=" shadow border-2 p-4 py-6 rounded-md w-1/4">
//           <MdChatBubbleOutline className="text-blue-700 size-10 mb-4 " />
//           <h1 className="font-bold text-xl mb-2">Unified Messaging PORTAL</h1>
//           <p className="text-lg">
//             Create advance design prototype with Figma apps.
//           </p>
//         </div>
//       </div>
//       <div className=" px-16   flex space-x-8 w-full">
//         <div className=" shadow border-2 p-4 py-6 rounded-md w-1/4">
//           <MdConstruction className="text-blue-700 size-10 mb-4 " />
//           <h1 className="font-bold text-xl mb-2">Worker & Task Manager</h1>
//           <p className="text-lg">
//             Create user interface design with unique & modern ideas{" "}
//           </p>
//         </div>
//         <div className=" shadow border-2 p-4 py-6 rounded-md w-1/4 ">
//           <MdSpeed className="text-blue-700 size-10 mb-4 " />
//           <h1 className="font-bold text-xl mb-2">Performance Indicator </h1>
//           <p className="text-lg">
//             Create digital user products with updated ideas{" "}
//           </p>
//         </div>
//         <div className=" shadow border-2 p-4 py-6 rounded-md w-1/4">
//           <MdOutlineCalculate className="text-blue-700 size-10 mb-4 " />
//           <h1 className="font-bold text-xl mb-2">Accounting</h1>
//           <p className="text-lg">
//             Create advance design prototype with Figma apps.{" "}
//           </p>
//         </div>
//         <div className=" shadow border-2 p-4 py-6 rounded-md w-1/4">
//           <AiOutlineWhatsApp className="text-blue-700 size-10 mb-4 " />
//           <h1 className="font-bold text-xl mb-2">WhatsApp Integration </h1>
//           <p className="text-lg">
//             Create advance design prototype with Figma apps.{" "}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;



import React from "react";
import line from "../assets/Line.png";
import one from "../assets/FOne.png";
import two from "../assets/FTwo.png";
import { FaRegCalendar } from "react-icons/fa";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { MdOutlineCalculate } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Features = () => {
  return (
    <div className="py-24 md:py-48 mx-auto px-4 md:px-0">
      <h1 className="text-center font-extrabold text-2xl md:text-4xl">Features</h1>
      <img className="mx-auto mt-4" src={line} alt="line" />
      <div className="flex flex-col md:flex-row items-center justify-center mt-16 space-y-4 md:space-y-0 md:space-x-10">
        <h1 className="text-lg md:text-xl font-extrabold">What to expect from Us</h1>
        <img src={one} className="h-24 md:h-36" alt="one" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
        <img src={two} className="h-16 md:h-20" alt="two" />
        <h1 className="text-lg md:text-xl font-extrabold">We are Coming Soon</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16 py-8 w-full">
        <div className="shadow border-2 p-4 py-6 rounded-md">
          <FaRegCalendar className="text-blue-700 text-4xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl mb-2">Multi Calendar</h1>
          <p className="text-sm md:text-lg">
            Create user interface design with unique & modern ideas
          </p>
        </div>
        <div className="shadow border-2 p-4 py-6 rounded-md">
          <HiMiniCursorArrowRipple className="text-blue-700 text-4xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl mb-2">Direct Booking / Reservation</h1>
          <p className="text-sm md:text-lg">Create digital user products with updated ideas</p>
        </div>
        <div className="shadow border-2 p-4 py-6 rounded-md">
          <FaRupeeSign className="text-blue-700 text-4xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl mb-2">Pricing Control</h1>
          <p className="text-sm md:text-lg">Create advance design prototype with Figma apps.</p>
        </div>
        <div className="shadow border-2 p-4 py-6 rounded-md">
          <MdChatBubbleOutline className="text-blue-700 text-4xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl mb-2">Unified Messaging PORTAL</h1>
          <p className="text-sm md:text-lg">Create advance design prototype with Figma apps.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16  w-full">
        <div className="shadow border-2 p-4 py-6 rounded-md">
          <MdConstruction className="text-blue-700 text-4xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl mb-2">Worker & Task Manager</h1>
          <p className="text-sm md:text-lg">Create user interface design with unique & modern ideas</p>
        </div>
        <div className="shadow border-2 p-4 py-6 rounded-md">
          <MdSpeed className="text-blue-700 text-4xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl mb-2">Performance Indicator</h1>
          <p className="text-sm md:text-lg">Create digital user products with updated ideas</p>
        </div>
        <div className="shadow border-2 p-4 py-6 rounded-md">
          <MdOutlineCalculate className="text-blue-700 text-4xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl mb-2">Accounting</h1>
          <p className="text-sm md:text-lg">Create advance design prototype with Figma apps.</p>
        </div>
        <div className="shadow border-2 p-4 py-6 rounded-md">
          <AiOutlineWhatsApp className="text-blue-700 text-4xl mb-4" />
          <h1 className="font-bold text-lg md:text-xl mb-2">WhatsApp Integration</h1>
          <p className="text-sm md:text-lg">Create advance design prototype with Figma apps.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;