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
import MenuItem from "@mui/material/MenuItem"
import { ThemeProvider } from "@mui/material"
import { theme } from "@/theme/theme"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import { connectNexus } from "@/utils/connectContract"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Snackbar from "@mui/material/Snackbar"
import FormControl from "@mui/material/FormControl"
import { useRouter, useParams } from "next/navigation"
import IconButton from "@mui/material/IconButton"

import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()

  const [aleartErrorOpen, setaleartErrorOpen] = useState(false)
  const [aleartPendingOpen, setaleartPendingOpen] = useState(false)
  const [aleartSucceessOpen, setaleartSucceessOpen] = useState(false)

  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const elementsWalletRef = useRef<(HTMLDivElement | null)[]>([])
  const [rollupadminAddress, setrollupadminAddress] = useState(``)
  const [rollupName, setrollupName] = useState("")
  const router = useRouter()
  console.log("address", address)

  const handlerollupadminAddress = (e: any) => {
    setrollupadminAddress(e.target.value)
  }
  const handlerollupName = (e: any) => {
    setrollupName(e.target.value)
  }
  const handlaleartErrorclose = () => {
    setaleartErrorOpen(false)
  }

  const handlaleartPendingclose = () => {
    setaleartPendingOpen(false)
  }
  const handlaleartSuccessclose = () => {
    setaleartSucceessOpen(false)
  }

  async function handleSubmit2(event: any) {
    console.log("confirm button clicked")
    event.preventDefault()

    const nexusContract = await connectNexus()
    const addressbridgeContract = rollupadminAddress

    console.log("addressbridgeContract", addressbridgeContract)
    console.log("rollupName", rollupName)

    try {
      if (nexusContract) {
        const txn = await nexusContract.whitelistRollup(
          rollupName,
          addressbridgeContract,

          { gasLimit: 2200000 }
        )
        setaleartPendingOpen(true)
        await txn.wait()
        handlaleartPendingclose()
        setaleartSucceessOpen(true)
        console.log("Transaction succeeded:", txn.hash)
        console.log("Minting...", txn.hash)

        console.log("Minted -- ", txn.hash)

        router.push(`/Links/RegisterRollup/form`)
      }
    } catch (e) {
      console.error("Transaction failed:", e)
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
    setrollupadminAddress(`${address}`)
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

          {/* mt-20 mr-8  */}
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
              className="border-[3px] border-black  h-[25rem] flex-col flex   opacity-0  rounded-[2rem] px-12 py-5"
              ref={el => (elementsWalletRef.current[1] = el)}
            >
              <h1
                className="text-3xl font-black  opacity-0 text-black"
                ref={el => (elementsWalletRef.current[2] = el)}
              >
                1. WhiteList Rollup
              </h1>
              <FormControl fullWidth>
                <div
                  className=" flex-col flex mt-5  opacity-0"
                  ref={el => (elementsWalletRef.current[3] = el)}
                >
                  <CssTextField
                    label="Address"
                    variant="outlined"
                    type="text"
                    value={rollupadminAddress}
                    onChange={handlerollupadminAddress}
                  />
                  <p>Rollup Admin Address</p>
                </div>
                <div
                  className=" flex-col flex mt-5 "
                  ref={el => (elementsWalletRef.current[4] = el)}
                >
                  <CssTextField
                    label="Name"
                    variant="outlined"
                    type="text"
                    value={rollupName}
                    onChange={handlerollupName}
                  />
                  <p>Rollup Name</p>
                </div>
              </FormControl>
              <div
                className=" flex justify-center mt-6"
                ref={el => (elementsWalletRef.current[6] = el)}
              >
                {/* <div onClick={handleSubmit2}> */}
                <div onClick={handleSubmit2}>
                  <StyledButton2
                    backgroundColor="white"
                    hoverColor="white"
                    color="#171515"
                    AfterBackground="#171515"
                    width="8rem"
                  >
                    Next
                  </StyledButton2>
                </div>

                {/* <Snackbar
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  open={snackbarOpen}
                  autoHideDuration={6000}
                  onClose={handleSnackbarClose}
                  message={snackbarMessage}
                /> */}

                {/* {txnSucceeded ? (
                    <>
                      <Alert severity="success" sx={{ width: "100%" }}>
                        {snackbarMessage}
                      </Alert>
                    </>
                  ) : (
                    <>
                      <Alert severity="error" sx={{ width: "100%" }}>
                        {snackbarMessage}
                      </Alert>
                    </>
                  )} 
                  
                </Snackbar>
                  */}
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
