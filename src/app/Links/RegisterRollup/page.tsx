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
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { ThemeProvider } from "@mui/material"
import { theme } from "@/theme/theme"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { connectNexus } from "@/utils/connectContract"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { BasicSelect } from "@/components/SelectField"
import InputLabel from "@mui/material/InputLabel"

import FormControl from "@mui/material/FormControl"
import { ethers } from "ethers"

export function SelectTextFields() {
  const optionss = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ]
  const [selectedOption, setSelectedOption] = useState(1)

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value)
    console.log("selectedOption ", selectedOption)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
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
          "& .MuiTextField-root": {
            width: "23vw",
            color: "#000000",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="ID"
            onChange={handleOptionChange}
            SelectProps={{
              IconComponent: ({ className }) => (
                <ArrowDropDownIcon className={className} style={{}} />
              ),
            }}
          >
            {optionss.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const elementsWalletRef = useRef<(HTMLDivElement | null)[]>([])
  const [rollupBridgeAddress, setrollupBridgeAddress] = useState("")
  const [stakingLimit, setstakingLimit] = useState(0)
  const [clusterID, setclusterID] = useState("1")
  console.log("clusterID", clusterID)

  const handleRollupBridgeAddress = (e: any) => {
    setrollupBridgeAddress(e.target.value)
  }
  const handlestakingLimit = (e: any) => {
    setstakingLimit(e.target.value)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setclusterID(event.target.value as string)
  }
  async function handleSubmit2(event: any) {
    console.log("confirm button clicked")
    event.preventDefault()

    const nexusContract = await connectNexus()
    const addressbridgeContract = rollupBridgeAddress

    const operatorClusterID = Number(clusterID)
    const StakingLimit = stakingLimit

    try {
      if (nexusContract) {
        const txn1 = await nexusContract.registerRollup(
          addressbridgeContract,
          1,
          1,
          { gasLimit: 220000 }
        )
        let wait1 = await txn1.wait()
        console.log("Minting...", txn1.hash)

        console.log("Minted -- ", txn1.hash)
      }
    } catch (e) {
      console.log("error :" + e)
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
                label="Number"
                variant="outlined"
                type="number"
                value={stakingLimit}
                onChange={handlestakingLimit}
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

              {/* <Link href={"/Links/RegisterRollup/form"}>
                <StyledButton2
                  backgroundColor="white"
                  hoverColor="white"
                  color="#171515"
                  AfterBackground="#171515"
                  width="7rem"
                >
                  Next
                </StyledButton2>
              </Link> */}
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
