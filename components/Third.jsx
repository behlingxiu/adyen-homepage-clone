import React from "react";
import Tabs from "@components/Tabs.jsx";
import Image from "next/image";
import Etsy from "@public/assets/images/etsy.png";
import lightspeed from "@public/assets/images/lightspeed.png";
import bigcommerce from "@public/assets/images/bigcommerce.png";
import ubereats from "@public/assets/images/ubereats.png";
import pinterest from "@public/assets/images/pinterest.png";
import vinted from "@public/assets/images/vinted.png";

const Third = () => {
  return (
    <div className="w-full">
      <div className="pt-20 mx-4 lg:mx-28">
        {/* title */}
        <div className="mx-4 pb-14">
          <h2>Solutions built for your business model</h2>
          <p className="text-lg font-light tracking-wide my-3 w-3/4">
            Ambition looks different to every business. Learn how Adyen is
            helping the world’s leading brands realize theirs.
          </p>
        </div>

        {/* tabs */}
        <div>
          <Tabs />
        </div>

        {/* part 2 - brands logosss */}
        <div className="px-4 mt-10 mb-28">
          <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
            <Image src={Etsy} />
            <Image src={lightspeed} />
            <Image src={bigcommerce} />
            <Image src={ubereats} />
            <Image src={pinterest} />
            <Image src={vinted} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
