"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import CssTextField from "@/components/TextField"
import Link from "next/link"
export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()

  return (
    <div className="  flex flex-col items-center justify-center    w-[83vw] container mx-auto">
      {isConnected ? (
        <>
          <div className=" absolute top-5 right-5">
            <ConnectButton />
          </div>

          <div className="border-[3px] border-black  h-[30rem] flex-col flex  mt-20 mr-8     rounded-[2rem] px-12 py-5">
            {" "}
            <h1 className="text-3xl font-black  text-black">
              1. Set Rollup Parameters
            </h1>
            <div className=" flex-col flex mt-5 ">
              <CssTextField
                label="Address"
                variant="outlined"
                type="text"
                value={"0x"}
                // onChange={}
              />
              <p>Rollup Bridge Contract Address</p>
            </div>
            <div className=" flex-col flex mt-5 ">
              <CssTextField
                label="Address"
                variant="outlined"
                type="number"
                value={0}
                // onChange={}
              />
              <p>Staking Limit</p>
            </div>
            <div className=" flex-col flex mt-5 ">
              <CssTextField
                label="Address"
                variant="outlined"
                type="text"
                value={"0x"}
                // onChange={}
              />
              <p>Rollup Dao Contract Address</p>
            </div>
            <div className=" flex justify-center mt-6">
              <Link href={"/Links/RegisterRollup/form"}>
                <StyledButton2
                  backgroundColor="white"
                  hoverColor="white"
                  color="#171515"
                  AfterBackground="#171515"
                  width="7rem"
                >
                  Next
                </StyledButton2>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="  flex flex-col w-full items-center justify-center mt-12">
            <h1 className="text-[2.5rem] font-black ">Register Your Rollup </h1>
            <h1 className="text-lg font-light mt-4">
              connect your wallet to get started{" "}
            </h1>
          </div>

          <Image
            src={"/Images/MetamaskLogo.svg"}
            width={200}
            height={200}
            alt="metamask logo"
            className="mt-8 mb-8"
          />
          <ConnectButton />
        </>
      )}

      <p className="absolute bottom-10   font-thin w-8/12">
        Note: This exercise is for demo purposes. When integrating will Layer
        2s, Nexus Network will work with the Layer 2 teams to whitelist an
        address through which the Layer 2 will be registered
      </p>
    </div>
  )
}
