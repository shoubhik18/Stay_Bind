import React from "react";
import iphone from "../assets/iPhone.png";
import { FaRegPlayCircle } from "react-icons/fa";
import group from "../assets/Group.png";

const Home = () => {
  return (
    <div>
      <div className="flex ">
        <div className=" p-24 ">
          <h1 className="text-5xl font-extrabold text-gray-700 leading-normal ">
            Rent out your holiday home like a pro with{" "}
            <span className="text-blue-500">Stay Bind</span>{" "}
          </h1>
          <p className="text-sm text-gray-500 mb-6 pt-4 ">
            Put the most advanced technology to work for you. Manage, automate,
            and streamline your business, all from one platform.
          </p>
          <div className="flex p-2 mt-10 items-center space-x-8">
            <button className="px-5 py-3 text-sm  text-white bg-blue-500 rounded-sm">
              Get started
            </button>
            <div className="flex text-4xl font-light items-center space-x-2 ">
              <FaRegPlayCircle />
              <p className="text-base">Watch Video</p>
            </div>
          </div>
          <div className="flex p-2 mt-8 space-x-12">
            <div className=" text-center ">
              <h2 className="text-4xl text-gray-700 font-semibold tracking-wider ">
                321%
              </h2>
              <p className="text-gray-400 text-xs ">Occupancy Rate</p>
            </div>
            <div className=" text-center ">
              <h2 className="text-4xl text-gray-700 font-semibold tracking-wider ">
                25k
              </h2>
              <p className="text-gray-400 text-xs ">Revenue</p>
            </div>
            <div className=" text-center ">
              <h2 className="text-4xl text-gray-700 font-semibold tracking-wider ">
                150+
              </h2>
              <p className="text-gray-400 text-xs ">Bookings</p>
            </div>
          </div>
        </div>
        <div className="">
          <img className="h-[90vh] w-[100vw]  " src={iphone} alt="" />
        </div>
        <div className="flex flex-col p-20 space-y-4">
          <div className="flex space-x-6 ">
            <p className="text-gray-400">01</p>
            <h3 className="font-extrabold ">Home</h3>
          </div>
          <div className="bg-gray-300 w-0.5 h-14 "></div>
          <div className="flex space-x-6">
            <p className="text-gray-400">02</p>
            <h3 className="font-extrabold ">Calendar</h3>
          </div>
          <div className="flex space-x-6">
            <p className="text-gray-400">03</p>
            <h3 className="font-extrabold ">Pricing</h3>
          </div>
          <div className="flex space-x-6">
            <p className="text-gray-400">04</p>
            <h3 className="font-extrabold ">Worker</h3>
          </div>
          <div className="flex space-x-6">
            <p className="text-gray-400">05</p>
            <h3 className="font-extrabold ">Profile</h3>
          </div>
        </div>
      </div>
      <img className="p-14 " src={group} alt="" />
      <div className="mt-10">
        <div className="relative overflow-hidden h-12 bg-black transform -rotate-3 ">
          <div className="  absolute top-3 left-0  animate-scroll whitespace-nowrap">
            <span className="text-white mx-4">
              Something great is on the way  . . . .  Coming Soon !! *
            </span>
            <span className="text-white mx-4">
            Something great is on the way  . . . .  Coming Soon !! *
            </span>
            <span className="text-white mx-4">
            Something great is on the way  . . . .  Coming Soon !! *
            </span>
            <span className="text-white mx-4">
            Something great is on the way  . . . .  Coming Soon !! 
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
4;
