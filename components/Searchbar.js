"use client";
import React, { useState } from "react";
import Link from "next/link";

const Searchbar = () => {
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!isCategoryDropdownOpen);
  };
  return (
    <nav className="flex bg-white  border-t border-slate-100 h-16 ">
      <div className="container mx-auto flex flex-col md:flex-row gap-32 h-16">
        <div className=" relative inline-flex px-6 py-2 bg-orange-200 items-center space-x-3 ml-14 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 6H19M5 12H19M5 18H19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <button
            onClick={toggleCategoryDropdown}
            className=" flex items-center  "
          >
            Category{""}
            <span
              className={`ml-1 transition-transform transform  ${
                isCategoryDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.99998 6.0417L12 12.2917L17 6.0417C17.0656 5.95963 17.1501 5.88913 17.2484 5.83424C17.3468 5.77935 17.4571 5.74114 17.5732 5.7218C17.6893 5.70245 17.8088 5.70235 17.9249 5.72149C18.041 5.74064 18.1515 5.77865 18.25 5.83337C18.3485 5.88809 18.4331 5.95843 18.4989 6.0404C18.5648 6.12236 18.6106 6.21433 18.6339 6.31105C18.6571 6.40778 18.6572 6.50737 18.6342 6.60414C18.6113 6.70091 18.5656 6.79296 18.5 6.87504L12.832 13.96C12.7407 14.0742 12.6169 14.1677 12.4718 14.2325C12.3267 14.2972 12.1646 14.3311 12 14.3311C11.8354 14.3311 11.6733 14.2972 11.5282 14.2325C11.383 14.1677 11.2593 14.0742 11.168 13.96L5.49998 6.87504C5.43432 6.79296 5.3887 6.70091 5.36573 6.60414C5.34276 6.50737 5.34288 6.40778 5.36609 6.31105C5.38931 6.21433 5.43516 6.12236 5.50103 6.0404C5.56689 5.95843 5.65149 5.88809 5.74998 5.83337C5.84847 5.77865 5.95893 5.74064 6.07505 5.72149C6.19117 5.70235 6.31068 5.70245 6.42676 5.7218C6.54283 5.74114 6.65319 5.77935 6.75155 5.83424C6.8499 5.88913 6.93432 5.95963 6.99998 6.0417Z"
                  fill="black"
                />
              </svg>
            </span>
          </button>
          {isCategoryDropdownOpen && (
            <div className=" absolute left-0 top-12 mt-2 p-2 bg-white text-black border rounded-md shadow-lg">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/products"
                  className=" py-1 px-1 whitespace-nowrap flex items-center "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      d="M6.25 5C6.25 5 5.60833 5.965 5.41667 6.66667C4.98 8.2675 6.16667 9.17583 6.25 10.8333C6.38333 13.4792 5 17.5 5 17.5H15C15 17.5 13.6167 13.4792 13.75 10.8333C13.8333 9.17583 15.02 8.2675 14.5833 6.66667C14.3917 5.965 13.75 5 13.75 5M6.25 5C6.25 5 7.5 5.83333 10 5.83333C12.5 5.83333 13.75 5 13.75 5M6.25 5V2.5M13.75 5V2.5"
                      stroke="#78797B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Women's Fashion
                </Link>
                <Link
                  href="/services"
                  className="py-1 px-1 whitespace-nowrap flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      d="M13.333 17.5H6.66636C6.44535 17.5 6.23338 17.4122 6.0771 17.2559C5.92082 17.0996 5.83303 16.8877 5.83303 16.6667V10.0583L4.74969 10.9333C4.42469 11.25 3.89969 11.25 3.57469 10.9333L1.21636 8.575C1.13911 8.49791 1.07782 8.40633 1.036 8.30552C0.994181 8.20471 0.972656 8.09664 0.972656 7.9875C0.972656 7.87836 0.994181 7.77029 1.036 7.66948C1.07782 7.56867 1.13911 7.47709 1.21636 7.4L6.11636 2.5H7.49969C7.49969 3.41667 8.61636 4.16667 9.99969 4.16667C11.383 4.16667 12.4997 3.41667 12.4997 2.5H13.883L18.783 7.4C19.108 7.725 19.108 8.25 18.783 8.575L16.4247 10.9333C16.0997 11.25 15.5747 11.25 15.2497 10.9333L14.1664 10.0583V16.6667C14.1664 16.8877 14.0786 17.0996 13.9223 17.2559C13.766 17.4122 13.554 17.5 13.333 17.5ZM17.0164 7.98333L13.4247 4.4C13.1664 4.69167 12.858 4.95 12.4997 5.16667C11.7997 5.58333 10.9414 5.83333 9.99969 5.83333C8.58303 5.83333 7.32469 5.26667 6.57469 4.4L2.98303 7.98333L4.16636 9.16667L6.66636 7.5H7.49969V15.8333H12.4997V7.5H13.333L15.833 9.16667L17.0164 7.98333Z"
                      fill="#78797B"
                    />
                  </svg>
                  Men's Fashion
                </Link>
                <Link
                  href="/services"
                  className=" py-1 px-1 whitespace-nowrap flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                  >
                    <g clip-path="url(#clip0_1449_8280)">
                      <path
                        d="M13.125 0.0195312L20 3.45703V11.123L18.75 10.498V4.85352L13.75 7.35352V9.87305L12.5 10.498V7.35352L7.5 4.85352V7.07031L6.25 6.44531V3.45703L13.125 0.0195312ZM13.125 6.26953L14.8535 5.40039L10.332 2.8125L8.27148 3.84766L13.125 6.26953ZM16.2012 4.73633L17.9785 3.84766L13.125 1.41602L11.6699 2.14844L16.2012 4.73633ZM11.25 11.123L10 11.748V11.7383L6.25 13.6133V18.0566L10 16.1719V17.5781L5.625 19.7656L0 16.9434V10.3418L5.625 7.5293L11.25 10.3418V11.123ZM5 18.0566V13.6133L1.25 11.7383V16.1719L5 18.0566ZM5.625 12.5293L9.22852 10.7324L5.625 8.92578L2.02148 10.7324L5.625 12.5293ZM11.25 12.5195L15.625 10.332L20 12.5195V17.666L15.625 19.8535L11.25 17.666V12.5195ZM15 18.1445V15.166L12.5 13.916V16.8945L15 18.1445ZM18.75 16.8945V13.916L16.25 15.166V18.1445L18.75 16.8945ZM15.625 14.082L17.9785 12.9004L15.625 11.7285L13.2715 12.9004L15.625 14.082Z"
                        fill="#78797B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1449_8280">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Handcrafts
                </Link>
                <Link
                  href="/services"
                  className=" py-1 px-1 whitespace-nowrap flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      d="M10.0002 15.1567C13.6678 15.1567 16.641 12.1835 16.641 8.51583C16.641 4.8482 13.6678 1.875 10.0002 1.875C6.33258 1.875 3.35938 4.8482 3.35938 8.51583C3.35938 12.1835 6.33258 15.1567 10.0002 15.1567Z"
                      stroke="#78797B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.31212 10.0224C5.89813 9.10125 5.84933 8.05731 6.17558 7.1016C6.50184 6.14589 7.17881 5.3497 8.06963 4.87402M9.95713 15.1565V18.0836M6.29546 18.1253H13.5346"
                      stroke="#78797B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Beauty & health
                </Link>
                <Link
                  href="/services"
                  className=" py-1 px-1 whitespace-nowrap flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      d="M16 11.333C16 12.9243 15.3679 14.4504 14.2426 15.5756C13.1174 16.7009 11.5913 17.333 10 17.333C8.4087 17.333 6.88258 16.7009 5.75736 15.5756C4.63214 14.4504 4 12.9243 4 11.333C4.00061 10.1638 4.34296 9.02032 4.98493 8.04315C5.6269 7.06598 6.5405 6.29777 7.61333 5.83301L7.848 6.01567L8.88 6.81701C7.8698 7.06627 6.97195 7.64618 6.32929 8.46449C5.68663 9.2828 5.33605 10.2925 5.33333 11.333C5.33333 13.9063 7.42667 15.9997 10 15.9997C12.5733 15.9997 14.6667 13.9063 14.6667 11.333C14.6639 10.2925 14.3134 9.2828 13.6707 8.46449C13.028 7.64618 12.1302 7.06627 11.12 6.81701L12.3867 5.83301C13.4595 6.29777 14.3731 7.06598 15.0151 8.04315C15.657 9.02032 15.9994 10.1638 16 11.333ZM10 5.99967L13.3333 3.40634L12 1.33301H8L6.66667 3.40634L8.66667 4.96234L10 5.99967Z"
                      fill="#78797B"
                    />
                  </svg>
                  Jewelry & Watches
                </Link>
                <Link
                  href="/services"
                  className=" py-1 px-1 whitespace-nowrap flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.42094 3.542C7.44704 3.542 7.4735 3.54201 7.50033 3.54201H12.5003C12.5272 3.54201 12.5536 3.542 12.5797 3.542C13.2781 3.5419 13.7226 3.54183 14.1059 3.61807C15.6761 3.9304 16.9036 5.15787 17.2159 6.72811L16.6029 6.85004L17.2159 6.72811C17.274 7.01983 17.2878 7.34703 17.291 7.79467C18.2534 8.0664 18.9587 8.95101 18.9587 10.0003V12.0374C18.9587 13.3122 18.2938 14.4317 17.292 15.0681V15.8337C17.292 16.1789 17.0122 16.4587 16.667 16.4587C16.3218 16.4587 16.042 16.1789 16.042 15.8337V15.5626C15.8245 15.6038 15.6001 15.6253 15.3707 15.6253H4.62996C4.40052 15.6253 4.17612 15.6038 3.95866 15.5626V15.8337C3.95866 16.1789 3.67884 16.4587 3.33366 16.4587C2.98848 16.4587 2.70866 16.1789 2.70866 15.8337V15.0681C1.70682 14.4317 1.04199 13.3122 1.04199 12.0374V10.0003C1.04199 8.95101 1.74725 8.0664 2.70962 7.79467C2.71287 7.34703 2.72669 7.01983 2.78472 6.72811C3.09706 5.15787 4.32453 3.9304 5.89476 3.61807C6.27802 3.54183 6.72254 3.5419 7.42094 3.542ZM3.96005 7.79533C4.92122 8.06785 5.62533 8.95187 5.62533 10.0003V11.0003C5.62533 11.0234 5.64398 11.042 5.66699 11.042H14.3337C14.3567 11.042 14.3753 11.0234 14.3753 11.0003V10.0003C14.3753 8.95187 15.0794 8.06785 16.0406 7.79533C16.0372 7.3708 16.0261 7.15382 15.99 6.97197C15.7762 5.8976 14.9364 5.05775 13.862 4.84405C13.6156 4.79503 13.3047 4.79201 12.5003 4.79201H7.50033C6.69594 4.79201 6.38503 4.79503 6.13862 4.84405C5.06425 5.05775 4.2244 5.8976 4.0107 6.97197C3.97453 7.15382 3.9634 7.3708 3.96005 7.79533ZM3.33366 8.95867C2.75836 8.95867 2.29199 9.42505 2.29199 10.0003V12.0374C2.29199 13.3286 3.33873 14.3753 4.62996 14.3753H15.3707C16.6619 14.3753 17.7087 13.3286 17.7087 12.0374V10.0003C17.7087 9.42504 17.2423 8.95867 16.667 8.95867C16.0917 8.95867 15.6253 9.42504 15.6253 10.0003V11.0003C15.6253 11.7137 15.047 12.292 14.3337 12.292H5.66699C4.95362 12.292 4.37533 11.7137 4.37533 11.0003V10.0003C4.37533 9.42504 3.90896 8.95867 3.33366 8.95867Z"
                      fill="#78797B"
                    />
                  </svg>
                  Home & Appliances
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="text-center flex items-center ">
          <input
            type="text"
            z
            placeholder="Search products "
            className="border border-gray-300 bg-slate-100 text-sm  pt-2 pr-60 pb-2 pl-8 rounded-full  "
          />
        </div>
      </div>
    </nav>
  );
};

export default Searchbar;
