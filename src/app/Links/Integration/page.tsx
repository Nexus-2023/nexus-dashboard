"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { Card } from "@/components/Card"
import { IntegrationTable } from "@/components/Table"
import { useRef, useEffect } from "react"
import anime from "animejs/lib/anime.es.js"

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
    <div className="  flex flex-col items-center justify-center space-y-12  w-[83vw] container mx-auto">
      <div className="  flex flex-col w-full items-center justify-center mt-6">
        <h1
          className="text-[2.5rem] font-black opacity-0"
          ref={el => (elementsRef.current[0] = el)}
        >
          Integration Summary
        </h1>
      </div>
      <div className=" flex space-x-8 flex-wrap  ">
        <div ref={el => (elementsRef.current[1] = el)} className=" opacity-0">
          <Card text={"Number of Rollups Registered"} numbers={3} />
        </div>
        <div ref={el => (elementsRef.current[2] = el)} className=" opacity-0">
          <Card text={"Eth Staked "} numbers={3200} />
        </div>
        <div ref={el => (elementsRef.current[3] = el)} className=" opacity-0">
          <Card text={"Earnings (Eth)"} numbers={1000} />
        </div>
      </div>

      <div ref={el => (elementsRef.current[4] = el)} className=" opacity-0">
        <IntegrationTable />
      </div>
    </div>
  )
}
