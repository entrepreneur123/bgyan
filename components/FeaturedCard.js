import React from "react";

const FeaturedCard = ({ title, price, image, Business, logo }) => {
  return (
    <div className=" h-[280px] w-[210px] rounded-lg shadow-md ml-20 ">
      <img src={image} alt={title} className="p-4" />
      <div className="pl-4 pt-1 pb-2 pr-1">
        <h2 className="text-neutral-gray-color-by-mm font-semibold w-[28px] font-roboto ">
          {title}
        </h2>
        <p className="text-amber-500 text-sm ">
          <span className="pr-2"> NPR</span>
          {price}
        </p>
      </div>
      <div className="flex pl-4">
        {/* <img scr={logo} alt="logo" classsName="rounded-lg" /> */}
        {/* <img scr="/Images/logo.png" alt="logo" classsName="rounded-lg" /> */}
        <h2 className="text-md font-semibold font-roboto">{Business}</h2>
      </div>
    </div>
  );
};

export default FeaturedCard;
