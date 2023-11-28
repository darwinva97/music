import React from "react";
import { Header } from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="bg-[#FBFDFD]">{children}</main>
    </div>
  );
};

export default Layout;
