import React from "react";
import { BlogType } from ".";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import moment from "moment";

interface BlogItemProps {
  blog: BlogType;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  const router = useRouter();
  const getTimeSpent = (createdAt: string) => {
    const now = moment();
    const createdTime = moment(createdAt);
    const duration = moment.duration(now.diff(createdTime));
    if (duration.asDays() >= 1) {
      return `${Math.floor(duration.asDays())} روز قبل`;
    } else if (duration.asHours() >= 1) {
      return `${Math.floor(duration.asHours())} ساعت و ${Math.floor(
        duration.minutes()
      )} دقیقه قبل`;
    } else {
      return `${Math.floor(duration.asMinutes())} دقیقه قبل`;
    }
  };
  return (
    <div className=" border-[1px] flex flex-col gap-2 border-[#0F5098] rounded-lg p-4 shadow-[0px_2px_4px_0px_rgba(18,18,18,0.2)]">
      <div className="w-full flex flex-col justify-end align-end">
        <Image
          src={blog.coverImage}
          alt={blog.text}
          className="w-full h-[100px] max-sm:h-auto"
        />
        <span className="text-base font-semibold text-right">{blog.title}</span>
        <span>{getTimeSpent(blog.createdAT)}</span>
        <span className="text-lg font-medium">{blog.text}</span>
      </div>
      <div className="w-[125px] mr-auto h-10">
        <Button
          variant="outlined"
          fullWidth
          className="h-full"
          onClick={() => router.push(`/blog/${blog.id}`)}
        >
          ادامه
        </Button>
      </div>
    </div>
  );
};

export default BlogItem;
