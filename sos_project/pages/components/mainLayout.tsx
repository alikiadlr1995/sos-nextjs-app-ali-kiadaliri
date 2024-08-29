import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/SOS logo 2.png";

interface MyComponentProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MyComponentProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <div className=" gap-4 h-full w-full  bg-[#fff]">
        <div className="relative px-10 h-9 pt-2 pb-[50px]  mb-6 shadow-[0_1px_6px_1px_rgba(0,0,0,0.3)]">
        
          <div className="flex flex-row-reverse items-center justify-between h-9 py-2  ">
            <Image src={Logo} alt={"SOS logo"} className="w-25 h-10" />
            <Button variant="text" onClick={()=>router.push("/")}>صفحه اصلی</Button>
            <Button variant="text" onClick={()=>router.push("/todoList")}>todo list</Button>
            <Button variant="text">مراکز خدمات درمانی</Button>
            <Button variant="text">شعبه های ما</Button>
            <Button variant="text">سوال های متداول</Button>
            <Button variant="contained">ورود و فعالسازی</Button>
          </div>
          <div className="absolute shadow-[0_3px_60px_15px_rgba(50,100,0,0.9)]"/>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
