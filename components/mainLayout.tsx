import { ReactNode } from "react";
import Footer from "./footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="pt-[56px] pb-8">
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
