import React from "react";
import { BlogType } from ".";
import Image from "next/image";
import { useRouter } from "next/router";

interface BlogItemProps {
  blog: BlogType;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col p-4 border-[1px] border-sky-700 rounded-lg">
      <Image src={blog.image} alt={blog.text} className="w-full h-[100px]" />
      <span className="text-2xl font-bold">{blog.title}</span>
      <span>5 دقیقه</span>
      <span className="text-lg font-medium">{blog.text}</span>
      <button onClick={() => router.push(`/blog/${blog.id}`)}>جزییات</button>
    </div>
  );
};

export default BlogItem;
