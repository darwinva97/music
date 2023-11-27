import { type ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>Header</header>
      <nav>Navbar</nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
