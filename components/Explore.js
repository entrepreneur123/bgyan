import React from "react";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="  flex h-[670px] flex-shrink-0 bg-to-slate-950">
      <div className="  flex flex-col items-center justify-center">
        <div className="w-[421.52px] ml-[100px] ">
          <span className="  font-Poppins text-4xl text-trueGray-700 font-semibold leading-[1.2]">
            Dive into a world of diverse products
          </span>
        </div>
        <div className="ml-[2.8rem] w-[367.582px] my-5">
          <p className=" font-poopins text-sm leading-[1.5] font-trueGray-600">
            Our sellers have already brought you a <br />
            diverse products to your doorstep.
          </p>
        </div>
        <div className="-ml-[160px] ">
          <button className="bg-blue-700 text-white  rounded-sm  px-8 py-2">
            Explore More
          </button>
        </div>
      </div>
      {/* for second column */}
      <div className="">
        <div className="w-[403.541px] h-[582px] rounded-md my-[44px]">
          <Image
            src="/Images/rectangle.png"
            alt="img"
            width={403.541}
            height={582}
          />
        </div>
      </div>
      {/* for third column */}
      <div className="">
        <div className="relative flex flex-row">
          <div className="w-[371.577px] h-[486px] rounded-md ml-[23.97px] my-[44px]">
            <Image
              src="/Images/rectangle2.png"
              alt="img"
              width={403.541}
              height={582}
            />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
            className=" absolute top-80 ml-[360px]"
          >
            <g filter="url(#filter0_d_1528_10352)">
              <ellipse cx="39.4542" cy="35" rx="23.9727" ry="24" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_1528_10352"
                x="0.481445"
                y="0"
                width="77.9453"
                height="78"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_1528_10352"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1528_10352"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1528_10352"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className="absolute top-[21.5rem] ml-[385px]"
          >
            <path
              d="M9.45801 5L16.4501 12L9.45801 19"
              stroke="#4A57AD"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* for four row of slides dot dot  */}
        <div className="flex flex-row ml-[2rem] space-x-2 items-center ">
          {/* first one  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
          >
            <circle
              opacity="0.7"
              cx="14.373"
              cy="13.5"
              r="13"
              stroke="#4A57AD"
            />
            <circle
              cx="14.373"
              cy="13.5"
              r="5"
              fill="#4A57AD"
              stroke="#4A57AD"
            />
          </svg>
          {/* second one  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            className=""
          >
            <circle cx="6.37305" cy="5.5" r="5.5" fill="#D8D8D8" />
          </svg>
          {/* thirdone */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            className=""
          >
            <circle cx="6.37305" cy="5.5" r="5.5" fill="#D8D8D8" />
          </svg>
          {/* fourth one  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            className=""
          >
            <circle cx="6.37305" cy="5.5" r="5.5" fill="#D8D8D8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Explore;
