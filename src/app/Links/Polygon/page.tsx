"use client"

import Link from "next/link"
import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import { Table1, Table2 } from "@/components/Table"
import { useRef, useEffect } from "react"
import anime from "animejs/lib/anime.es.js"
import { GET_ROLLUP } from "@/app/(Queries)/graphQl"

import { useQuery } from "@apollo/client/react"

export default function Home() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])

  const { loading, data } = useQuery(GET_ROLLUP)
  console.log("data = ", data)
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
    <div className="  flex flex-col items-center justify-center space-y-2 w-[83vw] container mx-auto">
      <div className="  flex flex-col w-full items-center justify-center mt-6">
        <h1
          className="text-[2.5rem] font-black "
          ref={el => (elementsRef.current[0] = el)}
        >
          Polygon zkEVM
        </h1>
      </div>

      <div ref={el => (elementsRef.current[1] = el)} className=" opacity-0">
        <Table1 ethLocked={10000} stakingLimit={80} />
      </div>

      <div
        ref={el => (elementsRef.current[2] = el)}
        className=" opacity-0 w-[60vw]   flex justify-center items-center"
      >
        <Table2
          ethStaked={8000}
          noOfValidators={260}
          Earning={230}
          EPR={4.81}
        />
      </div>

      <div ref={el => (elementsRef.current[3] = el)} className=" opacity-0">
        <Link href={"/Links/ValidatorSummary/Polygonzkevm"}>
          <StyledButton1 borderColor="#045192" backgroundColor="#045192">
            Validator Summary
          </StyledButton1>
        </Link>
      </div>
    </div>
  )
}
