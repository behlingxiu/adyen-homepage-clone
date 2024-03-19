import React from "react";
import Image from "next/image";
import Uber from "@public/assets/images/uber-logobar1-svg.webp";
import Mango from "@public/assets/images/mango-logobar2-svg.webp";
import Ebay from "@public/assets/images/ebay-logobar3-svg.webp";
import Spotify from "@public/assets/images/spotify-logobar4-svg.webp";
import Mcd from "@public/assets/images/mcdonalds-logobar5-svg.webp";
import Wix from "@public/assets/images/wix-logobar6-svg.webp";
import Circle from "@public/assets/images/circle.png";
import Square from "@public/assets/images/square.png";
import Triangle from "@public/assets/images/triangle.png";
import Card1 from "@public/assets/images/card1.jpeg";
import Card2 from "@public/assets/images/card2.jpeg";
import Card3 from "@public/assets/images/card3.jpeg";

import { Link } from "@mui/material";

const First = () => {
  return (
    <div className=" pt-14 mx-4 lg:mx-28">
      {/* first part */}
      <div className="md:grid md:grid-cols-5 block content-center gap-20 pb-20">
        {/* word */}
        <div className="block md:flex md:col-span-3 ml-4">
          <div className="self-center text-left">
            <h1
              className="lg:text-6xl text-4xl font-semibold tracking-wide "
              style={{ "line-height": "120%" }}
            >
              Engineered for ambition
            </h1>
            <p className="text-lg font-light tracking-wide my-3">
              End-to-end payments, data, and financial management in a single
              solution. Meet the financial technology platform that helps you
              realize your ambitions faster.
            </p>
            <button className="btn bg-green-500 hover:bg-green-600 text-white font-medium py-3.5 px-6 mt-1 rounded-md ">
              Talk to our team
            </button>
          </div>
        </div>
        {/* video */}
        <div className="block md:col-span-2 mx-4 mt-10">
          <iframe
            autoPlay
            muted
            loop
            className="w-full aspect-[3/4]"
            // width="550"
            // height="630"
            // style={{ overflow: "hidden" }}
            allow="autoplay"
            src="https://adyen.getbynder.com/m/1eed1ab2e24580/original/Homepage-header.mp4"
            // frameborder="0"
          ></iframe>
          {/* <Video
            src="https://adyen.getbynder.com/m/1eed1ab2e24580/original/Homepage-header.mp4"
            className="w-full aspect-[3/4]"
          ></Video> */}
        </div>
      </div>

      {/* part 2 - brands logosss */}
      <div className="px-4 mt-10 mb-24">
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-10">
          <Image src={Uber} />
          <Image src={Mango} />
          <Image src={Ebay} />
          <Image src={Spotify} />
          <Image src={Mcd} />
          <Image src={Wix} />
        </div>
      </div>

      <hr className=" mx-4 my-24 border-gray-300" />

      {/* part 3 */}
      <div>
        {/* title */}
        <div className="mx-4 mb-24">
          <h2>
            One platform to accept payments, protect revenue,
            <br />
            and control your finances.
          </h2>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-24">
          {/* card 1 */}
          <div className="mx-4 my-4">
            {/* title */}
            <div>
              <Image src={Circle} height={25} className="block mb-8" />
              <h3>Expand your business</h3>
              <h5 className="my-4">
                Easily add more
                <span className="underline hover:cursor-pointer hover:underline-offset-4">
                  {" "}
                  payment methods{" "}
                </span>
                and grow into new markets with local acquiring.
              </h5>
            </div>

            {/* photo */}
            <div className="md:w-full w-1/2 bg-slate-50 hover:cursor-pointer mt-12">
              <Image src={Card1} className="w-full my-4" />
              <h5 className="py-5 px-6 text-gray-700 hover:underline">
                Learn how Lightspeed’s gross payment volume increased 56% YoY
                with their adoption of embedded payments.
              </h5>
            </div>
          </div>

          {/* card 2 */}
          <div className="mx-4 my-4">
            {/* title */}
            <div>
              <Image src={Square} height={25} className="block mb-8" />
              <h3>Connect online and offline</h3>
              <h5 className="my-4">
                Create superior customer experiences using cross-channel
                insights.
              </h5>
            </div>

            {/* photo */}
            <div className="md:w-full w-1/2 bg-slate-50 hover:cursor-pointer mt-12">
              <Image src={Card2} className="w-full my-4" />
              <h5 className="py-5 px-6 text-gray-700 hover:underline">
                Learn how True Alliance, a leading Australian retailer, saved
                over $1.4m annually with Unified Commerce.
              </h5>
            </div>
          </div>

          {/* card 3 */}
          <div className="mx-4 my-4">
            {/* title */}
            <div>
              <Image src={Triangle} height={25} className="block mb-8" />
              <h3>Manage fraud at scale</h3>
              <h5 className="my-4">
                Protect your business by detecting and responding to fraud
                without impacting real transactions.
              </h5>
            </div>

            {/* photo */}
            <div className="md:w-full w-1/2 bg-slate-50 hover:cursor-pointer mt-12">
              <Image src={Card3} className="w-full my-4" />
              <h5 className="py-5 px-6 text-gray-700 hover:underline">
                Learn how Bolt lowered their transaction costs, reduced fraud,
                increased authorization rates through network tokens and 3Ds.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
