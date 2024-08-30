import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Logo from "../../../assets/images/SOS logo 2.png";
import { useRouter } from 'next/router';


const TopMenu = () => {
    const router = useRouter();

  return (
    <div className="fixed bg-white z-10 top-0 h-[72px] px-10  w-full  shadow-[0_1px_6px_1px_rgba(0,0,0,0.3)]">
        
    <div className="flex flex-row w-full h-full items-center justify-between ">
      <Image src={Logo} alt={"SOS logo"} className="w-25 h-10" />
      <Button variant="text" onClick={()=>router.push("/")}>صفحه اصلی</Button>
      <Button variant="text" onClick={()=>router.push("/todoList")}>todo list</Button>
      <Button variant="text">مراکز خدمات درمانی</Button>
      <Button variant="text">شعبه های ما</Button>
      <Button variant="text">سوال های متداول</Button>
      <Button variant="contained">ورود و فعالسازی</Button>
    </div>
  </div>
  )
}

export default TopMenu