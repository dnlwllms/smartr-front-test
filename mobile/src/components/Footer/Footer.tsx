"use client";

import Link from "next/link";

import { FC } from "react";

import {
  COMPANY_INFO_ADDRESS,
  COMPANY_INFO_BUSINESS_NUMBER,
  COMPANY_INFO_CEO_NAME,
  COMPANY_INFO_SALES_NUMBER,
  COMPANY_INFO_TEL,
} from "@/common/constants/company-info";

export interface Props {}

const Footer: FC<Props> = () => {
  const contactInfo = [
    { label: "대표이사", value: COMPANY_INFO_CEO_NAME },
    { label: "주소", value: COMPANY_INFO_ADDRESS },
    { label: "대표전화", value: COMPANY_INFO_TEL },
    { label: "사업자번호", value: COMPANY_INFO_BUSINESS_NUMBER },
    { label: "통신판매신고번호", value: COMPANY_INFO_SALES_NUMBER },
  ];

  const LinkInfo = [
    { label: "회사소개", href: "" },
    {
      label: "이용약관",
      href: "",
    },
    {
      label: "개인정보처리방침",
      href: "",
    },
    {
      label: "고객센터",
      href: "",
    },
  ];

  return (
    <footer className="flex w-full flex-col gap-y-8 whitespace-nowrap bg-gray-200 px-6 py-10">
      <div>
        <h2 className="mb-4 text-heading03b text-gray-500">Smart R</h2>
        <div className="mb-2 text-body02m text-gray-500">
          <ul className="flex flex-col gap-y-1.5">
            {contactInfo.map(({ label, value }) => (
              <li key={label} className="flex gap-x-2">
                <span>{label}</span>
                {value}
              </li>
            ))}
          </ul>
          <ul className="flex gap-x-[17px]">
            {LinkInfo.map(({ label, href }) => (
              <li
                className="[&:not(:last-of-type)]:after:content[``] relative flex items-center gap-x-2 [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:-right-[9px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:h-2 [&:not(:last-of-type)]:after:w-[1px] [&:not(:last-of-type)]:after:-translate-y-1/2 [&:not(:last-of-type)]:after:bg-gray-500"
                key={label}
              >
                <Link
                  className="flex h-8 items-center"
                  href={href}
                  target="_blank"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-body02m text-gray-500">
          Copyright ⓒ 부동산114. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
