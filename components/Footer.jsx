import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { RiGlobalLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full bg-slate-950 ">
      <div className="mx-4 lg:mx-28 pt-20 pb-10">
        <div className="md:flex md:justify-between p-10">
          <footer className="footer text-base-content mx-4 grid lg:grid-cols-4 grid-cols-2 lg:w-2/3 w-full">
            <nav className=" gap-y-3 col-span-1">
              <h6 className="text-white font-bold">About</h6>
              <a className="link link-hover text-gray-300">Press & media</a>
              <a className="link link-hover text-gray-300">Careers</a>
              <a className="link link-hover text-gray-300">
                Investor Relations
              </a>
              <a className="link link-hover text-gray-300">Partner with us</a>
              <a className="link link-hover text-gray-300">Contact</a>
            </nav>
            <nav className="gap-y-3 col-span-1">
              <h6 className="text-white font-bold">Products</h6>
              <a className="link link-hover text-gray-300">Payments</a>
              <a className="link link-hover text-gray-300">Risk management</a>
              <a className="link link-hover text-gray-300">Authentication</a>
              <a className="link link-hover text-gray-300">Issuing</a>
              <a className="link link-hover text-gray-300">Pricing</a>
            </nav>
            <nav className="gap-y-3 col-span-1">
              <h6 className="text-white font-bold">Resources</h6>
              <a className="link link-hover text-gray-300">Documentation</a>
              <a className="link link-hover text-gray-300">Academy</a>
              <a className="link link-hover text-gray-300">Knowledge Hub</a>
              <a className="link link-hover text-gray-300">Newsletter</a>
            </nav>
            <nav className="gap-y-3 col-span-1">
              <h6 className="text-white font-bold">Platform</h6>
              <a className="link link-hover text-white">Infrastructure</a>
              <a className="link link-hover text-white">Licenses</a>
              <a className="link link-hover text-white">Legal</a>
              <a className="link link-hover text-white">Terms & Conditions</a>
              <a className="link link-hover text-white">
                Responsible disclosure policy
              </a>
            </nav>
          </footer>
          {/* socials logo */}

          <div className="flex gap-3 pt-8 md:pt-0">
            <div className="p-2.5 rounded-md border border-gray-500 hover:bg-white hover:text-black hover:cursor-pointer h-12 ">
              <IoLogoFacebook
                className="text-gray-400 hover:text-black
              "
                size={25}
              />
            </div>
            <div className="p-2.5 rounded-md border border-gray-500 hover:bg-white hover:text-black hover:cursor-pointer h-12">
              <IoLogoLinkedin
                className="text-gray-400 hover:text-black
              "
                size={25}
              />
            </div>
            <div className="p-2.5 rounded-md border border-gray-500 hover:bg-white hover:text-black hover:cursor-pointer h-12">
              <IoLogoTwitter
                className="text-gray-400 hover:text-black
              "
                size={25}
              />
            </div>
          </div>
        </div>

        <hr className=" mx-4 my-16 border-gray-600" />

        {/* bottom */}
        <div className="w-full mx-4 ">
          <div className="w-full flex justify-between">
            <h5 className="text-gray-500 text-sm self-center">
              Privacy · Cookies · Disclaimer · © 2024 Adyen
            </h5>

            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-white rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              <RiGlobalLine className="px-1" size={35} />
              Global (English)
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                className="py-2 text-sm text-gray-700 "
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                    Earnings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
