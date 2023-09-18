import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="relative">
        <Image
          src="/Images/imageFirst.png"
          alt="Banner Image"
          className="w-full h-auto"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className="absolute top-10 right-10 bg-orange-50 rounded-md w-[42rem] h-96 flex p-4 flex-col items-start ">
        <span className="p-4 text-gary-700 font-bold font-roboto">
          New Arrival
        </span>
        <div className="text-amber-500 font-roboto font-bold text-5xl leading-10 p-4 whitespace-nowrap  ">
          <span className="">Discover Our</span> <br /> New Products
        </div>
        <p className="text-gray-700 font-roboto font-medium text-md leading-6 pb-4 pl-4">
          Experience a symphony of technology, craftsmanship, and nature in our
          curated collection. Shop tech, handcrafts, and agro delights today!
        </p>
        <button className="inline-flex gap-4 p-4 ml-4 items-start rounded-lg bg-amber-500 text-white">
          {" "}
          Explore all Products
        </button>
      </div>
    </div>
  );
};

export default Banner;
