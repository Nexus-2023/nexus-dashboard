/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  BridgeContract,
  BridgeContractInterface,
} from "../../../contracts/demo_contracts/BridgeContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nexus",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "IncorrectAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectWithdrawalCredentials",
    type: "error",
  },
  {
    inputs: [],
    name: "NotDAO",
    type: "error",
  },
  {
    inputs: [],
    name: "NotNexus",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingLimitExceeding",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongRewardAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EthReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardReceiver",
        type: "address",
      },
    ],
    name: "RewardsRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "slashing",
        type: "bool",
      },
    ],
    name: "RewardsUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAO",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEPOSIT_CONTRACT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NEXUS_NETWORK",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VALIDATOR_DEPOSIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "pubKey",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "withdrawalAddress",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "depositRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct INexusInterface.Validator[]",
        name: "_validators",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "stakingLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "validatorCount",
        type: "uint256",
      },
    ],
    name: "depositValidatorNexus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "toWallet",
        type: "address",
      },
    ],
    name: "redeemRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingReturns",
    outputs: [
      {
        internalType: "uint256",
        name: "TotalRewardsEarned",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "RewardsRedeemed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "Slashing",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "slashed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "validatorCount",
        type: "uint256",
      },
    ],
    name: "updateRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052600080546001600160a01b031990811673ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b17909155600180549091167359d3fb7123ce7f7226a3c2d3e47093b82359abcd17905534801561005857600080fd5b50604051610bd4380380610bd48339810160408190526100779161009c565b600180546001600160a01b0319166001600160a01b03929092169190911790556100cc565b6000602082840312156100ae57600080fd5b81516001600160a01b03811681146100c557600080fd5b9392505050565b610af9806100db6000396000f3fe6080604052600436106100955760003560e01c806398fabd3a1161005957806398fabd3a146101b3578063ada5f642146101d3578063b5dd0d9c146101e9578063c065460014610209578063c6323c261461022957600080fd5b80632e1a7d4d146100d457806331b4676e146100e957806333fcca9e14610128578063441d92cc146101485780636b96736b1461017357600080fd5b366100cf576040513481527f353bcaaf167a6add95a753d39727e3d3beb865129a69a10ed774b0b8996714039060200160405180910390a1005b600080fd5b6100e76100e23660046107f3565b610249565b005b3480156100f557600080fd5b5060025460035460045461010892919083565b604080519384526020840192909252908201526060015b60405180910390f35b34801561013457600080fd5b506100e761014336600461080c565b61029f565b34801561015457600080fd5b506101656801bc16d674ec80000081565b60405190815260200161011f565b34801561017f57600080fd5b5061019b73ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b81565b6040516001600160a01b03909116815260200161011f565b3480156101bf57600080fd5b5060005461019b906001600160a01b031681565b3480156101df57600080fd5b5061016561271081565b3480156101f557600080fd5b506100e7610204366004610849565b6103c7565b34801561021557600080fd5b5060015461019b906001600160a01b031681565b34801561023557600080fd5b506100e76102443660046108cb565b6106c6565b6040516000908190339061138890859084818181858888f193505050503d8060008114610292576040519150601f19603f3d011682016040523d82523d6000602084013e610297565b606091505b505050505050565b6001546001600160a01b031633146102ca5760405163114eded760e21b815260040160405180910390fd5b8115801561032657506301e18558600554426102e6919061091d565b6102f9836801bc16d674ec800000610936565b6103039190610936565b61030e90600a610936565b610318919061094d565b610323906064610936565b83105b156103445760405163142ce94560e21b815260040160405180910390fd5b8115610369578260028001600082825461035e919061096f565b909155506103849050565b826002600001600082825461037e919061096f565b90915550505b426005556040805184815283151560208201527f1e9f56a1a8b0217f64ee305ced0d4978d8963be53e2997b45dc5027f58fa6cab910160405180910390a1505050565b6001546001600160a01b031633146103f25760405163114eded760e21b815260040160405180910390fd5b60005b838110156104e657600085858381811061041157610411610982565b90506020028101906104239190610998565b6104319060208101906109b8565b61043f91600c908290610a06565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040516bffffffffffffffffffffffff193060601b1660208201529293505060349091019050604051602081830303815290604052805190602001208180519060200120146104d3576040516371b37a2760e11b815260040160405180910390fd5b50806104de81610a30565b9150506103f5565b50816801bc16d674ec8000006104fc858461096f565b6105069190610936565b610510904761096f565b6127106801bc16d674ec800000610527878661096f565b6105319190610936565b61053b9190610936565b610545919061094d565b1115610564576040516342ae1a0360e11b815260040160405180910390fd5b60005b838110156106b45773ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b63228951186801bc16d674ec8000008787858181106105a5576105a5610982565b90506020028101906105b79190610998565b6105c190806109b8565b8989878181106105d3576105d3610982565b90506020028101906105e59190610998565b6105f39060208101906109b8565b8b8b8981811061060557610605610982565b90506020028101906106179190610998565b6106259060408101906109b8565b8d8d8b81811061063757610637610982565b90506020028101906106499190610998565b606001356040518963ffffffff1660e01b815260040161066f9796959493929190610a72565b6000604051808303818588803b15801561068857600080fd5b505af115801561069c573d6000803e3d6000fd5b505050505080806106ac90610a30565b915050610567565b506106bf838261096f565b5050505050565b6000546001600160a01b031633146106f1576040516327568d2f60e11b815260040160405180910390fd5b600454600354600254610704919061091d565b61070e919061091d565b82111561072e576040516334b2073960e11b815260040160405180910390fd5b600080826001600160a01b03168461138890604051600060405180830381858888f193505050503d8060008114610781576040519150601f19603f3d011682016040523d82523d6000602084013e610786565b606091505b509150915083600260010160008282546107a0919061096f565b909155505081156107ed57604080518581526001600160a01b03851660208201527f610773e0e3dc35096e801da5eb42518d0945862bd0bdf2d9f7c3d04ab1d74a6b910160405180910390a15b50505050565b60006020828403121561080557600080fd5b5035919050565b60008060006060848603121561082157600080fd5b833592506020840135801515811461083857600080fd5b929592945050506040919091013590565b6000806000806060858703121561085f57600080fd5b843567ffffffffffffffff8082111561087757600080fd5b818701915087601f83011261088b57600080fd5b81358181111561089a57600080fd5b8860208260051b85010111156108af57600080fd5b6020928301999098509187013596604001359550909350505050565b600080604083850312156108de57600080fd5b8235915060208301356001600160a01b03811681146108fc57600080fd5b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561093057610930610907565b92915050565b808202811582820484141761093057610930610907565b60008261096a57634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561093057610930610907565b634e487b7160e01b600052603260045260246000fd5b60008235607e198336030181126109ae57600080fd5b9190910192915050565b6000808335601e198436030181126109cf57600080fd5b83018035915067ffffffffffffffff8211156109ea57600080fd5b6020019150368190038213156109ff57600080fd5b9250929050565b60008085851115610a1657600080fd5b83861115610a2357600080fd5b5050820193919092039150565b600060018201610a4257610a42610907565b5060010190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b608081526000610a8660808301898b610a49565b8281036020840152610a9981888a610a49565b90508281036040840152610aae818688610a49565b9150508260608301529897505050505050505056fea2646970667358221220096c1d45fdc702bc00d461b211999284be834499d9d29caabce0b1d1caa3664464736f6c63430008130033";

type BridgeContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeContract__factory extends ContractFactory {
  constructor(...args: BridgeContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _nexus: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_nexus, overrides || {});
  }
  override deploy(
    _nexus: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_nexus, overrides || {}) as Promise<
      BridgeContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BridgeContract__factory {
    return super.connect(runner) as BridgeContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeContractInterface {
    return new Interface(_abi) as BridgeContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BridgeContract {
    return new Contract(address, _abi, runner) as unknown as BridgeContract;
  }
}
