import web3 from "./web3";
import Supplychain from '../bin/ethereum/contracts/Supplychain.json'

const ABI = Supplychain.abi
import {address} from '../config.json'

export default new web3.eth.Contract(ABI, address)