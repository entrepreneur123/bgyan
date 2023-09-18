import React from "react";
import FeaturedCard from "./FeaturedCard";

const Featured = [
  {
    id: 1,
    title: "title",
    image: "/Images/image.png",
    price: 2000,
    logo: "/Images/logo.png",
    Business: "clockb Bussiness",
  },
  {
    id: 1,
    title: "title",
    image: "/Images/image.png",
    price: 2000,
    logo: "/Images/logo.png",
    Business: "clockb Bussiness",
  },
  {
    id: 1,
    title: "title",
    image: "/Images/image.png",
    price: 2000,
    logo: "/Images/logo.png",
    Business: "clockb Bussiness",
  },
  {
    id: 1,
    title: "title",
    image: "/Images/image.png",
    price: 2000,
    logo: "/Images/logo.png",
    Business: "clockb Bussiness",
  },
  {
    id: 1,
    title: "title",
    image: "/Images/image.png",
    price: 2000,
    logo: "/Images/logo.png",
    Business: "clockb Bussiness",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-white">
      <div className="text-trueGray-600 font-roboto font-semibold text-3xl p-4 ml-16">
        Featured Products
      </div>
      <div className=" relative flex flex-row overflow-x-hidden items-center ">
        {/* for the circle svg and the symbol svg for slider in left side */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <g filter="url(#filter0_d_1528_10171)">
              <circle cx="39" cy="35" r="24" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_1528_10171"
                x="0"
                y="0"
                width="78"
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
                  result="effect1_dropShadow_1528_10171"
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
                  result="effect1_dropShadow_1528_10171"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1528_10171"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer  ml-9"
          >
            <path
              d="M12.5303 4.375L6.6903 10.5L12.5303 16.625"
              stroke="#4A57AD"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* for the slider svg in right side  */}

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="78"
            viewBox="0 0 77 78"
            fill="none"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <g filter="url(#filter0_d_1528_10319)">
              <circle cx="39" cy="35" r="24" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_1528_10319"
                x="0"
                y="0"
                width="78"
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
                  result="effect1_dropShadow_1528_10319"
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
                  result="effect1_dropShadow_1528_10319"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1528_10319"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute right-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer  flex items-center  "
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="#4A57AD"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-row">
          {Featured.map((item) => (
            <FeaturedCard
              key={item.id}
              title={item.title}
              image={item.image}
              logo={item.logo}
              price={item.price}
              Business={item.Business}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
