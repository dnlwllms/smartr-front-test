import Link from "next/link";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav className="sticky bottom-0 h-14 w-full">
      <ul className="flex px-3 py-1">
        {[
          {
            key: 0,
            title: "홈",
            link: "/",
            iconHref: "/icons/outlined/base.svg#Outlined/Base/home",
          },
          {
            key: 1,
            title: "매물",
            link: "/property",
            iconHref: "/icons/outlined/base.svg#Outlined/Base/home",
          },
          {
            key: 2,
            title: "고객관리",
            link: "/customer-management",
            iconHref: "/icons/outlined/base.svg#Outlined/Base/home",
          },
          {
            key: 3,
            title: "마이페이지",
            link: "/mypage",
            iconHref: "/icons/outlined/base.svg#Outlined/Base/home",
          },
        ].map(({ key, title, link, iconHref }) => {
          return (
            <li key={key} className="flex-1">
              <Link href={link}>
                <NavItem navItem={{ title, iconHref, pathname: link }} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
