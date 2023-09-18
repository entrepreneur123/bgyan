"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const toggleShopDropdown = () => {
    setShopDropdownOpen(!isShopDropdownOpen);
  };

  return (
    <nav className="bg-[#ffffff] p-4 text-black flex justify-between items-center w-full  ">
      <div className="text-2xl font-bold ml-10">
        <Link href="/">
          {" "}
          <Image src="/Images/Bgyan.png" alt="logo" width={100} height={30} />
        </Link>
      </div>
      <div className="space-x-9">
        <Link href="" className="">
          Home
        </Link>
        <Link href="">About Us</Link>
        <div className="relative inline-flex items-center">
          <button
            onClick={toggleShopDropdown}
            className=" flex items-center focus:outline-none hover:bg-slate-100 py-1 px-4 rounded-md"
          >
            Shop{""}
            <span
              className={`ml-1 transition-transform transform  ${
                isShopDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    d="M3 11.75L9 5.75L15 11.75"
                    stroke="#78797B"
                    stroke-width="2"
                    stroke-linecap="square"
                  />
                </g>
              </svg>
            </span>
          </button>
          {isShopDropdownOpen && (
            <div className=" absolute left-0 top-7 mt-2 p-4 bg-white text-black border rounded-md shadow-lg">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/products"
                  className="hover:bg-slate-100 py-1 px-2 rounded-md "
                >
                  products
                </Link>
                <Link
                  href="/services"
                  className="hover:bg-slate-100 py-1 px-2 rounded-md"
                >
                  Services
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link href="">News and Article</Link>
        <Link href="">Events</Link>
      </div>
      <div className="space-x-4">
        <Link href="" className="text-slate-500">
          Login
        </Link>
        <Link
          href=""
          className="bg-[#4A57AD] text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
