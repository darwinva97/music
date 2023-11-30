import React from "react";
import { Header } from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="bg-[#FBFDFD]">
        <div className="max-w-[1080px] mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
