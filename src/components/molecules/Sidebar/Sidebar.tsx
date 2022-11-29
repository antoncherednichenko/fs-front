import { FC } from "react";
import { ISidebarProps } from "./types";

const Sidebar: FC<ISidebarProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <span>{item.title}</span>
      ))}
    </>
  );
};

export { Sidebar };
