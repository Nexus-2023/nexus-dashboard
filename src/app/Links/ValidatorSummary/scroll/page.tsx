"use client"

import Link from "next/link"
import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import anime from "animejs/lib/anime.es.js"
import { Card } from "@/components/Card"
import { useRef, useEffect } from "react"
import styles2 from "../../../../styles/clusterTable.module.css"
export default function Home() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])

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

  return (
    <div className="  flex flex-col items-center justify-center space-y-5 w-[83vw] container mx-auto">
      <div className="  flex flex-col w-full items-center justify-center mt-6">
        <h1
          className="text-[2.5rem] font-black "
          ref={el => (elementsRef.current[0] = el)}
        >
          Scroll
        </h1>
        <h1
          className="text-md font-black "
          ref={el => (elementsRef.current[1] = el)}
        >
          Validator's Performance
        </h1>
      </div>

      <div
        className=" flex space-x-8 flex-wrap  "
        ref={el => (elementsRef.current[3] = el)}
      >
        <Card text={"Number of Validators"} numbers={20} />
        <Card text={"Backward Looking APR% "} numbers={3200} />
        <Card text={"Effectiveness Rating"} numbers={99} />
      </div>

      <div
        className="bg-gray-300  w-[50vw] flex px-5 py-2  h-[50vh] space-x-12 justify-center items-center mt-5 opacity-80"
        ref={el => (elementsRef.current[4] = el)}
      >
        <div className="flex flex-col scale-110">
          <div className="bg-inter text-white px-4 py-2">
            Performance Metrics
          </div>
          <div className="bg-white text-black px-4 py-2">
            Execution Layer metrics
          </div>
          <div className="bg-white text-black px-4 py-2">
            Consensus Layer metrics
          </div>
          <div className="bg-white text-black px-4 py-2">
            Aggregate reward statistics
          </div>
          <div className="bg-white text-black px-4 py-2">Activation status</div>
          <div className="bg-white text-black px-4 py-2">Withdrawl Status</div>
        </div>

        <div className="scale-90">
          <table className={styles2.table2}>
            <thead>
              <tr>
                <th className={styles2.th2}>Metri</th>
                <th className={styles2.th2}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles2.td2}>Source vote accuracy</td>
                <td className={styles2.td2}>96%</td>
              </tr>
              <tr>
                <td className={styles2.td2}>Target vote accuracy</td>
                <td className={styles2.td2}>98%</td>
              </tr>
              <tr>
                <td className={styles2.td2}>Head vote accuracy</td>
                <td className={styles2.td2}>99%</td>
              </tr>

              <tr>
                <td className={styles2.td2}>Proposal miss rate</td>
                <td className={styles2.td2}>0.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center w-[50vw]  ">
        <p
          className=" font-thin w-9/12 mt-4"
          ref={el => (elementsRef.current[5] = el)}
        >
          Note: These numbers are static and are shown for demo purposes only
        </p>
      </div>
    </div>
  )
}
