import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import Logo from "../../../assets/images/SOS logo 2.png";
import { useRouter } from "next/router";
import { MenuItem } from ".";

interface DesktopTopMenuProps {
  menus: MenuItem[];
}
const DesktopTopMenue = ({ menus }: DesktopTopMenuProps) => {
  const router = useRouter();

  return (
    <div className="fixed bg-white z-50 top-0 h-[72px] px-10  w-full  shadow-[0_1px_6px_1px_rgba(0,0,0,0.3)]">
      <div className="flex flex-row w-full h-full items-center justify-between ">
        <Image src={Logo} alt={"SOS logo"} className="w-25 h-10" />
          {menus.map((item, index) => (
            <Button
              onClick={() => router.push(item.route)}
              variant="text"
              key={index}
            >
              {item.text}
            </Button>
          ))}
        <Button variant="contained">ورود و فعالسازی</Button>
      </div>
    </div>
  );
};

export default DesktopTopMenue;
