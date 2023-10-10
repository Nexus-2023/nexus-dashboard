import React from "react"

const Table = () => {
  return (
    <div>
      <table className="table-auto ">
        <thead>
          <tr className=" ">
            <th>Rollup</th>
            <th>Number of Active Validator</th>
            <th>Total Eth Staked</th>
            <th>Staking Limit</th>
            <th>Eth Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Polygon zkEVM</td>
            <td>20</td>
            <td>1000</td>
            <td>25%</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Mantle</td>
            <td>20</td>
            <td>1000</td>
            <td>25%</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Scroll</td>
            <td>20</td>
            <td>1000</td>
            <td>25%</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
