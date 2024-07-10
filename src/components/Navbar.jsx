// import React from "react";
// import logo from "../assets/Subtract.png";

// const Navbar = () => {
//   return (
//     <div>
//       <div className="flex justify-between  items-center py-4 px-8">
//         <div className="flex space-x-6 items-center">
//           <img src={logo} alt="" className="h-12" />
//           <h1 className="text-3xl font-bold text-gray-600 ">Stay Bind</h1>
//         </div>
//         <div className="flex space-x-6 items-center">
//           <a className="text-gray-500" href="">Home</a>
//           <a className="text-gray-500" href="">Features</a>
//           <a className="text-gray-500" href="">Dashboard</a>
//           <a className="text-gray-500" href="">Faq</a>
//           <a className="text-gray-500" href="">About</a>
//         </div>
//         <div className="flex space-x-6 items-center ">
//           <button className="btn  border-black border-2 py-2 px-4 rounded-md font-medium ">Sign in</button>
//           <button className="btn border-blue-500  border-2 py-2 px-4 rounded-md font-medium text-white bg-blue-500 ">Sign up</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../assets/Subtract.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-12">
        <div className="flex space-x-4 items-center">
          <img src={logo} alt="Stay Bind Logo" className="h-12" />
          <h1 className="text-3xl font-bold text-gray-600">Stay Bind</h1>
        </div>
        <div className="flex space-x-6 items-center">
          {["Home", "Features", "Download", "Faq", "About"].map((link) => (
            <a
              key={link}
              className={`text-gray-500 ${activeLink === link ? "text-black font-medium" : ""}`}
              href={`#${link.toLowerCase()}`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex space-x-6 items-center">
          <button className="btn border-black border-2 py-2 px-4 rounded-md font-medium">
            Sign in
          </button>
          <button className="btn border-blue-500 border-2 py-2 px-4 rounded-md font-medium text-white bg-blue-500">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
