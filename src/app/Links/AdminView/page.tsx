"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import anime from "animejs/lib/anime.es.js"
import { useRef, useEffect } from "react"
import Link from "next/link"
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
  useEffect(() => {
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
  }, [])

  return (
    <div className="  flex flex-col items-center justify-center   w-[83vw] container mx-auto">
      {isConnected ? (
        <>
          <div
            className=" absolute top-5 right-5 opacity-0"
            ref={el => (elementsWalletRef.current[0] = el)}
          >
            <ConnectButton />
          </div>

          <div className="  flex flex-col w-full items-center justify-center mt-[6rem] space-y-8">
            <h1
              className="text-5xl font-black  "
              ref={el => (elementsRef.current[0] = el)}
            >
              No rollups registered
            </h1>
            <h1
              className="text-lg font-light mt-4 "
              ref={el => (elementsRef.current[1] = el)}
            >
              register rollups to get started
            </h1>
          </div>

          <div ref={el => (elementsRef.current[2] = el)} className="">
            <Image
              src={"/Images/rollup.svg"}
              width={350}
              height={350}
              alt="Rollup image"
              className="mt-8 mb-8"
            />
          </div>

          <div ref={el => (elementsRef.current[3] = el)} className=" ">
            <Link href={"/Links/RegisterRollup"}>
              <div
                ref={el => (elementsRef.current[4] = el)}
                className="opacity-0"
              >
                <StyledButton1 borderColor="#0375C9" backgroundColor="#0375C9">
                  Register Rollup
                </StyledButton1>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="  flex flex-col w-full items-center justify-center mt-12">
            <h1
              className="text-[2.5rem] font-black  "
              ref={el => (elementsRef.current[0] = el)}
            >
              Admin Page{" "}
            </h1>
            <h1
              className="text-lg font-light mt-4 "
              ref={el => (elementsRef.current[1] = el)}
            >
              connect your wallet to get started{" "}
            </h1>
          </div>

          <div ref={el => (elementsRef.current[2] = el)} className="">
            <Image
              src={"/Images/MetamaskLogo.svg"}
              width={200}
              height={200}
              alt="metamask logo"
              className="mt-8 mb-8"
            />
          </div>

          <div ref={el => (elementsRef.current[3] = el)} className=" ">
            <ConnectButton />
          </div>
        </>
      )}
    </div>
  )
}
