import React from "react"
import { gql } from "@apollo/client"

const GET_ALL_ROLLUP = gql`
  {
    rollups(where: { validatorCount_gte: 1 }) {
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

const GET_ALL_ROLLUPS = gql`
  {
    rollups {
      bridgeContract
      clusterId
      executionRewards
      id
      name
      nexusFeePercentage
      slashing
      stakingLimit
      validatorCount
    }
  }
`

export { GET_ALL_ROLLUP, GET_USER_ROLLUP, GET_ALL_ROLLUPS }
