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
      <body className="h-[90vh]">
        <div className="flex flex-row h-full">
          <Sidebar />
          <div className="w-full h-full">
            <Navbar />
            <div className="p-5 bg-gray-50 h-full rounded-xl">{children}</div>
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
