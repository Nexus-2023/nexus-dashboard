"use client"

import Link from "next/link"
import Image from "next/image"
import { StyledButton1, StyledButton2 } from "@/components/button"
import anime from "animejs/lib/anime.es.js"
import { Card } from "@/components/Card"
import { useRef, useEffect } from "react"

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
    </div>
  )
}
