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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Withdraw,
  WithdrawInterface,
} from "../../../contracts/Withdrawal.sol/Withdraw";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_daoAddress",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_nexusFeePercentage",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidAccess",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes",
      },
    ],
    name: "ExitingValidatorAdded",
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
    ],
    name: "NexusRewardSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "newShare",
        type: "uint32",
      },
    ],
    name: "NexusShareUpdated",
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
    ],
    name: "RollupRewardSent",
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
    ],
    name: "SlashingAmountUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINT",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAO_ADDRESS",
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
    name: "NEXUS_CONTRACT",
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
    name: "NEXUS_FEE_CONTRACT",
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
    name: "amountSlashed",
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
        internalType: "bytes[]",
        name: "pubkeys",
        type: "bytes[]",
      },
    ],
    name: "exitInitiated",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "exitingPubkeys",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumSlashedAmount",
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
    name: "nexusShare",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slashingAmount",
        type: "uint256",
      },
    ],
    name: "slashing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_newFee",
        type: "uint16",
      },
    ],
    name: "updateNexusRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "pubkeys",
        type: "bytes[]",
      },
    ],
    name: "withdrawRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405267de0b6b3a7640000060015534801561001c57600080fd5b50604051610b97380380610b9783398101604081905261003b91610068565b6001600160a01b039190911660a0526000805461ffff191661ffff909216919091179055336080526100b5565b6000806040838503121561007b57600080fd5b82516001600160a01b038116811461009257600080fd5b602084015190925061ffff811681146100aa57600080fd5b809150509250929050565b60805160a051610a9b6100fc600039600081816101cc015261053001526000818160f90152818161020201528181610260015281816103a001526104270152610a9b6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063dfee091a11610071578063dfee091a1461016a578063e5c8d5d81461018a578063f4bfe4f21461019d578063f554cf4e146101b4578063f68ded66146101c7578063fbbd553b146101ee57600080fd5b806309980b4f146100b95780634b67e0a9146100df5780634d66a308146100f4578063752263691461013357806393e168cf1461014e578063ada5f64214610161575b600080fd5b6000546100c79061ffff1681565b60405161ffff90911681526020015b60405180910390f35b6100f26100ed3660046106f4565b6101f7565b005b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100d6565b61011b734142676ec5706706d3a0792997c4ea343405376b81565b6100f261015c36600461080d565b610255565b6100c761271081565b61017d610178366004610838565b6102e9565b6040516100d69190610851565b6100f2610198366004610838565b610395565b6101a660015481565b6040519081526020016100d6565b6100f26101c23660046106f4565b61041c565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b6101a660035481565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461024057604051633006171960e21b815260040160405180910390fd5b805160000361025257610252476104fa565b50565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461029e57604051633006171960e21b815260040160405180910390fd5b6000805461ffff191661ffff83169081179091556040519081527f53c97e7b331dd71c1b43a44bd98efbfcf0766c1641224527d87f40a5b15e4745906020015b60405180910390a150565b600281815481106102f957600080fd5b9060005260206000200160009150905080546103149061089f565b80601f01602080910402602001604051908101604052809291908181526020018280546103409061089f565b801561038d5780601f106103625761010080835404028352916020019161038d565b820191906000526020600020905b81548152906001019060200180831161037057829003601f168201915b505050505081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103de57604051633006171960e21b815260040160405180910390fd5b80600354146102525760038190556040518181527f8d20b8fac574d10b91c0a43b80ce5212cb39089ec2550c3413533bc4d06f0586906020016102de565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461046557604051633006171960e21b815260040160405180910390fd5b60005b81518110156104f65761049e828281518110610486576104866108d9565b6020026020010151600261068c90919063ffffffff16565b7f5359b54cb9eda962860bd364d4994d6d721daf97d5131c3d1c8cc5114226c87b8282815181106104d1576104d16108d9565b60200260200101516040516104e69190610851565b60405180910390a1600101610468565b5050565b600080546127109061051190849061ffff16610905565b61051b9190610922565b905060006105298284610944565b90506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168361138890604051600060405180830381858888f193505050503d806000811461059e576040519150601f19603f3d011682016040523d82523d6000602084013e6105a3565b606091505b509150915081156105e2576040518381527f48cee5befd50c6e59209fe3b1ea11cb44fcd6196e70b898acac1bfe62bb4f4ce9060200160405180910390a15b6040516000908190734142676ec5706706d3a0792997c4ea343405376b9061138890889084818181858888f193505050503d806000811461063f576040519150601f19603f3d011682016040523d82523d6000602084013e610644565b606091505b50915091508115610683576040518681527ff4c92f9ae49de944f65b7ca72206ef42d3f3a450ce2d20b42bf1de7848dac7a99060200160405180910390a15b50505050505050565b8154600181018355600083815260209020016106a882826109a5565b505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156106ec576106ec6106ad565b604052919050565b6000602080838503121561070757600080fd5b823567ffffffffffffffff8082111561071f57600080fd5b8185019150601f868184011261073457600080fd5b823582811115610746576107466106ad565b8060051b6107558682016106c3565b918252848101860191868101908a84111561076f57600080fd5b87870192505b838310156107ff5782358681111561078d5760008081fd5b8701603f81018c1361079f5760008081fd5b888101356040888211156107b5576107b56106ad565b6107c6828901601f19168c016106c3565b8281528e828486010111156107db5760008081fd5b828285018d83013760009281018c0192909252508352509187019190870190610775565b9a9950505050505050505050565b60006020828403121561081f57600080fd5b813561ffff8116811461083157600080fd5b9392505050565b60006020828403121561084a57600080fd5b5035919050565b600060208083528351808285015260005b8181101561087e57858101830151858201604001528201610862565b506000604082860101526040601f19601f8301168501019250505092915050565b600181811c908216806108b357607f821691505b6020821081036108d357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761091c5761091c6108ef565b92915050565b60008261093f57634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561091c5761091c6108ef565b601f8211156106a857600081815260208120601f850160051c8101602086101561097e5750805b601f850160051c820191505b8181101561099d5782815560010161098a565b505050505050565b815167ffffffffffffffff8111156109bf576109bf6106ad565b6109d3816109cd845461089f565b84610957565b602080601f831160018114610a0857600084156109f05750858301515b600019600386901b1c1916600185901b17855561099d565b600085815260208120601f198616915b82811015610a3757888601518255948401946001909101908401610a18565b5085821015610a555787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212200714b7e1f2f7b4cd38964147add3b3154a19cf07181370e3534924ccde13321464736f6c63430008130033";

type WithdrawConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Withdraw__factory extends ContractFactory {
  constructor(...args: WithdrawConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _daoAddress: AddressLike,
    _nexusFeePercentage: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _daoAddress,
      _nexusFeePercentage,
      overrides || {}
    );
  }
  override deploy(
    _daoAddress: AddressLike,
    _nexusFeePercentage: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _daoAddress,
      _nexusFeePercentage,
      overrides || {}
    ) as Promise<
      Withdraw & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Withdraw__factory {
    return super.connect(runner) as Withdraw__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawInterface {
    return new Interface(_abi) as WithdrawInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Withdraw {
    return new Contract(address, _abi, runner) as unknown as Withdraw;
  }
}
