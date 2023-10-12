"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import CssTextField from "@/components/TextField"
import Link from "next/link"
import { useRef, useEffect } from "react"
import anime from "animejs/lib/anime.es.js"

export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const elementsWalletRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (
      elementsWalletRef.current &&
      elementsWalletRef.current.length > 0 &&
      elementsWalletRef
    ) {
      const targets = elementsWalletRef.current.filter(element => element)
      anime.timeline({ loop: false }).add({
        targets: targets,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(250, { easing: "easeOutSine" }),
      })
    }
  }, [isConnected])

  if (elementsRef.current) {
    const targets = elementsRef.current.filter(element => element)
    anime.timeline({ loop: false }).add({
      targets: targets,
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: anime.stagger(250, { easing: "easeOutSine" }),
    })
  }

  return (
    <div className="  flex flex-col items-center justify-center    w-[83vw] container mx-auto">
      {isConnected ? (
        <>
          <div
            className=" absolute top-5 right-5 opacity-0"
            ref={el => (elementsWalletRef.current[0] = el)}
          >
            <ConnectButton />
          </div>

          <div
            className="border-[3px] border-black  h-[30rem] flex-col flex  mt-20 mr-8    opacity-0  rounded-[2rem] px-12 py-5"
            ref={el => (elementsWalletRef.current[1] = el)}
          >
            {" "}
            <h1
              className="text-3xl font-black  opacity-0 text-black"
              ref={el => (elementsWalletRef.current[2] = el)}
            >
              1. Set Rollup Parameters
            </h1>
            <div
              className=" flex-col flex mt-5  opacity-0"
              ref={el => (elementsWalletRef.current[3] = el)}
            >
              <CssTextField
                label="Address"
                variant="outlined"
                type="text"
                value={"0x"}
                // onChange={}
              />
              <p>Rollup Bridge Contract Address</p>
            </div>
            <div
              className=" flex-col flex mt-5 "
              ref={el => (elementsWalletRef.current[4] = el)}
            >
              <CssTextField
                label="Address"
                variant="outlined"
                type="number"
                value={0}
                // onChange={}
              />
              <p>Staking Limit</p>
            </div>
            <div
              className=" flex-col flex mt-5 "
              ref={el => (elementsWalletRef.current[5] = el)}
            >
              <CssTextField
                label="Address"
                variant="outlined"
                type="text"
                value={"0x"}
                // onChange={}
              />
              <p>Rollup Dao Contract Address</p>
            </div>
            <div
              className=" flex justify-center mt-6"
              ref={el => (elementsWalletRef.current[6] = el)}
            >
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
            <h1
              className="text-[2.5rem] font-black "
              ref={el => (elementsRef.current[0] = el)}
            >
              Register Your Rollup{" "}
            </h1>
            <h1
              className="text-lg font-light mt-4"
              ref={el => (elementsRef.current[1] = el)}
            >
              connect your wallet to get started{" "}
            </h1>
          </div>

          <div ref={el => (elementsRef.current[2] = el)} className=" ">
            <Image
              src={"/Images/MetamaskLogo.svg"}
              width={200}
              height={200}
              alt="metamask logo"
              className="mt-8 mb-8"
            />
          </div>

          <div ref={el => (elementsRef.current[3] = el)} className="">
            <ConnectButton />
          </div>
        </>
      )}

      <p
        className="absolute bottom-10  font-thin w-8/12"
        ref={el => (elementsRef.current[4] = el)}
      >
        Note: This exercise is for demo purposes. When integrating will Layer
        2s, Nexus Network will work with the Layer 2 teams to whitelist an
        address through which the Layer 2 will be registered
      </p>
    </div>
  )
}
