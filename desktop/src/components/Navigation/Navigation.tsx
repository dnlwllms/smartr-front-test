import Image from "next/image";
import Link from "next/link";

import {
  SMARTR_ORIGIN_URL,
  LANDING_URL_BROKERAGE_MANAGEMENT,
  LANDING_URL_CONTRACT_MANAGEMENT,
  LANDING_URL_PROPERTY_MANAGEMENT,
  LANDING_URL_TRANSMISSION_MANAGEMENT,
} from "@/src/constants";

import logoSvg from "../../../public/logo.svg";

export default function Navigation() {
  const navItems = [
    {
      key: 1,
      link: `${SMARTR_ORIGIN_URL}${LANDING_URL_PROPERTY_MANAGEMENT}`,
      title: "매물관리",
    },
    {
      key: 2,
      link: `${SMARTR_ORIGIN_URL}${LANDING_URL_TRANSMISSION_MANAGEMENT}`,
      title: "전송관리",
    },
    {
      key: 3,
      link: `${SMARTR_ORIGIN_URL}${LANDING_URL_CONTRACT_MANAGEMENT}`,
      title: "계약관리",
    },
    {
      key: 4,
      link: `${SMARTR_ORIGIN_URL}${LANDING_URL_BROKERAGE_MANAGEMENT}`,
      title: "중개관리",
    },
  ];

  return (
    <nav className="sticky top-0 flex h-20 w-full items-center border-b-[1px] border-solid border-gray-200 bg-white">
      <div className="py-4 pl-8 pr-[89px]">
        <Link href="/">
          <Image src={logoSvg} alt="Logo" priority />
        </Link>
      </div>
      <ul className="flex h-full">
        {navItems.map((navItem) => {
          return (
            <li
              key={navItem.key}
              className="relative contain flex h-full items-center px-6 text-body01m transition-transform after:absolute after:bottom-[-1px] after:left-0 after:inline-block after:h-[2px] after:w-full after:scale-0 after:overflow-hidden after:bg-gray-900 after:bg-clip-content after:px-[inherit] after:duration-200 hover:after:scale-100"
            >
              <Link href={navItem.link}>{navItem.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
