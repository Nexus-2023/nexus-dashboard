"use client"

import Image from "next/image"
import StyledButton from "@/components/button"
import Link from "next/link"
export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center space-y-12  w-[83vw] container mx-auto">
      <div className="  flex flex-col w-full items-center justify-center mt-6">
        <h1 className="text-[3.3rem] font-black ">Nexus Network</h1>
        <p className="text-lg">
          Welcome to Nexus , a plug and play staking Solution for L2
        </p>
      </div>

      <div className="w-full max-w-screen-lg mx-auto flex items-center justify-center ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BgCgauWVTs0?si=Dwo48KuAvSThBBdK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <Link href={"/Links/RegisterRollup"}>
        <StyledButton borderColor="#0375C9" backgroundColor="#0375C9">
          Register Rollup
        </StyledButton>
      </Link>
    </div>
  )
}
