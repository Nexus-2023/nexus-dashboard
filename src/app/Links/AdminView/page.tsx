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
import { useQuery } from "@apollo/client/react"
import tableStyles from "../../../styles/Table.module.css"
import { gql } from "@apollo/client"
import loadingStyles from "../../../styles/loading.module.css"
import IconButton from "@mui/material/IconButton"

import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import { InputAdornment } from "@mui/material"
import PercentIcon from "@mui/icons-material/Percent"
export default function Home() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()
  // const [rollupRegistered, setrollupRegistered] = useState(false)
  const [rollupRegistered, setrollupRegistered] = useState(true)
  const [rewardAddress, setrewardAddress] = useState("0x")
  const [stakingLimit, setstakingLimit] = useState(0)
  const [aleartErrorOpen, setaleartErrorOpen] = useState(false)
  const [aleartPendingOpen, setaleartPendingOpen] = useState(false)
  const [aleartSucceessOpen, setaleartSucceessOpen] = useState(false)
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [txnSucceeded, settxnSucceeded] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const elementsWalletRef = useRef<(HTMLDivElement | null)[]>([])
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
  console.log("user data", data)
  // if (isConnected) {
  // }

  const handlerewardAddress = (e: any) => {
    setrewardAddress(e.target.value)
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

  async function handleSubmitStaking(event: any) {
    console.log("confirm button clicked")
    event.preventDefault()

    const nexusContract = await connectNexus()

    try {
      if (nexusContract) {
        const txn = await nexusContract.changeStakingLimit(
          Number(stakingLimit),
          { gasLimit: 2200000 }
        )
        setaleartPendingOpen(true)
        await txn.wait()
        handlaleartPendingclose()
        setaleartSucceessOpen(true)
        console.log("Transaction succeeded:", txn.hash)
        console.log("Minting...", txn.hash)

        console.log("Minted -- ", txn.hash)
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
      {/* {isConnecting && <>C onnecting...</>} */}

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
          <Alert severity="warning" sx={{ position: "absolute", top: "2rem" }}>
            Transaction pending
          </Alert>
        </>
      )}
      {isConnected && rollupRegistered && (
        <>
          <div
            className=" absolute top-5 right-5 "
            ref={el => (elementsWalletRef.current[0] = el)}
          >
            <ConnectButton />
          </div>

          <div className="    flex flex-col w-full items-center justify-center mt-12">
            <h1
              className="text-[2.5rem] font-black  "
              ref={el => (elementsWalletRef.current[1] = el)}
            >
              Admin Dashboard{" "}
            </h1>
            <div className="flex space-x-16   mt-6">
              <div
                className="flex-col "
                ref={el => (elementsWalletRef.current[2] = el)}
              >
                <div className=" flex-col flex mt-5  ">
                  <CssTextField
                    label="Address"
                    variant="outlined"
                    type="text"
                    value={rewardAddress}
                    onChange={handlerewardAddress}
                  />
                  <p>Reward Address</p>
                </div>

                <div className=""></div>
              </div>

              <div
                className="flex-col"
                ref={el => (elementsWalletRef.current[3] = el)}
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
                <div className="" onClick={handleSubmitStaking}>
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
            {loading ? (
              <>
                <div className={loadingStyles.loader}>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__bar}></div>
                  <div className={loadingStyles.loader__ball}></div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="mt-12"
                  ref={el => (elementsWalletRef.current[4] = el)}
                >
                  <table className={tableStyles.table}>
                    <thead>
                      <tr>
                        <th className={tableStyles.th}>Index</th>
                        <th className={tableStyles.th}>Rollup Name</th>
                        <th className={tableStyles.th}>Rollup Admin address</th>
                        <th className={tableStyles.th}>Cluster ID</th>
                        <th className={tableStyles.th}>Staking Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.rollups.map((rollup: any, index: number) => (
                        <tr key={index}>
                          <td className={tableStyles.td}>{index + 1}</td>
                          <td className={tableStyles.td}>
                            {rollup.name || "N/A"}
                          </td>
                          <td className={tableStyles.td}>{rollup.id}</td>
                          <td className={tableStyles.td}>{rollup.clusterId}</td>
                          <td className={tableStyles.td}>
                            {rollup.stakingLimit}
                          </td>

                          {/* Eth Earned is not provided in the GraphQL response */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            <div
              className="mt-12"
              ref={el => (elementsWalletRef.current[5] = el)}
            >
              <StyledButton1 borderColor="#045192" backgroundColor="#045192">
                Claim Reward
              </StyledButton1>
            </div>
          </div>
        </>
      )}
      {isConnected && rollupRegistered === false && (
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

          <div ref={el => (elementsWalletRef2.current[3] = el)} className="">
            <Image
              src={"/Images/rollup.svg"}
              width={350}
              height={350}
              alt="Rollup image"
              className="mt-8 mb-8"
            />
          </div>

          <div ref={el => (elementsWalletRef2.current[4] = el)} className=" ">
            <Link href={"/Links/RegisterRollup"}>
              <div className=" ">
                <StyledButton1 borderColor="#0375C9" backgroundColor="#0375C9">
                  Register Rollup
                </StyledButton1>
              </div>
            </Link>
          </div>
        </>
      )}

      {isConnected === false && (
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
