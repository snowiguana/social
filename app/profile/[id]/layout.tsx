import LeftBar from "@/components/leftBar/LeftBar";
import RightBar from "@/components/rightBar/RightBar";
import React from "react";
import "../../globals.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main">
      <LeftBar />
      {children}
      <RightBar />
    </main>
  );
};

export default Layout;
