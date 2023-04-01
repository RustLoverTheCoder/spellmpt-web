import { Header } from "../header";
import {Footer} from '../footer'
import type React from "react";

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
