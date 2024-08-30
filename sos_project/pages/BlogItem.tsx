import React from "react";
import { BlogType } from ".";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

interface BlogItemProps {
  blog: BlogType;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  const router = useRouter();
  return (
    <div className=" border-[1px] flex flex-col gap-2 border-[#0F5098] rounded-lg p-4 shadow-[0px_2px_4px_0px_rgba(18,18,18,0.2)]">
      <div className="w-full flex flex-col justify-end align-end">
        <Image src={blog.image} alt={blog.text} className="w-full h-[100px]" />
        <span className="text-base font-semibold text-right">{blog.title}</span>
        <span>5 دقیقه</span>
        <span className="text-lg font-medium">{blog.text}</span>
      </div>
      <div className="w-[125px] mr-auto h-10">
      <Button variant="outlined" fullWidth className="h-full" onClick={() => router.push(`/blog/${blog.id}`)}>ادامه</Button>

      </div>

    </div>
  );
};

export default BlogItem;
