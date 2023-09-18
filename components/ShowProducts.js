import React from "react";
import FeaturedCard from "./FeaturedCard";

const ShowProducts = () => {
  const Featured = [
    {
      id: 1,
      title: "title",
      image: "/Images/image.png",
      price: 2000,
      logo: "/Images/Ellipse.png",
      Business: "clockb Bussiness",
    },
    {
      id: 1,
      title: "title",
      image: "/Images/image.png",
      price: 2000,
      logo: "/Images/Ellipse.png",
      Business: "clockb Bussiness",
    },
    {
      id: 1,
      title: "title",
      image: "/Images/image.png",
      price: 2000,
      logo: "/Images/Ellipse.png",
      Business: "clockb Bussiness",
    },
    {
      id: 1,
      title: "title",
      image: "/Images/image.png",
      price: 2000,
      logo: "/Images/Ellipse.png",
      Business: "clockb Bussiness",
    },
    {
      id: 1,
      title: "title",
      image: "/Images/image.png",
      price: 2000,
      logo: "/Images/Ellipse.png",
      Business: "clockb Bussiness",
    },
  ];
  return (
    <>
      <div className=" ">
        <div className="flex justify-center items-center p-4">
          <h1 className="text-trueGray-600 font-roboto font-semibold text-3xl ">
            Products
          </h1>
        </div>
        <div className="">
          <div className=" flex flex-col md:flex-row items-center">
            {Featured.map((item) => (
              <FeaturedCard
                key={item.id}
                colSpan={1}
                title={item.title}
                image={item.image}
                logo={item.logo}
                price={item.price}
                Business={item.Business}
              />
            ))}
          </div>

          {/* second section of products */}

          <div className="flex flex-col md:flex-row items-center ">
            {Featured.map((item) => (
              <FeaturedCard
                key={item.id}
                colSpan={1}
                title={item.title}
                image={item.image}
                logo={item.logo}
                price={item.price}
                Business={item.Business}
              />
            ))}
          </div>

          {/* third section of products */}

          <div className=" flex flex-col md:flex-row items-center">
            {Featured.map((item) => (
              <FeaturedCard
                key={item.id}
                colSpan={1}
                title={item.title}
                image={item.image}
                logo={item.logo}
                price={item.price}
                Business={item.Business}
              />
            ))}
          </div>
        </div>

        {/* for button  */}
        <div className="flex justify-center items-center p-10">
          <button className="text-blue-700 font-xl bg-white border border-blue-700 px-9 py-2 rounded-md">
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowProducts;
