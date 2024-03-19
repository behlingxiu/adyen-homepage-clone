"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Logo from "@public/assets/images/Adyen_Corporate_Logo.svg.png";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    var prevScrollpos = window.scrollY;

    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <nav
      className={`${
        isActive ? "fixed x-10 transition-all bg-white" : "bg-none"
      } w-full pr-4`}
    >
      <div className="flex mx-4 lg:mx-28 justify-between">
        <div className="flex justify-start">
          <Image src={Logo} height={45} className="p-4" />
        </div>
        <div className="w-full flex">
          <div className="hidden w-full xl:flex items-center justify-between font-light text-sm tracking-wide">
            {/* products ... drop down menu */}
            <div className="px-2">
              <ul className="flex gap-5">
                <li>
                  <a href="#" className="flex">
                    Products
                    <IoIosArrowDown
                      className="self-center pl-2 font-black"
                      size={22}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex">
                    Bussiness we serve
                    <IoIosArrowDown
                      className="self-center pl-2 font-black"
                      size={22}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex">
                    About
                    <IoIosArrowDown
                      className="self-center pl-2 font-black"
                      size={22}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex">
                    Documentation & resources
                    <IoIosArrowDown
                      className="self-center pl-2 font-black"
                      size={22}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-6">
              <IoIosSearch size={30} className="flex self-center" />
              <button className="font-light">Log in</button>
              <button className="btn bg-green-500 hover:bg-green-600 text-white font-medium py-3.5 px-6 rounded-md ">
                Contact us
              </button>
            </div>
          </div>

          {/* Dropdown hamburger in small device only */}

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-full h-10 text-sm text-gray-900 rounded-lg xl:hidden justify-end self-center"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <RxHamburgerMenu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
