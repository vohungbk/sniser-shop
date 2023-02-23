import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5],
});

const ALL_SUPPORTED_CHAIN_IDS = [1, 3, 4, 5];

const INFURA_NETWORK_URLS = {
  1: `https://mainnet.infura.io/v3/82e4929006454911a7218530f8d5b048 `,
  3: `https://ropsten.infura.io/v3/82e4929006454911a7218530f8d5b048 `,
  4: `https://rinkeby.infura.io/v3/82e4929006454911a7218530f8d5b048 `,
  5: `https://goeril.infura.io/v3/82e4929006454911a7218530f8d5b048 `,
};

const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: INFURA_NETWORK_URLS,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
};
