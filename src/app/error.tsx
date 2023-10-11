"use client"

import React from "react"
export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error)
  }, [error])

  return (
    <div>
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white bg-secondary h-96 w-96">
          Error
        </h2>
        <p className="text-sm">{error?.message}</p>
      </div>
    </div>
  )
}
