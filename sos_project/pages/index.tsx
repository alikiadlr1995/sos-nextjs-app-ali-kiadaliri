import React from "react";
import Image1 from "../assets/images/Media.png";
import { StaticImageData } from "next/image";
import BlogItem from "./BlogItem";
import TodoList from "./components/TodoList";

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
    id: "1",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "title1",
    image: Image1,
    createdAT: "02/10/2024 05:44 AM",
    text: "text1",
    id: "2",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "title1",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text1",
    id: "3",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
  {
    title: "title1",
    image: Image1,
    createdAT: "02/10/2024",
    text: "text1",
    id: "4",
    fullText: "hgfukhlkjghgvhvjhffjhvjgfcdhfkhgfgjkhjhfhjcjghh",
  },
];

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-4 gap-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {blogs.map((blogItem, index) => (
          <BlogItem key={index} blog={blogItem} />
        ))}
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
