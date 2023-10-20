"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { Card } from "@/components/Card"
import { IntegrationTable } from "@/components/Table"
import { useRef, useEffect, useState } from "react"
import anime from "animejs/lib/anime.es.js"

import loadingStyles from "../../../styles/loading.module.css"
import tableStyles from "../../../styles/Table.module.css"
import { GET_ALL_ROLLUP } from "@/app/(Queries)/graphQl"
import { useQuery } from "@apollo/client/react"
export default function Home() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const elementsRef2 = useRef<(HTMLDivElement | null)[]>([])
  const [totalEthStaked, setTotalEthStaked] = useState<number>(0)
  const [totalEthEarned, setTotalEthEarned] = useState<number>(0)
  const { loading, error, data } = useQuery(GET_ALL_ROLLUP)

  let total: any = 0
  let result: any

  useEffect(() => {
    if (loading === false) {
      console.log("data.rollups.length", data.rollups.length)

      for (let i = 0; i < data.rollups.length; i++) {
        total += data.rollups[i].validatorCount
        console.log("total", total)
      }
      if (total) {
        result = total * 32
      }

      setTotalEthStaked(result)
      setTotalEthEarned(total)
    }

    console.log("result", result)
    // console.log("total", total)
    console.log("totalEthEarned", totalEthEarned)
    console.log("totalEthStaked", totalEthStaked)
  }, [loading, data])

  // if (loading === false) {
  //   console.log("data = ", data)
  //   console.log("error", error)
  //   // console.log("data.legth = ", data.length)
  //   // console.log("data.rollups.length = ", data.rollups.length)
  //   // console.log("rollups = ", data.rollups)
  //   // console.log("loading  = ", loading)
  // }

  useEffect(() => {
    if (elementsRef.current) {
      anime.timeline({ loop: false }).add({
        targets: elementsRef.current,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(250, { easing: "easeOutSine" }),
      })
    }
  }, [])

  useEffect(() => {
    if (
      elementsRef2.current &&
      elementsRef2.current.length > 0 &&
      elementsRef2
    ) {
      const targets = elementsRef2.current.filter(element => element)
      anime.timeline({ loop: false }).add({
        targets: targets,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(250, { easing: "easeOutSine" }),
      })
    }
  }, [loading])

  return (
    <div className="  flex flex-col items-center justify-center space-y-12  w-[83vw] container mx-auto">
      <div className="  flex flex-col w-full items-center justify-center mt-6">
        <h1
          className="text-[2.5rem] font-black opacity-0"
          ref={el => (elementsRef.current[0] = el)}
        >
          Integration Summary
        </h1>
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
          {" "}
          <div className=" flex space-x-8 flex-wrap  ">
            <div ref={el => (elementsRef2.current[0] = el)} className=" ">
              <Card
                text={"Number of Rollups Registered"}
                numbers={data.rollups.length}
              />
            </div>
            <div ref={el => (elementsRef2.current[1] = el)} className=" ">
              <Card text={"Eth Staked "} numbers={totalEthStaked} />
            </div>
            <div ref={el => (elementsRef2.current[2] = el)} className=" ">
              <Card text={"Earnings (Eth)"} numbers={totalEthEarned} />
            </div>
          </div>
          <div ref={el => (elementsRef2.current[3] = el)} className="mb-12">
            <table className={tableStyles.table}>
              <thead>
                <tr>
                  <th className={tableStyles.th}>Index</th>
                  <th className={tableStyles.th}>Rollup</th>
                  <th className={tableStyles.th}>Number of Active Validator</th>
                  <th className={tableStyles.th}>Total Eth Staked</th>
                  <th className={tableStyles.th}>Staking Limit</th>
                  <th className={tableStyles.th}>Eth Earned</th>
                </tr>
              </thead>
              <tbody>
                {data.rollups.map((rollup: any, index: number) => (
                  <tr key={index}>
                    <td className={tableStyles.td}>{index + 1}</td>
                    <td className={tableStyles.td}>{rollup.name || "N/A"}</td>
                    <td className={tableStyles.td}>{rollup.validatorCount}</td>
                    <td className={tableStyles.td}>
                      {rollup.validatorCount * 32} ETH
                    </td>
                    <td className={tableStyles.td}>
                      {" "}
                      {rollup.stakingLimit / 100}%
                    </td>
                    <td className={tableStyles.td}>
                      {rollup.validatorCount} ETH
                    </td>{" "}
                    {/* Eth Earned is not provided in the GraphQL response */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
