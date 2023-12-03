import React from "react";
import { Header } from "./header";
import { Footer } from "../footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="bg-[#FBFDFD]">
        <div className="max-w-[1080px] mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
