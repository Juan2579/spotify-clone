"use client";

import { useMemo } from "react";

import { usePathname } from "next/navigation";

import { Box } from "../Box";
import { SidebarItem } from "./SidebarItem";
import { Library } from "@/components/Library/Library";

import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

export const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="hidden w-[300px] h-full flex-col gap-y-2 md:flex">
      <Box className="flex flex-col gap-y-4 px-5 py-4">
        {routes.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </Box>
      <Box className="h-full overflow-y-auto">
        <Library />
      </Box>
    </div>
  );
};
