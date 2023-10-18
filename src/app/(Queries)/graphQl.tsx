import React from "react"
import { gql } from "@apollo/client"

const GET_ROLLUP = gql`
  {
    rollups(first: 10) {
      bridgeContract
      id
      name
      rewards
      stakingLimit
      validatorCount
    }
  }
`

export { GET_ROLLUP }
