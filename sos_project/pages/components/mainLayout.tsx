import React from "react";

interface MyComponentProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div>
      <div className=" p-4 gap-4 h-screen w-full  px-32">
        <div className="flex flex-row justify-start grid grid-cols-5 h-16 border-b-4 border-indigo-500 mb-6 ">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
