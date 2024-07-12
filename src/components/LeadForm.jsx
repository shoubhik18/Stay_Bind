
// import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const LeadForm = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-3/6 relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500 text-3xl pe-2 "
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <form>
//           <div className="flex space-x-12">
//             <div className="mb-4 w-3/6">
//               <label className="block text-gray-700 font-bold mb-2">
//                 Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>

//             <div className="mb-4 w-3/6">
//               <label className="block text-gray-700 font-bold mb-2">
//                 Email Id<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter Email address"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex space-x-12">
//             <div className="mb-4 w-3/6">
//               <label className="block text-gray-700 font-bold mb-2">
//                 Mobile Number<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Mobile Number"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>

//             <div className="mb-4 w-3/6">
//               <label className="block text-gray-700 font-bold mb-2">
//                 No of Properties<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="Enter No of Properties"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">
//               Location<span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Location"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 pl-10"
//                 required
//               />
//               <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 className="form-checkbox text-blue-600"
//                 required
//               />
//               <span className="ml-2 text-gray-700">
//                 I agree to all the{" "}
//                 <a href="#" className="text-blue-600">
//                   Terms
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-600">
//                   Privacy policy
//                 </a>
//               </span>
//             </label>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LeadForm;



import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
const LeadForm = ({ onClose }) => {
  return (
    <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-14 rounded-lg shadow-lg w-3/6 relative ">
        <button onClick={onClose} className="absolute top-6  right-5 text-3xl hover:text-gray-700">
         <IoClose/>
        </button>
        <hr class="h-px mb-10 p-  bg-gray-100 border-0 dark:bg-gray-300"/>
        <form>
          <div className="flex space-x-8">
            <div className="mb-4 w-3/6">
              <label className="block text-gray-700 font-bold mb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-3   py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4 w-3/6">
              <label className="block text-gray-700 font-bold mb-2">
                Email Id<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email address"
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div className="flex space-x-10">
            <div className="mb-4 w-3/6">
              <label className="block text-gray-700 font-bold mb-2">
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4 w-3/6">
              <label className="block text-gray-700 font-bold mb-2">
                No of Properties<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter No of Properties"
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div className="mb-4 w-3/6">
            <label className="block text-gray-700 font-bold mb-2">
              Location<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-3 py-4  border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 "
                required
              />
              <GrLocation className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" />
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center  ">
              <input
                type="checkbox"
                className=" "
                required
              />
              <span className="ml-2 ">
                I agree to all the{" "}
                <a href="#" className="text-blue-600">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600">
                  Privacy policy
                </a>
              </span>
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LeadForm;