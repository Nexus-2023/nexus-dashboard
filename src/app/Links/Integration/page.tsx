"use client"

import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { Card } from "@/components/Card"
import { IntegrationTable } from "@/components/Table"
export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center space-y-12  w-[83vw] container mx-auto">
      <div className="  flex flex-col w-full items-center justify-center mt-6">
        <h1 className="text-[2.5rem] font-black ">Integration Summary</h1>
      </div>
      <div className=" flex space-x-8 flex-wrap  ">
        <Card text={"Number of Rollups Registered"} numbers={3} />
        <Card text={"Eth Staked "} numbers={3200} />
        <Card text={"Earnings (Eth)"} numbers={1000} />
      </div>
      <IntegrationTable />
    </div>
  )
}
