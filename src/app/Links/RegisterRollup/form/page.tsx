"use client"
import * as React from "react"
import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

import { ArrowBackIosIcon } from "../../../../../public/Icons/icons"
import CssTextField from "@/components/TextField"
import Link from "next/link"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { useRef, useEffect } from "react"
import anime from "animejs/lib/anime.es.js"

// export function ControlledRadioButtonsGroup() {
//   const [value, setValue] = React.useState("Automatic")
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue((event.target as HTMLInputElement).value)
//   }

//   return (
//     <FormControl>
//       <RadioGroup
//         aria-labelledby="demo-controlled-radio-buttons-group"
//         name="controlled-radio-buttons-group"
//         value={value}
//         onChange={handleChange}
//       >
//         <FormControlLabel
//           value="Automatic"
//           control={<Radio />}
//           label="Automatic"
//           sx={{
//             fontSize: "5rem",
//             fontWeight: "600",
//           }}
//         />
//         <FormControlLabel
//           sx={{
//             fontSize: "5rem",
//             fontWeight: "600",
//           }}
//           value="Manual"
//           control={<Radio />}
//           label="Manual"
//         />
//       </RadioGroup>
//     </FormControl>
//   )
// }

export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
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
          <div className=" absolute top-5 right-5">
            <ConnectButton />
          </div>

          <div
            className="border-[3px] border-black   h-[20rem] flex-col flex  mt-[8rem] mr-8     rounded-[2rem] px-12 py-5"
            ref={el => (elementsRef.current[0] = el)}
          >
            {" "}
            <div className="flex flex-row space-x-4 items-center">
              <div ref={el => (elementsRef.current[1] = el)}>
                <Link href={"/Links/RegisterRollup"}>
                  <ArrowBackIosIcon />
                </Link>
              </div>
              <div ref={el => (elementsRef.current[2] = el)}>
                <h1 className="text-3xl font-black  text-black">
                  2. Select Operators
                </h1>
              </div>
            </div>
            <div
              className=" flex-row flex mt-8 "
              ref={el => (elementsRef.current[3] = el)}
            >
              <div className="radio-buttons">
                <label className="radio-button">
                  <input type="radio" name="option" value="Automatic" />
                  <div className="radio-circle"></div>
                  <span className="radio-label">Automatic</span>
                </label>
                <label className="radio-button">
                  <input type="radio" name="option" value="Manual" />
                  <div className="radio-circle"></div>
                  <span className="radio-label">Manual</span>
                </label>
              </div>
            </div>
            <div
              className=" flex justify-center mt-6"
              ref={el => (elementsRef.current[4] = el)}
            >
              <Link href={"/Links/RegisterRollup/form"}>
                <StyledButton2
                  backgroundColor="white"
                  hoverColor="white"
                  color="#171515"
                  AfterBackground="#171515"
                  width="14rem"
                >
                  Register Rollup
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
