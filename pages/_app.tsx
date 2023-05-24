import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Layout from "./layout";
import { Provider } from "jotai";
import { useEffect } from "react";
import Moralis from "moralis";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  const startMoralis = async () => {
    await Moralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImY1MWNmMzgzLTU2NDYtNDE4MC04Y2FjLTUwOTAyYzZiZGYzOSIsIm9yZ0lkIjoiMzE3NzIyIiwidXNlcklkIjoiMzI2NjU0IiwidHlwZUlkIjoiM2NlMjQ5YWUtZDBjYy00ZWFkLWIxYjEtYmJjZGQ5MTFmMmUzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODQ1OTI0NjMsImV4cCI6NDg0MDM1MjQ2M30.ryDWoyjZ3-V2hkFmsZI3WLiKykroFst-vmCqhOdqSEQ",
    });
  };
  useEffect(() => {
    startMoralis();
  }, []);
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThirdwebProvider>
  );
}

export default MyApp;
