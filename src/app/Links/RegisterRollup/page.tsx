"use client"

import Image from "next/image"
import StyledButton from "@/components/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()

  return (
    <div className="  flex flex-col items-center justify-center space-y-12  w-[83vw] container mx-auto">
      {isConnected ? (
        <>
          <div className=" absolute top-5 right-5">
            <ConnectButton />
          </div>
          <h1 className="text-[2.5rem] font-black ">Connected</h1>
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
