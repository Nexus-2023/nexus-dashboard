import React from "react"
import Image from "next/image"
import Link from "next/link"
import { TwitterIcon, LanguageIcon } from "../../public/Icons/icons"
import { Button, IconButton, SvgIcon } from "@mui/material"

export const SideBar = () => {
  return (
    <div className="bg-primary text-white relative  font-semibold   min-w-full  w-64  h-[100vh] min-h-full flex-col flex   items-center">
      <div>
        <Image
          src="/Images/Nexeslogo.png"
          alt="logo"
          width={150}
          height={150}
          className="-ml-2 mt-5"
        />
      </div>

      <div className="space-y-8  flex flex-col mt-8 ">
        <Link href={"./"}>
          <h1 className="text-md   px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
            {" "}
            Registere Rollups
          </h1>
        </Link>

        <Link href={"./"}>
          <h1 className="text-md  px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
            {" "}
            Admin View
          </h1>
        </Link>

        <Link href={"./"}>
          <h1 className="text-md   px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
            {" "}
            Integration Summary
          </h1>
        </Link>
        <Link href={"./"}>
          <h1 className="text-md   px-4 py-2 hover:text-primary hover:bg-white ease-in-out duration-300 rounded-md">
            {" "}
            Partner Networks
          </h1>
        </Link>
      </div>
      <div className="space-x-4  flex  -ml-5 mt-[11rem] ">
        <div className="hover:scale-125  ease-in-out duration-300">
          <Link href={"./"}>
            <TwitterIcon sx={{ fontSize: 30 }} />
          </Link>
        </div>

        <div className="hover:scale-125 scal ease-in-out duration-300">
          <Link href={"./"}>
            <LanguageIcon sx={{ fontSize: 30 }} />
          </Link>
        </div>

        <div className="hover:scale-125  ease-in-out duration-300">
          <Link href={"./"}>
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
