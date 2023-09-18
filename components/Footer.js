import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white h-[330px] ">
      <div className="flex">
        <div className="ml-[100px] pt-12">
          <div>
            <Image
              src="/Images/Bgyan.png"
              alt="logo"
              width={130.645}
              height={50}
            />
          </div>
          <div>
            <span className="font-roboto text-xl leading-[1.2] font-bold">
              Social Community Platform
            </span>
          </div>
          <div className="w-[380px]">
            <p className="font-roboto text-black bg-opacity-70 leading-[1.5] text-sm">
              Discover and unleash the hidden capabilities of your business,
              igniting its true potential and propelling it towards remarkable
              growth and undeniable success.
            </p>
          </div>
        </div>

        {/* second column goes here */}

        <div className=" mt-12 ml-[10rem]">
          <div className="flex space-x-28">
            {/* navigation */}
            <div className="">
              <ui className="list-none">
                <div>
                  <li className="pb-2 font-roboto text-xl font-semibold">
                    Navigation
                  </li>
                </div>
                <div className="space-y-2 font-roboto text-sm">
                  <li>Home </li>
                  <li>About Us </li>
                  <li>Service </li>
                </div>
              </ui>
            </div>
            {/* help */}
            <div>
              <ui className="list-none">
                <div>
                  <li className="pb-2 font-roboto text-xl font-semibold">
                    Help
                  </li>
                </div>
                <div className="space-y-2 font-roboto text-sm">
                  <li>FAQs </li>
                  <li>Privacy Policy</li>
                  <li>Support</li>
                </div>
              </ui>
            </div>
            {/* contactus */}
            <div>
              <ui className="list-none">
                <div>
                  <li className="pb-2 font-roboto text-xl font-semibold">
                    Contact Us
                  </li>
                </div>
                <div className="space-y-2 font-roboto text-sm">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="relative  "
                    >
                      <circle cx="12.5" cy="12.5" r="12.5" fill="#6B788E" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      className="  absolute m-1 "
                    >
                      <path
                        d="M9.43358 12.0626C8.91509 11.9765 8.39219 11.7625 7.87236 11.4311C7.36543 11.1066 6.87019 10.6944 6.40156 10.216C5.93837 9.73372 5.5021 9.2088 5.10107 8.6473C4.70634 8.07742 4.36264 7.48773 4.07198 6.89269C3.78015 6.27861 3.56633 5.67747 3.44085 5.10985C3.30846 4.50338 3.29194 3.93498 3.38872 3.41839C3.45552 3.0618 3.58314 2.73416 3.76613 2.43928C3.95541 2.13602 4.21842 1.86856 4.54713 1.65442C4.96553 1.36561 5.40186 1.2589 5.83317 1.33048C6.01211 1.36017 6.18794 1.43178 6.33024 1.53081C6.49377 1.6428 6.62207 1.79136 6.70136 1.97422L7.4858 3.6458C7.55732 3.79437 7.60675 3.93456 7.63324 4.07094C7.66719 4.21798 7.67362 4.36046 7.64878 4.49304C7.61623 4.66676 7.53407 4.82754 7.40774 4.97155C7.29665 5.10037 7.16874 5.21393 7.02751 5.30912L6.65469 5.58193C6.65671 5.5964 6.65959 5.60631 6.66246 5.61621C6.69954 5.72136 6.77883 5.90421 6.94364 6.1861C7.12051 6.47943 7.2879 6.74761 7.45871 6.9975C7.67975 7.30758 7.86518 7.55519 8.0437 7.76394C8.26413 8.02678 8.41335 8.16467 8.50487 8.23171L8.49141 8.25305L8.88803 7.97948C9.05682 7.86136 9.21417 7.77906 9.36009 7.73257C9.64157 7.61902 9.9679 7.64489 10.2642 7.83077C10.3741 7.90085 10.4898 7.99075 10.6094 8.1096L11.9306 9.44131C12.079 9.58377 12.1755 9.75063 12.2163 9.93653C12.2526 10.1217 12.2548 10.287 12.2248 10.447C12.1837 10.6665 12.0921 10.8775 11.9572 11.0673C11.8223 11.257 11.6696 11.4155 11.4873 11.5549C11.1719 11.7995 10.8488 11.958 10.4936 12.0358C10.153 12.1113 9.79607 12.1227 9.43358 12.0626ZM5.70469 2.01622C5.45233 1.97434 5.19777 2.04522 4.93182 2.22735C4.68393 2.3889 4.49684 2.5794 4.3614 2.79733C4.2205 3.01906 4.12751 3.26288 4.07698 3.53261C3.99733 3.95777 4.01177 4.43626 4.12458 4.94521C4.24027 5.46407 4.43513 6.01492 4.70799 6.57872C4.98085 7.14251 5.30675 7.70097 5.67909 8.23885C6.05314 8.76759 6.46989 9.27042 6.90983 9.72524C7.33771 10.1686 7.79221 10.5457 8.25754 10.8398C8.97963 11.3037 9.69922 11.5033 10.352 11.3524C10.604 11.2952 10.8379 11.1832 11.0654 11.0041C11.1923 10.9073 11.2981 10.7976 11.3943 10.6627C11.4708 10.5576 11.5206 10.4433 11.5428 10.3244C11.5565 10.2513 11.5565 10.1758 11.5352 10.0875C11.5165 10.026 11.4809 9.97112 11.4324 9.92899L10.1112 8.59728C10.0314 8.51805 9.95738 8.45862 9.88537 8.41368C9.79213 8.35578 9.75855 8.30778 9.58455 8.3779C9.48422 8.40838 9.38878 8.46325 9.27988 8.53945L8.86693 8.82445C8.65544 8.96848 8.37242 8.96393 8.17592 8.85119L8.06231 8.77577C7.89302 8.64398 7.7019 8.45199 7.49726 8.20591C7.31213 7.98192 7.11464 7.72289 6.87868 7.39147C6.69667 7.12558 6.51723 6.84597 6.33375 6.53741C6.1652 6.25018 6.04945 6.00943 5.9865 5.81514L5.95713 5.66886C5.9493 5.55914 5.95126 5.49819 5.96325 5.43418C5.99408 5.2696 6.08114 5.13321 6.21726 5.03796L6.6282 4.73848C6.7371 4.66228 6.82219 4.58684 6.88264 4.51674C6.93048 4.4634 6.95367 4.41539 6.96223 4.36968C6.96908 4.3331 6.9656 4.27596 6.95293 4.21729C6.93452 4.13882 6.89946 4.04815 6.8515 3.95063L6.06791 2.27448C6.03647 2.20593 5.98703 2.14728 5.92469 2.10458C5.85727 2.0604 5.7827 2.02917 5.70469 2.01622ZM8.49055 8.25762L8.3589 8.55631L8.54274 8.25685C8.52066 8.24848 8.50144 8.25 8.49055 8.25762ZM11.0288 6.19941C10.8407 6.16819 10.7138 5.98687 10.7489 5.79943C10.7797 5.63485 10.6788 5.26457 10.4583 4.9263C10.2415 4.59336 9.97498 4.37471 9.72262 4.33283C9.53449 4.30161 9.40761 4.12029 9.44272 3.93285C9.47784 3.74541 9.66296 3.61587 9.85109 3.64709C10.2962 3.72095 10.7196 4.03634 11.0466 4.53842C11.3513 5.0085 11.5057 5.54792 11.4372 5.91365C11.402 6.10109 11.2169 6.23063 11.0288 6.19941ZM12.6347 6.46593C12.4466 6.43471 12.3197 6.25338 12.3548 6.06595C12.6503 4.48874 11.6054 2.99547 10.0224 2.73276C9.83426 2.70154 9.70737 2.52022 9.74249 2.33278C9.77761 2.14534 9.96273 2.0158 10.1509 2.04702C12.1101 2.37217 13.4088 4.22808 13.0431 6.18017C13.008 6.3676 12.8229 6.49715 12.6347 6.46593Z"
                        fill="white"
                      />
                    </svg>
                    <div className="">
                      <li>+977 01 123456 </li>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="relative"
                    >
                      <circle cx="12.5" cy="12.5" r="12.5" fill="#6B788E" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      className=" absolute m-2"
                    >
                      <path
                        d="M1 11C0.725001 11 0.489501 10.8775 0.293501 10.6325C0.0975008 10.3875 -0.000332484 10.0933 8.48897e-07 9.75V2.25C8.48897e-07 1.90625 0.0980009 1.61188 0.294001 1.36688C0.490001 1.12188 0.725334 0.999584 1 1H9C9.275 1 9.5105 1.1225 9.7065 1.3675C9.9025 1.6125 10.0003 1.90667 10 2.25V9.75C10 10.0937 9.902 10.3881 9.706 10.6331C9.51 10.8781 9.27467 11.0004 9 11H1ZM5 6.625L1 3.5V9.75H9V3.5L5 6.625ZM5 5.375L9 2.25H1L5 5.375ZM1 3.5V2.25V9.75V3.5Z"
                        fill="white"
                      />
                    </svg>
                    <div>
                      {" "}
                      <li>bgyan@gmail.com </li>
                    </div>
                  </div>
                </div>
              </ui>
            </div>
          </div>
        </div>
      </div>

      {/* for the last social icons */}
      <div>
        <div className="flex justify-center items-center mt-16 space-x-2">
          {/* facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M28.8 14.4361C28.8 6.46737 22.3488 0 14.4 0C6.4512 0 0 6.46737 0 14.4361C0 21.4232 4.9536 27.2409 11.52 28.5835V18.7669H8.64V14.4361H11.52V10.8271C11.52 8.0409 13.7808 5.77444 16.56 5.77444H20.16V10.1053H17.28C16.488 10.1053 15.84 10.7549 15.84 11.5489V14.4361H20.16V18.7669H15.84V28.8C23.112 28.0782 28.8 21.9284 28.8 14.4361Z"
              fill="#232C65"
            />
          </svg>
          {/* twitter */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <rect width="30" height="30" rx="15" fill="#232C65" />
            <path
              d="M19.8134 7H22.1135L17.0884 13.3538L23 22H18.3706L14.7452 16.7562L10.597 22H8.29551L13.6703 15.2038L8 7H12.7455L16.0225 11.7931L19.812 7H19.8134ZM19.0061 20.4769H20.2806L12.0537 8.44308H10.686L19.0061 20.4769Z"
              fill="white"
            />
          </svg>
          {/* linkedin */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_2112_39068)">
              <path
                d="M14.9996 0.600098C7.04661 0.600098 0.599609 7.0471 0.599609 15.0001C0.599609 22.9531 7.04661 29.4001 14.9996 29.4001C22.9526 29.4001 29.3996 22.9531 29.3996 15.0001C29.3996 7.0471 22.9526 0.600098 14.9996 0.600098ZM11.4746 20.9686H8.55861V11.5846H11.4746V20.9686ZM9.99861 10.4326C9.07761 10.4326 8.48211 9.7801 8.48211 8.9731C8.48211 8.1496 9.09561 7.5166 10.0361 7.5166C10.9766 7.5166 11.5526 8.1496 11.5706 8.9731C11.5706 9.7801 10.9766 10.4326 9.99861 10.4326ZM22.1246 20.9686H19.2086V15.7681C19.2086 14.5576 18.7856 13.7356 17.7311 13.7356C16.9256 13.7356 16.4471 14.2921 16.2356 14.8276C16.1576 15.0181 16.1381 15.2881 16.1381 15.5566V20.9671H13.2206V14.5771C13.2206 13.4056 13.1831 12.4261 13.1441 11.5831H15.6776L15.8111 12.8866H15.8696C16.2536 12.2746 17.1941 11.3716 18.7676 11.3716C20.6861 11.3716 22.1246 12.6571 22.1246 15.4201V20.9686Z"
                fill="#232C65"
              />
            </g>
            <defs>
              <clipPath id="clip0_2112_39068">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="font-roboto text-sm leading-[1.5] flex justify-center items-center mt-2 ">
          <p> Copyright © 2023 All rights reserved. b-Gyan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
