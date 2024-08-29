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
    <nav className="flex h-20 items-center sticky top-0 w-full bg-white border-b-[1px] border-solid border-gray-200">
      <div className="py-4 pl-8 pr-[89px]">
        <Link href="/">
          <Image src={logoSvg} alt="Logo" priority />
        </Link>
      </div>
      <ul className="flex items-center ">
        {navItems.map((navItem) => {
          return (
            <li
              key={navItem.key}
              className="px-6 text-body01m after:inline-block"
            >
              <Link href={navItem.link}>{navItem.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
