"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import MyMenu from "./MyMenu";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:h-screen">
      <div className="lg:hidden relative flex flex-row justify-between">
        <MyMenu
          className="border-b border-borderColor "
          circleClass="top-2 left-3"
        />
        <div className="w-full flex flex-row justify-center border-b  border-borderColor z-20">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              {"<I'm Dev/>"}
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
      </div>

      <div className="hidden h-full w-16 lg:flex flex-col  items-center justify-center border-r border-borderColor  z-50 ">
        <MyMenu circleClass="left-4 top-1/2  z-0" className="" />
      </div>

      <div className="hidden absolute top-0 lg:flex flex-row  w-full px-20 z-50 ">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            {"<I'm Dev/>"}
            <span className="text-accent">.</span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
