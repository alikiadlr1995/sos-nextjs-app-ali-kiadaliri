import clsx from "clsx";
import React from "react";
import { MenuItem } from ".";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
interface MobileTopMenuProps {
  open: boolean;
  menus: MenuItem[]
  setOpenMobileMenu:(value:boolean)=>void
}

const MobileTopMenu = ({ open, menus,setOpenMobileMenu }: MobileTopMenuProps) => {
  const router = useRouter();
  return (
    <div
      className={clsx(
        "absolute transition-all duration-300 h-screen w-screen bg-white top-[60px]",
        {
          "left-0": open,
          "left-full": !open,
        }
      )}
    >
      <div className="flex flex-col gap-4">
        {menus.map((item, index) => (
          <Button
            onClick={() =>{
                setOpenMobileMenu(false)
                router.push(item.route)}}
            variant="text"
            key={index}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MobileTopMenu;
