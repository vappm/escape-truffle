/**
 * Compiler settings consumed by truffle-config.js
 */

let compilers = {};

// Travis sets CI to true by default
if (process.env.CI){
  compilers = {
    solc: {
      version: "0.4.24",
      docker: true,
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    },
  }
}

module.exports = compilers;
