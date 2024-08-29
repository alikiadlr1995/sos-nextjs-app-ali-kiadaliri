import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/SOS logo 2.png";

interface MyComponentProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div>
      <div className=" p-4 gap-4 h-full w-full px-32 ">
        <div className="h-9 pb-[50px] border-b-2 border-indigo-500 mb-6 ">
        
          <div className="flex flex-row-reverse items-center justify-between h-9 py-2 border-b-2  ">
            <Image src={Logo} alt={"SOS logo"} className="w-25 h-10" />
            <Button variant="text">صفحه اصلی</Button>
            <Button variant="text">todo list</Button>
            <Button variant="text">مراکز خدمات درمانی</Button>
            <Button variant="text">شعبه های ما</Button>
            <Button variant="text">سوال های متداول</Button>
            <Button variant="contained">ورود و فعالسازی</Button>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
