import React, { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className=" flex flex-col min-h-screen">{children}</div>;
};

export default PageLayout;
