import React from "react"
import { gql } from "@apollo/client"

const GET_ALL_ROLLUP = gql`
  {
    rollups(where: { name_not: null }) {
      bridgeContract
      clusterId
      id
      name
      rewards
      slashing
      stakingLimit
      validatorCount
    }
  }
`

const GET_USER_ROLLUP = gql`
  query GetUserRollup($id: String) {
    rollups(where: { id: $id }) {
      bridgeContract
      clusterId
      id
      name
      rewards
      slashing
      stakingLimit
      validatorCount
    }
  }
`

export { GET_ALL_ROLLUP, GET_USER_ROLLUP }
