import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Risk from "@public/assets/images/risk.webp";
import Finance from "@public/assets/images/finance.webp";

const Second = () => {
  return (
    <div className="bg-slate-50 w-full">
      <div className="mx-4 lg:mx-28">
        {/* part 1 */}
        <div className="pt-28">
          <div className="md:grid md:grid-cols-2 mx-4 gap-x-28">
            <video
              src="https://adyen.getbynder.com/m/6b8c3ed4ea42677a/original/New-video-AD0106_HomepageHike_PaymentsAnimations_07.mp4"
              className="md:flex self-center"
              block
            ></video>
            <div className="self-center block text-left content-center md:ml-10">
              <div>
                <button className="label hover:cursor-text">Payments</button>
                <h2 className="my-6">Get paid everywhere</h2>
                <p className="text-lg font-light tracking-wide my-3">
                  Let your customers pay wherever and however they prefer. Work
                  with one provider to{" "}
                  <span className="underline hover:text-green-400 hover:cursor-pointer	">
                    accept, process, and settle payments
                  </span>{" "}
                  .
                </p>
              </div>
              <div className="pt-12">
                <div className="flex mb-3">
                  <h5 className="font-semibold text-green-500 hover:text-green-600 hover:cursor-pointer hover:pr-1">
                    Online payments
                  </h5>
                  <MdKeyboardArrowRight
                    className="self-center font-semibold text-green-500  hover:text-green-600 hover:cursor-pointer"
                    size={23}
                  />
                </div>

                <h5>Accept payments on your website and in-app</h5>
              </div>
              <div className="pt-8">
                <div className="flex mb-3">
                  <h5 className="font-semibold text-green-500 hover:text-green-600 hover:cursor-pointer hover:pr-1">
                    In-person payments
                  </h5>
                  <MdKeyboardArrowRight
                    className="self-center font-semibold text-green-500  hover:text-green-600 hover:cursor-pointer"
                    size={23}
                  />
                </div>

                <h5>
                  Enhance your point of sale setup and choose a terminal for any
                  need.
                </h5>
              </div>{" "}
              <div className="pt-8">
                <div className="flex mb-3">
                  <h5 className="font-semibold text-green-500 hover:text-green-600 hover:cursor-pointer hover:pr-1">
                    Unified Commerce
                  </h5>
                  <MdKeyboardArrowRight
                    className="self-center font-semibold text-green-500  hover:text-green-600 hover:cursor-pointer"
                    size={23}
                  />
                </div>

                <h5>
                  Connect your online and in-store payment data in one system.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <hr className=" mx-4 my-24 border-gray-300" />

        {/* part 2 */}

        <div className="w-full place-items-center">
          {/* title */}
          <div className=" md:mx-auto md:w-2/3 mx-4  mb-8">
            <button className="label flex m-auto hover:cursor-text place-self-center mb-8">
              Data
            </button>
            <h2 className=" m-auto text-center ">
              Make smarter decisions with millions of insights
            </h2>
            <p className=" m-auto text-lg font-light tracking-wide my-3 text-center ">
              Adyen’s unique data ecosystem reveals opportunities where your
              business can grow.
            </p>
            <p className="text-lg text-center font-light tracking-wide my-3">
              Coupled with our machine learning technology, we help you{" "}
              <span className="underline hover:text-green-400 hover:cursor-pointer	">
                protect your business from fraud
              </span>
              , provide{" "}
              <span className="underline hover:text-green-400 hover:cursor-pointer	">
                customer-friendly authentication
              </span>
              , and{" "}
              <span className="underline hover:text-green-400 hover:cursor-pointer	">
                increase approval rates
              </span>
              .
            </p>
          </div>
          <Image
            src={Risk}
            className="mx-auto object-scale-down md:w-4/5 w-9/10 justify-center"
          />
        </div>

        <hr className=" mx-4 my-24 border-gray-300" />

        {/* part 3 */}
        <div className="mb-24">
          <div className="md:grid md:grid-cols-2 mx-4 gap-x-28">
            <Image src={Finance} className="flex md:hidden mb-5" />

            <div className="self-center block text-left content-center">
              <div>
                <button className="label hover:cursor-text">
                  Finance & operations
                </button>
                <h2 className="my-6">Take full control of your funds</h2>
                <p className="text-lg font-light tracking-wide my-3">
                  Optimize your finances and increase automation with our
                  banking infrastructure. Especially valuable for platforms and
                  marketplaces looking to payout users faster in a preferred
                  currency.
                </p>
              </div>
              <div className="pt-12">
                <h5 className="font-semibold hover:cursor-text">
                  Generate your own physical or virtual payment cards to send
                  funds instantly and manage spending.
                </h5>
                <div className="flex mt-5 mb-3">
                  <h5 className="font-semibold text-green-500 hover:text-green-600 hover:cursor-pointer hover:pr-1">
                    Discover Adyen issuing
                  </h5>
                  <MdKeyboardArrowRight
                    className="self-center font-semibold text-green-500  hover:text-green-600 hover:cursor-pointer"
                    size={23}
                  />
                </div>
              </div>
            </div>
            <Image src={Finance} className="hidden md:flex self-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
