"use client";

import Link from "next/link";
import { NavButtonProps } from "@/components/@types/partials";

const NavButton = ({ route, children, classname }: NavButtonProps) => {


  return (
    <Link
      href={route}
      className={`h-[77px] w-full flex items-center justify-center ${classname}`}
    >
      {children}
    </Link>
  );
};

export default NavButton;
