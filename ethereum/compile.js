const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'main.sol')
const source = fs.readFileSync(campaignPath, 'utf8')

const input = {
    language: 'Solidity',
    sources: {
        'main.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

console.log(solc.compile(JSON.stringify(input)));
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['main.sol'];
fs.ensureDirSync(buildPath)

for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    )
}
