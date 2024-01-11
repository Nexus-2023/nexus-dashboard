"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import anime from "animejs/lib/anime.es.js"
import CssTextField from "@/components/TextField"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { AdminTable } from "@/components/Table"
import { connectNexus } from "@/utils/connectContract"
import Snackbar from "@mui/material/Snackbar"
import FormControl from "@mui/material/FormControl"
import { useRouter, useParams } from "next/navigation"
import { GET_USER_ROLLUP } from "@/app/(Queries)/graphQl"
import { useQuery, gql } from "@apollo/client"
import tableStyles from "../../../styles/Table.module.css"

import loadingStyles from "../../../styles/loading.module.css"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import { InputAdornment } from "@mui/material"
import PercentIcon from "@mui/icons-material/Percent"

export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()
  // const [rollupRegistered, setrollupRegistered] = useState(false)
  const [rollupRegistered, setrollupRegistered] = useState(true)
  const router = useRouter()
  const [stakingLimit, setstakingLimit] = useState(0.01)
  const [aleartErrorOpen, setaleartErrorOpen] = useState(false)
  const [aleartPendingOpen, setaleartPendingOpen] = useState(false)
  const [aleartSucceessOpen, setaleartSucceessOpen] = useState(false)
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])

  const elementsWalletRef = useRef<(HTMLDivElement | null)[]>([])
  const elementsRef2 = useRef<(HTMLDivElement | null)[]>([])
  const elementsWalletRef2 = useRef<(HTMLDivElement | null)[]>([])
  const handlaleartErrorclose = () => {
    setaleartErrorOpen(false)
  }

  const handlaleartPendingclose = () => {
    setaleartPendingOpen(false)
  }
  const handlaleartSuccessclose = () => {
    setaleartSucceessOpen(false)
  }
  console.log("Admin address ", address)
  const { loading, error, data } = useQuery(gql`
  {
    rollups(where: { id: "${address}" }) {
      bridgeContract
      clusterId
      id
      name
      rewards
      slashing
      stakingLimit
      validatorCount
    }
  }
`)

  if (loading) {
    console.log("user data", data)
  }

  const handlestakingLimit = (e: any) => {
    if (
      e.target.value === "" ||
      (parseFloat(e.target.value) >= 0.01 && parseFloat(e.target.value) <= 100)
    ) {
      setstakingLimit(e.target.value)
      console.log(" setstakingLimit", e.target.value)
    } else {
      console.log("incorrect staking value", e.target.value)
    }
  }

  async function handleSubmitStaking(event: any) {
    console.log("confirm button clicked")
    event.preventDefault()

    const nexusContract = await connectNexus()

    try {
      if (nexusContract) {
        const txn = await nexusContract.changeStakingLimit(
          Number(stakingLimit) * 100,
          { gasLimit: 2200000 }
        )
        setaleartPendingOpen(true)
        await txn.wait()
        handlaleartPendingclose()
        setaleartSucceessOpen(true)
        console.log("Transaction succeeded:", txn.hash)
        console.log("Minting...", txn.hash)

        console.log("Minted -- ", txn.hash)
        router.refresh()
        setstakingLimit(stakingLimit)
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
  }, [isConnected, rollupRegistered])

  useEffect(() => {
    if (
      elementsWalletRef2.current &&
      elementsWalletRef2.current.length > 0 &&
      elementsWalletRef2
    ) {
      const targets = elementsWalletRef2.current.filter(element => element)
      anime.timeline({ loop: false }).add({
        targets: targets,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(250, { easing: "easeOutSine" }),
      })
    }
  }, [isConnected])

  // useEffect(() => {
  //   console.log()
  //   const cond =
  //     elementsRef2.current && elementsRef2.current.length > 0 && elementsRef2
  //   console.log("eelementsRef2 ", elementsRef2)

  //   if (elementsRef2.current) {
  //     const targets = elementsRef2.current.filter(element => element)
  //     anime.timeline({ loop: false }).add({
  //       targets: targets,
  //       translateY: [-20, 0],
  //       opacity: [0, 1],
  //       duration: 1000,
  //       delay: anime.stagger(250, { easing: "easeOutSine" }),
  //     })
  //   }
  // }, [loading])

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
      {/* display ui when wallet is not connected */}
      {isConnected === false ? (
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
      ) : (
        <>
          {isConnected && loading ? (
            <div className=" w-[82vw] flex h-[100vh] flex-col  justify-center items-center">
              <div>
                {" "}
                <div className={loadingStyles.loader}>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__ball}></div>
                </div>
              </div>

              <div className="text-3xl text-black mt-3">Loading</div>
            </div>
          ) : (
            <>
              {/* data is defined and wallet is connected */}
              {data ? (
                <>
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
                        sx={{ position: "absolute", top: "0.5rem" }}
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
                        sx={{ position: "absolute", top: "0.5rem" }}
                      >
                        Transaction Successfull
                      </Alert>
                    </>
                  )}

                  {aleartPendingOpen && (
                    <>
                      <Alert
                        severity="warning"
                        sx={{ position: "absolute", top: "0.5rem" }}
                      >
                        Transaction pending
                      </Alert>
                    </>
                  )}

                  <div
                    className=" absolute top-5 right-5 "
                    ref={el => (elementsWalletRef.current[0] = el)}
                  >
                    <ConnectButton />
                  </div>

                  <div className="    flex flex-col w-full  items-center    justify-center mt-12">
                    <h1
                      className="text-[2.5rem] font-black  "
                      ref={el => (elementsWalletRef.current[1] = el)}
                    >
                      Admin Dashboard{" "}
                    </h1>
                    <div className="flex space-x-16   mt-6">
                      <div
                        className="flex-col"
                        ref={el => (elementsWalletRef.current[2] = el)}
                      >
                        <div className=" flex-col flex mt-5  ">
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
                          <p>staking Limit</p>
                        </div>
                        <div
                          className="flex justify-center items-center   "
                          onClick={handleSubmitStaking}
                        >
                          <StyledButton2
                            backgroundColor="white"
                            hoverColor="white"
                            color="#171515"
                            AfterBackground="#171515"
                            width="6rem"
                          >
                            Change
                          </StyledButton2>{" "}
                        </div>
                      </div>
                    </div>

                    <div
                      className="mt-12"
                      ref={el => (elementsWalletRef.current[3] = el)}
                    >
                      <table className={tableStyles.table}>
                        <thead>
                          <tr>
                            <th className={tableStyles.th}>Rollup Name</th>

                            <th className={tableStyles.th}>Cluster ID</th>
                            <th className={tableStyles.th}>Staking Limit</th>
                            {/* <th className={tableStyles.th}>Rollup Admin address</th> */}
                            <th className={tableStyles.th}>
                              Rollup Bridge address
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.rollups.map((rollup: any, index: number) => (
                            <tr key={index}>
                              <td className={tableStyles.td}>
                                {rollup.name || "N/A"}
                              </td>

                              <td className={tableStyles.td}>
                                {rollup.clusterId}
                              </td>
                              <td className={tableStyles.td}>
                                {rollup.stakingLimit / 100}%
                              </td>
                              {/* <td className={tableStyles.td}>{rollup.id}</td> */}
                              <td className={tableStyles.td}>
                                {rollup.bridgeContract}
                              </td>

                              {/* Eth Earned is not provided in the GraphQL response */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div
                      className="mt-12"
                      ref={el => (elementsWalletRef.current[4] = el)}
                    >
                      <Button
                        variant="contained"
                        disabled
                        sx={{ backgroundColor: "#3A3A3A" }}
                      >
                        Claim Reward
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                // data is undefined and wallet is connect

                <>
                  {isConnected && data === undefined && (
                    <>
                      <div
                        className=" absolute top-5 right-5 "
                        ref={el => (elementsWalletRef2.current[0] = el)}
                      >
                        <ConnectButton />
                      </div>

                      <div className="  flex flex-col w-full items-center justify-center mt-[6rem] space-y-8">
                        <h1
                          className="text-5xl font-black  "
                          ref={el => (elementsWalletRef2.current[1] = el)}
                        >
                          No rollups registered
                        </h1>
                        <h1
                          className="text-lg font-light mt-4 "
                          ref={el => (elementsWalletRef2.current[2] = el)}
                        >
                          register rollups to get started
                        </h1>
                      </div>

                      <div
                        ref={el => (elementsWalletRef2.current[3] = el)}
                        className=""
                      >
                        <Image
                          src={"/Images/rollup.svg"}
                          width={350}
                          height={350}
                          alt="Rollup image"
                          className="mt-8 mb-8"
                        />
                      </div>

                      <div
                        ref={el => (elementsWalletRef2.current[4] = el)}
                        className=" "
                      >
                        <Link href={"/Links/RegisterRollup"}>
                          <div className=" ">
                            <StyledButton1
                              borderColor="#0375C9"
                              backgroundColor="#0375C9"
                            >
                              Register Rollup
                            </StyledButton1>
                          </div>
                        </Link>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}
