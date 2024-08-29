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
    <div className=" border-[1px] border-sky-700 rounded-lg">
      <div className="w-full flex flex-col justify-start align-end p-4">
        <Image src={blog.image} alt={blog.text} className="w-full h-[100px]" />
        <span className="text-2xl font-bold">{blog.title}</span>
        <span>5 دقیقه</span>
        <span className="text-lg font-medium">{blog.text}</span>
      </div>

      <Button variant="outlined" className="w-[136px] h-10 m-3" onClick={() => router.push(`/blog/${blog.id}`)}>جزییات</Button>
    </div>
  );
};

export default BlogItem;
