import React from "react";
import { useRouter } from "next/router";
import { blogs } from "..";


const BlogItem = () => {
  const router = useRouter();
  const id = router.query.id || 0;
  

  // fetch simulation
  const blog = blogs[Number(id)];
  return (
    <div>
      <span>{blog.title}</span>
      <span>{blog.fullText}</span>
    </div>
  );
};

export default BlogItem;
