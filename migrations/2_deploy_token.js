const Token = artifacts.require("Token")

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Token,
    "My Token",
    "MTK",
    1000000000,
    {
      from: accounts[9]
    }
  );
  const TokenInstance = await Token.deployed();
  console.log(`Token deployed at ${TokenInstance.address}`);
}
