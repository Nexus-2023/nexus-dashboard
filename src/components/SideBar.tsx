import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  TwitterIcon,
  LanguageIcon,
  ExpandMoreIcon,
} from "../../public/Icons/icons"
import {
  Button,
  IconButton,
  SvgIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material"

export function BasicAccordion() {
  return (
    <div>
      <Accordion className=" bg-primary text-white  shadow-none font-bold    ">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <div className="flex items-center px-3 py-2 -mt-3 -ml-3 text-white justify-center hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
            <div className="">
              <Typography className="font-bold    ">
                Partner Networks
              </Typography>
            </div>
            <div className="ml-1">
              <ExpandMoreIcon />
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className=" bg-secondary ">
          <Link href={"./Polygon"}>
            <h1 className="text-md   px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
              {" "}
              Polygon zkEVM
            </h1>
          </Link>

          <Link href={"./Mantle"}>
            <h1 className="text-md   px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
              {" "}
              Mantle
            </h1>
          </Link>

          <Link href={"./Scroll"}>
            <h1 className="text-md   px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
              {" "}
              Scroll
            </h1>
          </Link>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export const SideBar = () => {
  return (
    <div className="bg-primary text-white relative  font-semibold   min-w-full  w-64  h-[100vh] min-h-full flex-col flex   items-center">
      <div>
        <Link href={"/"}>
          <Image
            src="/Images/Nexeslogo.png"
            alt="logo"
            width={150}
            height={150}
            className="-ml-2 mt-5"
          />
        </Link>
      </div>

      <div className="space-y-6  flex flex-col mt-8 ">
        <Link href={"/Links/RegisterRollup"}>
          <h1 className="text-md   px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
            {" "}
            Register Rollups
          </h1>
        </Link>

        <Link href={"/Links/AdminView"}>
          <h1 className="text-md  px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
            {" "}
            Admin View
          </h1>
        </Link>

        <Link href={"/Links/Integration"}>
          <h1 className="text-md   px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
            {" "}
            Integration Summary
          </h1>
        </Link>

        <BasicAccordion />
      </div>
      {/* <div className="space-x-4  flex  -ml-5 mt-[5rem] "> */}
      <div className="space-x-4  flex  absolute  bottom-10 left-12 ">
        <div className="hover:scale-125  ease-in-out duration-300">
          <Link href={"/"}>
            <TwitterIcon sx={{ fontSize: 30 }} />
          </Link>
        </div>

        <div className="hover:scale-125 scal ease-in-out duration-300">
          <Link href={"/"}>
            <LanguageIcon sx={{ fontSize: 30 }} />
          </Link>
        </div>

        <div className="hover:scale-125  ease-in-out duration-300">
          <Link href={"/"}>
            <Image
              src={"/Images/discord.svg"}
              alt="discord"
              width={35}
              height={35}
              className=" -mt-2  "
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
