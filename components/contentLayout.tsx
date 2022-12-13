import { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
}

const Content = ({ children }: ContentLayoutProps) => {
  return <article className="px-8 mx-auto max-w-3xl">{children}</article>;
};

export default Content;
