"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import CssTextField from "@/components/TextField"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import anime from "animejs/lib/anime.es.js"
import Box from "@mui/material/Box"
import { InputAdornment } from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import { ThemeProvider } from "@mui/material"
import { theme } from "@/theme/theme"
import PercentIcon from "@mui/icons-material/Percent"
import { connectNexus } from "@/utils/connectContract"
import Select, { SelectChangeEvent } from "@mui/material/Select"

import InputLabel from "@mui/material/InputLabel"
import IconButton from "@mui/material/IconButton"
import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import FormControl from "@mui/material/FormControl"
import Snackbar from "@mui/material/Snackbar"
import { useRouter, useParams } from "next/navigation"
interface StakingLimit {
  value: number
  min: number
  max: number
}

const stakingLimit: StakingLimit = {
  value: 50,
  min: 0,
  max: 100,
}

export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()

  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const elementsWalletRef = useRef<(HTMLDivElement | null)[]>([])

  const [aleartErrorOpen, setaleartErrorOpen] = useState(false)
  const [aleartPendingOpen, setaleartPendingOpen] = useState(false)
  const [aleartSucceessOpen, setaleartSucceessOpen] = useState(false)

  const [stakingLimit, setstakingLimit] = useState(0)
  const [clusterID, setclusterID] = useState("1")
  const params = useParams()
  const router = useRouter()
  //const rollupName = params.rollupName
  // const GivenaddressbridgeContract = params.form
  const [rollupBridgeAddress, setrollupBridgeAddress] = useState(``)
  // console.log("GivenaddressbridgeContract ", GivenaddressbridgeContract)
  // console.log("params", params)

  console.log("clusterID", clusterID)
  const handlaleartErrorclose = () => {
    setaleartErrorOpen(false)
  }

  const handlaleartPendingclose = () => {
    setaleartPendingOpen(false)
  }
  const handlaleartSuccessclose = () => {
    setaleartSucceessOpen(false)
  }
  const handleRollupBridgeAddress = (e: any) => {
    setrollupBridgeAddress(e.target.value)
  }
  const handlestakingLimit = (e: any) => {
    if (
      e.target.value === "" ||
      (parseFloat(e.target.value) >= 0 && parseFloat(e.target.value) <= 100)
    ) {
      setstakingLimit(e.target.value)
    } else {
      console.log("incorrect staking value", e.target.value)
    }
    // setstakingLimit(e.target.value)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setclusterID(event.target.value as string)
  }
  async function handleSubmit2(event: any) {
    console.log("confirm button clicked")
    event.preventDefault()
    //Handle staking persentage conversion
    const nexusContract = await connectNexus()
    const addressbridgeContract = rollupBridgeAddress

    const operatorClusterID = Number(clusterID)
    const StakingLimit = Number(stakingLimit)
    console.log("addressbridgeContract", addressbridgeContract)
    console.log("StakingLimit", StakingLimit)
    console.log("operatorClusterID ", operatorClusterID)

    try {
      if (nexusContract) {
        const txn1 = await nexusContract.registerRollup(
          addressbridgeContract,
          operatorClusterID,
          StakingLimit,
          { gasLimit: 2200000 }
        )
        setaleartPendingOpen(true)
        await txn1.wait()
        handlaleartPendingclose()
        setaleartSucceessOpen(true)
        console.log("Minting...", txn1.hash)

        console.log("Minted -- ", txn1.hash)

        router.push(`/Links/AdminView`)
        // query from graph
      }
    } catch (e) {
      console.log("error :" + e)
      handlaleartPendingclose()
      setaleartErrorOpen(true)
    }
  }

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
    <div className="  flex flex-col items-center justify-center    w-[83vw] container mx-auto">
      {isConnected ? (
        <>
          <div
            className=" absolute top-5 right-5 opacity-0"
            ref={el => (elementsWalletRef.current[0] = el)}
          >
            <ConnectButton />
          </div>
          <div className="h-[100vh] flex   justify-center items-center">
            {aleartErrorOpen && (
              <>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={handlaleartErrorclose}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ position: "absolute", top: "2rem" }}
                >
                  Transaction Failed
                </Alert>
              </>
            )}

            {aleartSucceessOpen && (
              <>
                <Alert
                  severity="success"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={handlaleartSuccessclose}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ position: "absolute", top: "2rem" }}
                >
                  Transaction Successfull
                </Alert>
              </>
            )}

            {aleartPendingOpen && (
              <>
                <Alert
                  severity="warning"
                  sx={{ position: "absolute", top: "2rem" }}
                >
                  Transaction pending
                </Alert>
              </>
            )}
            <div
              className="border-[3px] border-black  h-[30rem] flex-col flex      opacity-0  rounded-[2rem] px-12 py-5"
              ref={el => (elementsWalletRef.current[1] = el)}
            >
              <h1
                className="text-3xl font-black  opacity-0 text-black"
                ref={el => (elementsWalletRef.current[2] = el)}
              >
                2. Set Rollup Parameters
              </h1>
              <div
                className=" flex-col flex mt-5  opacity-0"
                ref={el => (elementsWalletRef.current[3] = el)}
              >
                <CssTextField
                  label="Address"
                  variant="outlined"
                  type="text"
                  value={rollupBridgeAddress}
                  onChange={handleRollupBridgeAddress}
                />
                <p>Rollup Bridge Contract Address</p>
              </div>
              <div
                className=" flex-col flex mt-5 "
                ref={el => (elementsWalletRef.current[4] = el)}
              >
                <CssTextField
                  label="Percentage"
                  variant="outlined"
                  type="number"
                  value={stakingLimit}
                  onChange={handlestakingLimit}
                  InputProps={{
                    ...{},
                    inputProps: {
                      inputMode: "numeric",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <PercentIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <p>Staking Limit</p>
              </div>
              <div
                className=" flex-col flex mt-5 "
                ref={el => (elementsWalletRef.current[5] = el)}
              >
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      "& label.Mui-focused": {
                        transition: "all 0.3s ease-in-out",
                        color: theme.palette.primary.main,
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          transition: "all 0.3s ease-in-out",
                          borderColor: "#000000",
                        },
                        "&.Mui-focused fieldset": {
                          transition: "all 0.3s ease-in-out",
                          color: theme.palette.primary.main,
                          border: "1px solid",
                        },
                      },
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        cluster ID
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={clusterID}
                        label="clusterID"
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </ThemeProvider>
                <p>Cluster ID</p>
              </div>
              <div
                className=" flex justify-center mt-6"
                ref={el => (elementsWalletRef.current[6] = el)}
              >
                <div onClick={handleSubmit2}>
                  <StyledButton2
                    backgroundColor="white"
                    hoverColor="white"
                    color="#171515"
                    AfterBackground="#171515"
                    width="14rem"
                  >
                    Register Rollup
                  </StyledButton2>
                </div>
              </div>
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
        className="absolute bottom-3 font-thin w-9/12"
        ref={el => (elementsRef.current[4] = el)}
      >
        Note: This exercise is for demo purposes. When integrating will Layer
        2s, Nexus Network will work with the Layer 2 teams to whitelist an
        address through which the Layer 2 will be registered
      </p>
    </div>
  )
}

