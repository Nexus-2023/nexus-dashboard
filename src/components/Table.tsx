import React from "react"

const IntegrationTable = () => {
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

const PolygonTable1 = () => {
  return (
    <div className="flex items-center text-white font-medium px-4 py-4 text-2xl   ">
      <div className=" bg-inter h-32 justify-center items-center flex p-4  ">
        <p>Layer 2 Parameters</p>
      </div>

      <div className="flex flex-col bg-primary space-y-4 h-32   border-b-white    ">
        <div className="border-b-2 py-2 px-4 mt-3">ETH locked in bridges</div>

        <div className=" py-2 px-4 ">Staking Limit</div>
      </div>

      <div className="flex flex-col bg-primary space-y-4   h-32 ">
        <div className="border-b-2 py-2 px-4 mt-3">10,000</div>

        <div className="  py-2 px-4 ">80%</div>
      </div>
    </div>
  )
}

const PolygonTable2 = () => {
  return (
    <div className="flex items-center text-white font-medium px-4 py-4 text-xl    text-center w-8/12">
      <div className=" bg-inter w-1/2 h-64 justify-center text-lg items-center flex px-4  text-left">
        <p>Nexus Network Parameters</p>
      </div>

      <div className="flex flex-col bg-primary space-y-4  h-64   border-b-white  w-full   ">
        <div className="border-b-2 py-2 px-4 mt-3">ETH Staked</div>
        <div className="border-b-2 py-2 px-4 mt-3  ">
          Number of Active Validators
        </div>
        <div className="border-b-2 py-2 px-4 mt-3">
          Earnings till date (ETH)
        </div>
        <div className=" py-2 px-4 ">Effective APR %</div>
      </div>

      <div className="flex flex-col bg-primary space-y-4  w-full   h-64 ">
        <div className="border-b-2 py-2 px-4 mt-3">8,000</div>
        <div className="border-b-2 py-2 px-4 mt-3">260</div>
        <div className="border-b-2 py-2 px-4 mt-3">230</div>
        <div className="  py-2 px-4 ">4.81%</div>
      </div>
    </div>
  )
}

export { IntegrationTable, PolygonTable1, PolygonTable2 }
