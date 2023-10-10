"use client"

import Link from "next/link"
import Image from "next/image"
import StyledButton from "@/components/button"
import { PolygonTable1, PolygonTable2 } from "@/components/Table"
import { Card } from "@/components/Card"
export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center space-y-5 w-[83vw] container mx-auto">
      <div className="  flex flex-col w-full items-center justify-center mt-6">
        <h1 className="text-[2.5rem] font-black ">Polygon zkEVM</h1>
        <h1 className="text-md font-black ">Validator's Performance</h1>
      </div>

      <div className=" flex space-x-8 flex-wrap  ">
        <Card text={"Number of Validators"} numbers={20} />
        <Card text={"Backward Looking APR% "} numbers={3200} />
        <Card text={"Effectiveness Rating"} numbers={99} />
      </div>
    </div>
  )
}
