import React, { useState } from "react";
import Image1 from "../assets/images/Media.png";
import { StaticImageData } from "next/image";
import BlogItem from "./BlogItem";
import { Button } from "@mui/material";

export type BlogType = {
  title: string;
  image: StaticImageData;
  text: string;
  createdAT: string;
  id: string;
  fullText: string;
};

export const blogs: BlogType[] = [
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text1",
    id: "0",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024 05:44 AM",
    text: "text2",
    id: "1",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text3",
    id: "2",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "3",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "4",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "4",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "5",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "6",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "5",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "6",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "5",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "6",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "5",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "راهنمای دریافت معرفی‌نامه",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "6",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
];

const HomePage = () => {
  const [showAll, setShowAll] = useState(true);
  const handleSowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full pt-[72px] pb-4">
        <span className="text-2xl font-medium">مقاله ها</span>
        <Button variant="text">نمایش همه</Button>
      </div>
      <div className="w-full grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 bg-white">
        {blogs.slice(0, showAll ? blogs.length : 4).map((blogItem, index) => (
          <BlogItem key={index} blog={blogItem} />
        ))}
        <div className="sm:hidden sticky bottom-0 bg-[#fff] flex justify-center align-bottom">
          <Button variant="outlined" onClick={handleSowAll}>
            {showAll ? "کمتر" : "بیشتر"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
