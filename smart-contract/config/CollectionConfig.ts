import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TinySerpents',
  tokenName: 'Tiny Serpents',
  tokenSymbol: 'TS',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.000001,
    maxMintAmountPerTx: 10000,
  },
  preSale: {
    price: 0.005,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.005,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0xF0A91eAbAe21D88aAEde8742d931a27eD83d1169",
  marketplaceIdentifier: 'TinySerpents',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
