import { ReactNode } from "react";

const Components = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 w-full max-w-screen-xl mx-auto overflow-hidden">
      {children}
    </div>
  );
};

export default Components;
