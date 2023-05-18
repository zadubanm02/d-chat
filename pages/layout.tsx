import MessageControls from "../components/MessageControls";
import Navbar from "../components/Navbar";
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
      <body className="h-[82vh]">
        <div className="flex flex-row max-h-full">
          <Sidebar />
          <div className="w-full">
            <Navbar />
            <div className=" overflow-y-auto h-full flex flex-col p-5 bg-gray-50 rounded-xl w-full">
              {children}
            </div>
            <MessageControls />
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
