"use client";

import { usePathname } from "next/navigation";

export type NavigationItem = {
  iconHref: string;
  title: string;
  pathname: string;
};

export type Props = {
  navItem: NavigationItem;
};

export default function NavItem(props: Props) {
  const pathname = usePathname();

  return (
    <div
      className={`flex flex-col items-center justify-center ${pathname === props.navItem.pathname ? "text-gray-900" : "text-gray-500"}`}
    >
      <svg width={24} height={24}>
        <use href={props.navItem.iconHref} />
      </svg>
      <span className="text-body05r">{props.navItem.title}</span>
    </div>
  );
}
