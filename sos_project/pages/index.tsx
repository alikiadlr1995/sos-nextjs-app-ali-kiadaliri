import React, { useState } from "react";
import Image1 from "../assets/images/Media.png";
import { StaticImageData } from "next/image";
import BlogItem from "./BlogItem";
import MainLayout from "./components/mainLayout";
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
    title: "title1",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text1",
    id: "0",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "title2",
    image: Image1,
    createdAT: "02/10/2024 05:44 AM",
    text: "text2",
    id: "1",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "title3",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text3",
    id: "2",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "title4",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text4",
    id: "3",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
];

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);
  const handleSowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="w-full">
      <MainLayout>
        <div className="w-full grid grid-cols-4 gap-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 pt-[86px] bg-[#fff]">
          {blogs.slice(0,showAll ? blogs.length : 4).map((blogItem, index) => (
            <BlogItem key={index} blog={blogItem} />
          ))}
          <div className="sm:hidden sticky bottom-0 bg-[#fff] flex justify-center align-bottom">
            <Button variant="outlined" onClick={handleSowAll}>
              {showAll ? "کمتر" : "بیشتر"}
            </Button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};
export default HomePage;