// "use client"
// import * as React from "react"
// import Image from "next/image"
// import { StyledButton1, StyledButton2 } from "@/components/button"
// import { ConnectButton } from "@rainbow-me/rainbowkit"
// import { useAccount } from "wagmi"

// import { ArrowBackIosIcon } from "../../../../../public/Icons/icons"
// import CssTextField from "@/components/TextField"
// import Link from "next/link"
// import Radio from "@mui/material/Radio"
// import RadioGroup from "@mui/material/RadioGroup"
// import FormControlLabel from "@mui/material/FormControlLabel"
// import FormControl from "@mui/material/FormControl"
// import FormLabel from "@mui/material/FormLabel"
// import { useRef, useEffect } from "react"
// import anime from "animejs/lib/anime.es.js"

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

// export default function Home() {
//   const { address, isConnecting, isDisconnected, isConnected } = useAccount()
//   const elementsRef = useRef<(HTMLDivElement | null)[]>([])
//   if (elementsRef.current) {
//     const targets = elementsRef.current.filter(element => element)
//     anime.timeline({ loop: false }).add({
//       targets: targets,
//       translateY: [-20, 0],
//       opacity: [0, 1],
//       duration: 1500,
//       delay: anime.stagger(250, { easing: "easeOutSine" }),
//     })
//   }
//   return (
//     <div className="  flex flex-col items-center justify-center    w-[83vw] container mx-auto">
//       {isConnected ? (
//         <>
//           <div className=" absolute top-5 right-5">
//             <ConnectButton />
//           </div>

//           <div
//             className="border-[3px] border-black   h-[20rem] flex-col flex  mt-[8rem] mr-8     rounded-[2rem] px-12 py-5"
//             ref={el => (elementsRef.current[0] = el)}
//           >
//             {" "}
//             <div className="flex flex-row space-x-4 items-center">
//               <div ref={el => (elementsRef.current[1] = el)}>
//                 <Link href={"/Links/RegisterRollup"}>
//                   <ArrowBackIosIcon />
//                 </Link>
//               </div>
//               <div ref={el => (elementsRef.current[2] = el)}>
//                 <h1 className="text-3xl font-black  text-black">
//                   2. Select Operators
//                 </h1>
//               </div>
//             </div>
//             <div
//               className=" flex-row flex mt-8 "
//               ref={el => (elementsRef.current[3] = el)}
//             >
//               <div className="radio-buttons">
//                 <label className="radio-button">
//                   <input type="radio" name="option" value="Automatic" />
//                   <div className="radio-circle"></div>
//                   <span className="radio-label">Automatic</span>
//                 </label>
//                 <label className="radio-button">
//                   <input type="radio" name="option" value="Manual" />
//                   <div className="radio-circle"></div>
//                   <span className="radio-label">Manual</span>
//                 </label>
//               </div>
//             </div>
//             <div
//               className=" flex justify-center mt-6"
//               ref={el => (elementsRef.current[4] = el)}
//             >
//               <Link href={"/Links/RegisterRollup/form"}>
//                 <StyledButton2
//                   backgroundColor="white"
//                   hoverColor="white"
//                   color="#171515"
//                   AfterBackground="#171515"
//                   width="14rem"
//                 >
//                   Register Rollup
//                 </StyledButton2>
//               </Link>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           <div className="  flex flex-col w-full items-center justify-center mt-12">
//             <h1 className="text-[2.5rem] font-black ">Register Your Rollup </h1>
//             <h1 className="text-lg font-light mt-4">
//               connect your wallet to get started{" "}
//             </h1>
//           </div>

//           <Image
//             src={"/Images/MetamaskLogo.svg"}
//             width={200}
//             height={200}
//             alt="metamask logo"
//             className="mt-8 mb-8"
//           />
//           <ConnectButton />
//         </>
//       )}

//       <p className="absolute bottom-10   font-thin w-8/12">
//         Note: This exercise is for demo purposes. When integrating will Layer
//         2s, Nexus Network will work with the Layer 2 teams to whitelist an
//         address through which the Layer 2 will be registered
//       </p>
//     </div>
//   )
// }
