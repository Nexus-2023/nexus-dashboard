import React from "react"
import styles from "../styles/clusterTable.module.css"
import styles2 from "../styles/Table.module.css"
const IntegrationTable = () => {
  return (
    <div>
      <table className={styles2.table}>
        <thead>
          <tr>
            <th className={styles2.th}>Rollup</th>
            <th className={styles2.th}>Number of Active Validator</th>
            <th className={styles2.th}>Total ETH Staked</th>
            <th className={styles2.th}>Staking Limit</th>
            <th className={styles2.th}>ETH Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles2.td}>Polygon zkEVM</td>
            <td className={styles2.td}>20</td>
            <td className={styles2.td}>1000</td>
            <td className={styles2.td}>25%</td>
            <td className={styles2.td}>30</td>
          </tr>
          <tr>
            <td className={styles2.td}>Mantle</td>
            <td className={styles2.td}>20</td>
            <td className={styles2.td}>1000</td>
            <td className={styles2.td}>25%</td>
            <td className={styles2.td}>30</td>
          </tr>
          <tr>
            <td className={styles2.td}>Scroll</td>
            <td className={styles2.td}>20</td>
            <td className={styles2.td}>1000</td>
            <td className={styles2.td}>25%</td>
            <td className={styles2.td}>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const AdminTable = () => {
  return (
    <div>
      <table className={styles2.table}>
        <thead>
          <tr>
            <th className={styles2.th}>Rollup Name</th>
            <th className={styles2.th}>Rollup Admin Address</th>
            <th className={styles2.th}> Cluster ID</th>
            <th className={styles2.th}>Staking Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles2.td}>Scroll</td>
            <td className={styles2.td}>
              0xE4Cb6F91Cf8748F3FD0c9D281157b276DD437609
            </td>
            <td className={styles2.td}>1</td>
            <td className={styles2.td}>25%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const ClusterTable = () => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Cluster ID</th>
            <th className={styles.th}>Highest APR (%)</th>
            <th className={styles.th}>Effectiveness Rating (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>1</td>
            <td className={styles.td}>4.68 %</td>
            <td className={styles.td}>99.3 %</td>
          </tr>

          <tr>
            <td className={styles.td}> 2</td>
            <td className={styles.td}>4.62 %</td>
            <td className={styles.td}>99.5 %</td>
          </tr>

          <tr>
            <td className={styles.td}>3</td>
            <td className={styles.td}>4.64 %</td>
            <td className={styles.td}>99.1 %</td>
          </tr>

          <tr>
            <td className={styles.td}>4</td>
            <td className={styles.td}>4.58 %</td>
            <td className={styles.td}>99.7 %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
interface Table1Props {
  ethLocked: number
  stakingLimit: number
}

interface Table2Props {
  ethStaked: number
  noOfValidators: number
  Earning: number
  EPR: number
}

const Table1: React.FC<Table1Props> = ({ ethLocked, stakingLimit }) => {
  return (
    <div className="flex items-center text-white font-medium px-4 py-4 text-lg   ">
      <div className=" bg-inter h-32 justify-center items-center flex p-4  ">
        <p>Rollup Parameters</p>
      </div>

      <div className="flex flex-col bg-primary space-y-4 h-32   border-b-white    ">
        <div className="border-b-2 py-2 px-4 mt-3">ETH locked in bridges</div>

        <div className=" py-2 px-4 ">Staking Limit</div>
      </div>

      <div className="flex flex-col bg-primary space-y-4   h-32 ">
        <div className="border-b-2 py-2 px-4 mt-3">{ethLocked}</div>

        <div className="  py-2 px-4 ">{stakingLimit}%</div>
      </div>
    </div>
  )
}

const Table2: React.FC<Table2Props> = ({
  ethStaked,
  noOfValidators,
  Earning,
  EPR,
}) => {
  return (
    <>
      <div className="flex   text-white font-medium px-4 py-4 text-xl  w-full  text-center  ">
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
          <div className="border-b-2 py-2 px-4 mt-3">{ethStaked}</div>
          <div className="border-b-2 py-2 px-4 mt-3">{noOfValidators}</div>
          <div className="border-b-2 py-2 px-4 mt-3">{Earning}</div>
          <div className="  py-2 px-4 ">{EPR}%</div>
        </div>
      </div>
    </>
  )
}

export { IntegrationTable, Table1, Table2, AdminTable, ClusterTable }
