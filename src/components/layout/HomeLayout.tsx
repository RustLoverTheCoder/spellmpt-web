import { Header } from "../header";
import { Footer } from "../footer";
import type React from "react";
import "../global.css";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
