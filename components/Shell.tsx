import React, { useMemo } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MessageControls from "./MessageControls";
import { useWindowSize } from "../hooks/useWindowSize";

type ShellProps = {
  children?: React.ReactNode;
};

const Shell: React.FC<ShellProps> = ({ children }) => {
  const { width, height, elementHeight } = useWindowSize();

  return (
    <div className={`max-h-[${height}] w-screen grid gap-4 grid-cols-12 `}>
      {/* Place for Sidebar */}
      <Sidebar />
      {/* Place for Navbar */}
      <div className={`col-span-9 max-h-[${height}]`}>
        <Navbar />
        <div className={`overflow-y-auto h-[${elementHeight}]`}>{children}</div>
        <MessageControls />
      </div>
    </div>
  );
};

export default Shell;
