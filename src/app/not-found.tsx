"use client"

import { useRef, useEffect } from "react"
import anime from "animejs/lib/anime.es.js"
export default function NotFound() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    if (elementsRef.current) {
      anime.timeline({ loop: false }).add({
        targets: elementsRef.current,
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(450, { easing: "easeOutSine" }),
      })
    }
  }, [])
  return (
    // absolute top-[10rem] left-[25rem] -mt-[18rem]
    <div className="flex justify-center flex-col items-center   w-[100vw]     h-[100vh]">
      <div
        className="flex   items-center justify-center  opacity-0  w-full   
       "
        ref={el => (elementsRef.current[0] = el)}
      >
        <h1 className="text-5xl font-black text-center -mt-[18rem]  mr-[15rem]   text-black ">
          404 - Page Not Found
        </h1>
      </div>
      <div
        className="  flex   items-center justify-center    relative   w-full opacity-0 "
        ref={el => (elementsRef.current[1] = el)}
      >
        <div className="vader   ">
          <div className="shadow"></div>
          <div className="head">
            <div className="helmet">
              <span className="left"></span>
              <span className="right"></span>
            </div>
            <div className="eyes">
              <span className="left"></span>
              <span className="right"></span>
            </div>
            <span className="grill">
              <span className="left"></span>
              <span className="center"></span>
              <span className="right"></span>
            </span>
            <span className="mask">
              <span className="top"></span>
              <span className="left"></span>
              <span className="center"></span>
              <span className="right"></span>
            </span>
            <span className="line"></span>
          </div>
          <div className="torso">
            <span className="neck">
              <span className="left"></span>
              <span className="center"></span>
              <span className="right"></span>
              <span className="bottom"></span>
            </span>
            <span className="belt">
              <span className="center"></span>
            </span>
            <div className="plate">
              <span className="red_top"></span>
              <span className="red_center"></span>
              <span className="red_bottom"></span>
              <span className="blue"></span>
              <span className="gray"></span>
            </div>
          </div>
          <div className="hand left">
            <span className="hand"></span>
          </div>
          <div className="hand right animation-right">
            <span className="hand"></span>
          </div>
          <div className="legs">
            <span className="left"></span>
            <span className="right"></span>
          </div>
          <div className="boots">
            <span className="left"></span>
            <span className="right"></span>
          </div>
          <div className="sword animation-left">
            <span className="handle"></span>
            <span className="light"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
