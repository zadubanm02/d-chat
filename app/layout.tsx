"use client";

import MessageControls from "../components/MessageControls";
import Navbar from "../components/Navbar";
import Shell from "../components/Shell";
import Sidebar from "../components/Sidebar";
import { Montserrat } from "next/font/google";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Moralis from "moralis";
import { useEffect } from "react";
import "./globals.css";

const activeChain = "goerli";

const monserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <html lang="en" className={monserrat.className}>
        <body>
          <Shell>{children}</Shell>
        </body>
      </html>
    </ThirdwebProvider>
  );
}
