import LeftBar from "@/components/leftBar/LeftBar";
import RightBar from "@/components/rightBar/RightBar";
import React from "react";
import "../globals.scss";
import "../../styles.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main theme-dark">
      <LeftBar />
      <div style={{ flex: 6 }}>{children}</div>
      <RightBar />
    </main>
  );
};

export default Layout;
