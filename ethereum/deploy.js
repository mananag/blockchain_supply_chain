const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3")
const compiledFactory = require("../bin/ethereum/contracts/Supplychain.json");
const ABI = compiledFactory.abi
const bytecode = compiledFactory.bytecode

// console.log(ABI, bytecode)
const {mnemonicPhase} = require('../config.json')

provider = new HDWalletProvider(
    mnemonicPhase,
    `https://eth-goerli.g.alchemy.com/v2/zrhu_HMKw7FMA40FRoB3CeRkT2bsLOlq`
)

const web3 = new Web3(provider)

const deploy = async () => {
    console.log('Deploying...')

    let accounts = await web3.eth.getAccounts()

    console.log('Attempting to deploy from account', accounts[0])
    console.log(ABI)

    const result = await new web3.eth.Contract(ABI)
        .deploy({
            data: bytecode
        }).send({
            gas: 5000000, from: accounts[0]
        })

    console.log('Contract deployed to', result.options.address)
}

deploy()
