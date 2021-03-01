const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 5000000
    },
  },
  compilers: {
    solc: {
      version: "0.6.6"
    }
  }
};
