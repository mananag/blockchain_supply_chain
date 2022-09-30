import Web3 from 'web3'
import {api_key} from '../config.json'
let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    web3 = new Web3(Web3.givenProvider);
}else
    web3 = new Web3(api_key)

export default web3