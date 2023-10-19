import React from "react"

interface CardProps {
  text: string
  numbers: number
}

export const Card: React.FC<CardProps> = ({ text, numbers }) => {
  return (
    <div className=" bg-inter text-lg text-white  font-semibold   w-60 py-4  h-28   rounded-md flex flex-col justify-center items-center">
      <div>{numbers}</div>
      <div className="text-center">{text}</div>
    </div>
  )
}
