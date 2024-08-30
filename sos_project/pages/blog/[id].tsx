import React from "react";
import { useRouter } from "next/router";
import { blogs } from "..";
import Image from "next/image";


const BlogItem = () => {
  const router = useRouter();
  const id = router.query.id || 0;
  
  

  // fetch simulation
  const blog = blogs[Number(id)];
  
  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <span>{blog.title}</span>
      <Image src={blog.image} alt={blog.title}/>
      <span>{blog.fullText}</span>
    </div>
  );
};

export default BlogItem;
