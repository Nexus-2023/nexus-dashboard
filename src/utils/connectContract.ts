/** @format */
 
import NexusAbiJson from "./Nexus.json"
 

 
import { Nexus } from "./Nexus";

import { ethers } from "ethers";

//Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.
 
const NexusAddress = "0xE3C0F0089fb0c38C7Dd2E780B9309419e1dEcd77"
import { MetaMaskInpageProvider } from "@metamask/providers";

interface NexusContract {
  NexusAbiJson: Nexus;
  // Add any other properties or methods you need to access from the contract
}

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}

export async function connectNexus() {
 
  // const nexusABI: any = NexusAbiJson as  any ;
  const { abi: nexusABI} = NexusAbiJson 
  let nexusContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      // const provider = new ethers.providers.Web3Provider(ethereum);
      // const provider = new ethers.providers.JsonRpcProvider();
      const provider = new ethers.BrowserProvider(ethereum);
      // const signer = provider.getSigner();
      const signer = await provider.getSigner();
      // const providerSigner = signer as any;
      nexusContract = new ethers.Contract(
        NexusAddress,
        nexusABI as any,
        signer
      ); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return nexusContract;
}

 