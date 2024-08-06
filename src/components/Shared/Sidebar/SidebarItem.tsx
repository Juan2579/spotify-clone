import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      className={twMerge(
        "w-full h-auto flex items-center gap-x-4 py-1 font-bold text-neutral-400 transition hover:text-white",
        active && "text-white"
      )}
      href={href}
    >
      <Icon size={32} />
      <p className="w-full truncate">{label}</p>
    </Link>
  );
};
