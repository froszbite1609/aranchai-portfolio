import { ReactNode } from "react";
import Header from "./header";

interface GlobalLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
