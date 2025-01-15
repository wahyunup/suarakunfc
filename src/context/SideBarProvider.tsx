"use client"

import Sidebar from "@/components/partials/Navbar/Sidebar";
import { SidebarContextProps } from "./@types/context";
import React, { createContext, useContext, useState } from "react";
const sidebarContext = createContext<SidebarContextProps | null>(null);

const SidebarProvider = ({children}:{children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <sidebarContext.Provider value={{ isOpen, setIsOpen }}>
        <Sidebar/>
        {children}
    </sidebarContext.Provider>
  );
};

const useSidebar = () => {
    const context = useContext(sidebarContext);
    if(!context) {
        throw new Error ("useSidebar harus digunakan didalam sidebarProvider");
    }
    return context;
}

export {useSidebar, SidebarProvider}