"use client"

import Link from "next/link"
import Image from "next/image"
import StyledButton from "@/components/button"
import { PolygonTable1, PolygonTable2 } from "@/components/Table"
export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center space-y-2 w-[83vw] container mx-auto">
      <div className="  flex flex-col w-full items-center justify-center mt-6">
        <h1 className="text-[2.5rem] font-black ">Polygon zkEVM</h1>
      </div>
      <PolygonTable1 />
      <PolygonTable2 />

      <Link href={"/Links/ValidatorSummary/Polygonzkevm"}>
        <StyledButton borderColor="#045192" backgroundColor="#045192">
          Validator Summary
        </StyledButton>
      </Link>
    </div>
  )
}
