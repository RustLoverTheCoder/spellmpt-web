import { Header } from "../header";
import type React from "react";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Header />
      {children}
    </div>
  );
};

export default HomeLayout;
