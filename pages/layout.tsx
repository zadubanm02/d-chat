import MessageControls from "../components/MessageControls";
import Navbar from "../components/Navbar";
import Shell from "../components/Shell";
import Sidebar from "../components/Sidebar";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={monserrat.className}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
