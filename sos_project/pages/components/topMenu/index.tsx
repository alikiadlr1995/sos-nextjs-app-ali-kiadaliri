import React, { useState } from "react";
import MobileTopMenu from "./mobileTopMenu";
import DesktopTopMenu from "./DesktopTopMenu";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Logo from "../../../assets/images/SOS logo 2.png";

export type MenuItem = {
  text: string;
  route: string;
};
const menus: MenuItem[] = [
  { text: "صفحه اصلی", route: "/" },
  { text: "todo list", route: "/todoList" },
  { text: "مراکز خدمات درمانی", route: "/" },
  { text: "شعبه های ما", route: "/" },
  { text: "سوال های متداول", route: "/" },
  { text: "ورود و فعالسازی", route: "/" },
];

const TopMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className="w-full relative z-50">
      <div className="max-sm:hidden">
        <DesktopTopMenu menus={menus} />
      </div>
      <div className="hidden relative max-sm:flex flex-row p-4 gap-4 w-full items-center h-[60px]">
        <IconButton onClick={() => setOpenMobileMenu(!openMobileMenu)}>
          <MenuIcon />
        </IconButton>
        <div className="flex flex-row items-center justify-between flex-1 h-full">
          <Image src={Logo} alt={"SOS logo"} className="w-25 h-10" />
          <Button variant="contained">ورود و فعالسازی</Button>
        </div>

        <MobileTopMenu
          menus={menus}
          open={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      </div>
    </div>
  );
};

export default TopMenu;
