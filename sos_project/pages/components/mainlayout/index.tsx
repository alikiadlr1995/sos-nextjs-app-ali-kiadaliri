import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import TopMenu from "../topMenu";

interface MyComponentProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full  overflow-scroll flex flex-col bg-[#fff]">
      <TopMenu />

      <div className="px-20 max-sm:px-4 pt-[72px] pb-10">{children}</div>
    </div>
  );
};

export default MainLayout;
