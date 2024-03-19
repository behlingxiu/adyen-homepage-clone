"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { createTheme } from "@mui/material/styles";
import { MdKeyboardArrowRight } from "react-icons/md";

import { green, lightGreen } from "@mui/material/colors";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { rgbToHex } from "@mui/material";
import Image from "next/image";
import Tab1 from "@public/assets/images/tab1.jpeg";
import Tab2 from "@public/assets/images/tab2.jpeg";
import Tab3 from "@public/assets/images/tab3.jpeg";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  const green = theme.palette.primary.main;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            //   indicatorColor={green}
          >
            <Tab
              //   TabIndicatorProps={{
              //     style: {
              //       backgroundColor: "green",
              //     },
              //   }}
              label="Digital businessess"
              value="1"
            />
            <Tab label="Omnichannel" value="2" />
            <Tab label="Platform & marketplaces" value="3" />
          </TabList>
        </Box>
        {/* panel 1 */}
        <TabPanel value="1">
          <div className="md:grid md:grid-cols-2 ">
            <Image src={Tab1} className="my-5 md:hidden block" />

            <div className="self-center w-3/4">
              <h2>Digital businesses</h2>
              <p className="text-lg font-light tracking-wide my-3">
                Optimize conversion by offering seamless payments and
                authentication. Learn where and how to expand your business
                next, supported by insights. All while managing risk at scale.
              </p>
              <div className="flex mt-5 mb-3">
                <h5 className="font-semibold text-green-500 hover:text-green-600 hover:cursor-pointer hover:pr-1">
                  Seeing payments as an enabler of growth{" "}
                </h5>
                <MdKeyboardArrowRight
                  className="self-center font-semibold text-green-500  hover:text-green-600 hover:cursor-pointer"
                  size={23}
                />
              </div>
            </div>
            <div>
              <Image src={Tab1} className="m-5 hidden md:flex" />
            </div>
          </div>
        </TabPanel>

        {/* panel 2 */}
        <TabPanel value="2">
          <div className="md:grid md:grid-cols-2 ">
            <Image src={Tab2} className="my-5 md:hidden block" />

            <div className="self-center w-3/4">
              <h2>Omnichannel businesses</h2>
              <p className="text-lg font-light tracking-wide my-3">
                Accelerate your digital transformation. Connect your online and
                offline payment data in one system. Deliver more flexible buying
                journeys and build a deeper understanding of your customers’
                behaviour.
              </p>
              <div className="flex mt-5 mb-3">
                <h5 className="font-semibold text-green-500 hover:text-green-600 hover:cursor-pointer hover:pr-1">
                  Using payment technology to improve customer experience
                </h5>
                <MdKeyboardArrowRight
                  className="self-center font-semibold text-green-500  hover:text-green-600 hover:cursor-pointer"
                  size={23}
                />
              </div>
            </div>
            <div>
              <Image src={Tab2} className="m-5 hidden md:flex" />
            </div>
          </div>
        </TabPanel>

        {/* panel 3 */}
        <TabPanel value="3">
          <div className="md:grid md:grid-cols-2 ">
            <Image src={Tab3} className="my-5 md:hidden block" />

            <div className="self-center w-3/4">
              <h2>Platforms & marketplaces</h2>
              <p className="text-lg font-light tracking-wide my-3">
                Increase revenue and reduce churn by offering your users an
                elevated experience. Provide integrated payments and scale
                globally with one payments system.
              </p>
              <div className="flex mt-5 mb-3">
                <h5 className="font-semibold text-green-500 hover:text-green-600 hover:cursor-pointer hover:pr-1">
                  Check how Lightspeed is integrating payments with Adyen
                </h5>
                <MdKeyboardArrowRight
                  className="self-center font-semibold text-green-500  hover:text-green-600 hover:cursor-pointer"
                  size={23}
                />
              </div>
            </div>
            <div>
              <Image src={Tab3} className="m-5 hidden md:flex" />
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
