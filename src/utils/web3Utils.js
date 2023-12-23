import {
  getContract,
  readContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";
import {
  TOKEN_CONTRACT,
  STAKING_CONTRACT,
  USDC_CONTRACT,
} from "../constants/contracts";
import StakingABI from "../constants/stakingAbi.json";

import { ethers } from "ethers";
import usdcABI from "../constants/usdcABI.json";
import TokenABI from "../constants/tokenABI.json";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { emitter } from "./eventEmitter";

export const convertToEther = (amount) => {
  try {
    const balanceInWeiBigInt = amount;
    const balanceInWeiBigNumber = ethers.BigNumber.from(
      balanceInWeiBigInt.toString()
    );

    const balanceInEther = ethers.utils.formatEther(balanceInWeiBigNumber);

    return balanceInEther;
  } catch (e) {
    console.log("error is---->", e);
    return 0;
  }
};

export const convertToWei = (amount) => {
  try {
    const balanceInWeiBigInt = amount;
    const balanceInEther = ethers.utils.parseEther(balanceInWeiBigInt);
    return balanceInEther;
  } catch (e) {
    console.log("error is---->", e);
  }
};

export const cGateBalance = async (account) => {
  try {
    const data = await readContract({
      address: TOKEN_CONTRACT,
      abi: TokenABI,
      functionName: "balanceOf",
      args: [account],
    });

    return convertToEther(data);
  } catch (e) {
    console.log("error is----->", e);
  }
};
export const getUsdcBalance = async (account) => {
  try {
    const data = await readContract({
      address: USDC_CONTRACT,
      abi: usdcABI,
      functionName: "balanceOf",
      args: [account],
    });
    console.log("data is------>", convertToEther(data));

    return convertToEther(data);
  } catch (e) {
    console.log("error is----->", e);
  }
};

export const getBalance = async (account, contract, abi) => {
  try {
    const data = await readContract({
      address: contract,
      abi: abi,
      functionName: "balanceOf",
      args: [account],
    });
    console.log("data is------>", convertToEther(data));

    return convertToEther(data);
  } catch (e) {
    console.log("error is----->", e);
  }
};
export const getTotalPoolsCount = async () => {
  try {
    const data = await readContract({
      address: STAKING_CONTRACT,
      abi: StakingABI,
      functionName: "getTotalPoolsCount",
    });

    return Number(data);
  } catch (e) {
    console.log("error is---->", e);
  }
};

export const poolsDetails = async (account) => {
  try {
    const pools = [];
    const noOfPools = await getTotalPoolsCount();
    for (let i = 1; i <= noOfPools; i++) {
      const data = await readContract({
        address: STAKING_CONTRACT,
        abi: StakingABI,
        functionName: "pools",
        args: [i],
      });

      pools[i - 1] = data;
    }
    return pools;
  } catch (e) {
    console.log("error in no of pools is--->", e);
  }
};

export const userDetails = async (address) => {
  try {
    const data = await readContract({
      address: STAKING_CONTRACT,
      abi: StakingABI,
      functionName: "users",
      args: [address],
    });

    return data;
  } catch (e) {
    console.log("error is---->", e);
  }
};

export const approveToken = async (account, spenderContract, contract, abi) => {
  let amount = await getBalance(account, contract, abi);
  console.log("amount to approve is---->", amount);
  amount = convertToWei(amount);
  try {
    const data = await writeContract({
      address: contract,
      abi: abi,
      functionName: "approve",
      args: [spenderContract, amount],
    });
    console.log("data of allowance is------>", convertToEther(data));
    const res = await waitForTransaction({
      hash: data?.hash,
    });
    console.log("after transactin finished", res);
    return res;
  } catch (e) {
    toast.error(e.message);
  }
};

//Staking Functions

export const createPool = async (
  timePeriod,
  rewardPercent,
  referralRewardPercent
) => {
  try {
    const data = await writeContract({
      address: STAKING_CONTRACT,
      abi: StakingABI,
      functionName: "createStakingPool",
      args: [
        timePeriod,
        TOKEN_CONTRACT,
        USDC_CONTRACT,
        rewardPercent,
        referralRewardPercent,
      ],
    });
    // console.log("data of allowance is------>", convertToEther(data));
    const res = await waitForTransaction({
      hash: data?.hash,
    });
    console.log("after transactin finished", res);
    return res;
  } catch (e) {
    const detailsIndex = e?.message.indexOf("Details:");
    const detailsPart = e?.message.substring(detailsIndex);
    

    toast.error(detailsPart);

    // window.location.reload();
  }
};

export const disablePool = async (poolId) => {
  try {
    const data = await writeContract({
      address: STAKING_CONTRACT,
      abi: StakingABI,
      functionName: "togglePoolStatus",
      args: [poolId+1],
    });
    // console.log("data of allowance is------>", convertToEther(data));
    const res = await waitForTransaction({
      hash: data?.hash,
    });
    console.log("after transactin finished", res);
    return res;
  } catch (e) {
    const detailsIndex = e?.message.indexOf("Details:");
    const detailsPart = e?.message.substring(detailsIndex);

    toast.error(detailsPart);
    // window.location.reload();
  }
};
