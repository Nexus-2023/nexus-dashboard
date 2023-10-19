"use client"

import "./globals.css"

import { SideBar } from "@/components/SideBar"

import "@rainbow-me/rainbowkit/styles.css"

import {
  getDefaultWallets,
  darkTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  filecoinHyperspace,
  polygonMumbai,
  filecoin,
  base,
  zora,
  scrollTestnet,
  scrollSepolia,
  polygonZkEvm,
  polygonZkEvmTestnet,
  mantleTestnet,
} from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/55430/nexus/version/latest",
})

const getSiweMessageOptions = () => ({
  statement: "Sign in to my RainbowKit app",
})

const defaultChains = [
  {
    ...mainnet,
  },
  { ...goerli },

  // {
  //   ...filecoinHyperspace,
  //   iconUrl: "https://i.imgur.com/oo7FPwT.png",
  // },

  { ...scrollTestnet, iconUrl: "https://i.imgur.com/MVlSJm7.png" },
  { ...scrollSepolia, iconUrl: "https://i.imgur.com/MVlSJm7.png" },

  { ...mantleTestnet, iconUrl: "https://i.imgur.com/Gye7nB2.png" },
  {
    ...polygonMumbai,
    iconUrl: "https://i.imgur.com/Sq18UfT.png",
  },
  {
    ...polygonZkEvmTestnet,
    iconUrl: "https://i.imgur.com/Sq18UfT.png",
  },
  { ...optimism },
  {
    ...filecoin,
    iconUrl: "https://i.imgur.com/oo7FPwT.png",
  },

  { ...arbitrum },
  { ...base },
  { ...zora },
  // { ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []) },
]

const { chains, publicClient } = configureChains(
  // [mainnet, polygon, optimism, arbitrum, base, zora],
  defaultChains,
  [
    alchemyProvider({
      apiKey: process.env.ALCHEMY_ID || "Ol2-sdEOu9L-vkvwuM9ZcTVZnDWxBqOT",
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: "Nexus Dashboard",
  projectId: process.env.PROCESS_ID || "2dbf4cceef74811b991d49ab18fa18ec",
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Work+Sans"
        />
      </head>
      <body>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <ApolloProvider client={client}>
              <div className="flex">
                <div>
                  <SideBar />
                </div>

                <div>{children}</div>
              </div>
            </ApolloProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
