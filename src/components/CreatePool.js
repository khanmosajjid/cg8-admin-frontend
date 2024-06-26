import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  createPool,
  poolsDetails,
  getTotalPoolsCount,
  convertToEther,
  disablePool,
} from "../utils/web3Utils";
import { useAccount } from "wagmi";

function StakingPoolForm() {
  const [timePeriod, setTimePeriod] = useState("");
  const [stakeToken, setStakeToken] = useState("");
  const [rewardToken, setRewardToken] = useState("");
  const [rewardPercent, setRewardPercent] = useState("");
  const [referralRewardPercent, setReferralRewardPercent] = useState("");
  const { address, isConnected } = useAccount();
  const [pools, setPools] = useState([]);

  // Fetch pools data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const count = await getTotalPoolsCount();
      const poolData = await poolsDetails(address);
      console.log("pool data is---->", poolData);
      setPools(poolData);
    };

    fetchData().catch(console.error);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(
      timePeriod,

      rewardPercent,
      referralRewardPercent
    );
    let res = await createPool(
      timePeriod * 24 * 60 * 60,
      rewardPercent * 100,
      referralRewardPercent * 100
    );
    if (res.status == "success") {
      alert("Pool Created Successfully");
      window.location.reload();
    }
  };

  const togglePoolStatus = async (index) => {
    try {
      let res = await disablePool(index);
      if ((res.status = "success")) {
        alert("pool status updated");
        window.location.reload();
      } else {
        alert("something went wrong!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error toggling pool status:", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            placeholder="Time Period(In Days)"
          />

          <input
            type="number"
            value={rewardPercent}
            onChange={(e) => setRewardPercent(e.target.value)}
            placeholder="Reward Percent"
          />
          <input
            type="number"
            value={referralRewardPercent}
            onChange={(e) => setReferralRewardPercent(e.target.value)}
            placeholder="Referral Reward Percent"
          />
          <button type="submit">Create Staking Pool</button>
        </form>
      </div>
      <div className="pools-table-container">
        <table className="pools-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Time Period</th>
              <th>Reward Percent PerStaked Token PerDay</th>
              <th>Referral Reward Percent</th>
              <th>Actions</th> {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {pools.map((pool, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{(Number(pool[0]) / (24 * 60 * 60)).toFixed(2)} Days</td>
                <td>{Number(pool[3]) / 100}</td>
                <td>{Number(pool[4]) / 100}</td>
                <td>
                  {/* Toggle Button */}
                  <button onClick={() => togglePoolStatus(index)}>
                    {pool[5] ? "Disable" : "Enable"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StakingPoolForm;
