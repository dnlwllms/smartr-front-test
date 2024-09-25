"use client";
import Link from "next/link";
import Image from "next/image";

import { ChangeEvent, FC, useState } from "react";

import {
  SMARTR_ORIGIN_URL,
  COMPANY_INTRODUCE_URL,
  PERSONAL_INFORMATION_URL,
  LANDING_URL_USE_OF_TERMS,
  LANDING_URL_CUSTOMER_SERVICE_CENTER,
} from "@/src/constants";

import {
  COMPANY_INFO_ADDRESS,
  COMPANY_INFO_BUSINESS_NUMBER,
  COMPANY_INFO_CEO_NAME,
  COMPANY_INFO_SALES_NUMBER,
  COMPANY_INFO_TEL,
} from "@/common/constants/company-info";

import { apiHost } from "@/common/constants/network";
import { Button, Input } from "@hdc-ui/react/components";

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
    { label: "회사소개", href: COMPANY_INTRODUCE_URL },
    {
      label: "이용약관",
      href: `${SMARTR_ORIGIN_URL}${LANDING_URL_USE_OF_TERMS}`,
    },
    {
      label: "개인정보처리방침",
      href: PERSONAL_INFORMATION_URL,
    },
    {
      label: "고객센터",
      href: `${SMARTR_ORIGIN_URL}${LANDING_URL_CUSTOMER_SERVICE_CENTER}`,
    },
  ];

  const [phoneNumber, setPhoneNumber] = useState("");

  //TODO. Swagger 403 Error
  const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      e.preventDefault();

      const res = await fetch(apiHost + "/message/send/url", {
        method: "POST",
        body: JSON.stringify({
          arg0: phoneNumber,
        }),
      });

      const { data, message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      return data;
    } catch (e) {
      alert(e);
    }
  };

  return (
    <footer className="flex w-full flex-col gap-y-8 whitespace-nowrap bg-gray-200 px-40 py-20">
      <div>
        <h2 className="mb-4 text-heading02b text-gray-500">Smart R</h2>
        <div className="mb-2 text-body02m text-gray-500">
          <ul className="flex gap-x-[17px]">
            {contactInfo.map(({ label, value }) => (
              <li
                key={label}
                className="[&:not(:last-of-type)]:after:content[``] relative flex gap-x-2 [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:-right-[9px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:h-2.5 [&:not(:last-of-type)]:after:w-[1px] [&:not(:last-of-type)]:after:-translate-y-1/2 [&:not(:last-of-type)]:after:bg-gray-500"
              >
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
      <hr className="h-[1.5px] w-full border-spacing-0 bg-gray-300" />
      <div>
        <h3 className="mb-4 flex gap-x-1.5 text-body01b text-gray-500">
          App 다운로드
          <span className="text-body02m">
            (Android 전용 / iOS 서비스 준비 중)
          </span>
        </h3>
        <div className="flex gap-x-[100px]">
          <div className="text-body02m text-gray-500">
            <p className="mb-1">URL</p>
            <div className="mb-4">
              <form method="post" onSubmit={() => handleSubmit}>
                <div className="flex gap-x-1.5">
                  <label
                    htmlFor="serach"
                    className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden"
                  >
                    전화번호 입력
                  </label>
                  <Input
                    type="search"
                    className="w-60"
                    value={phoneNumber}
                    name="arg0"
                    placeholder="전화번호를 입력해 주세요."
                    id="serach"
                    onChange={(e) => {
                      setPhoneNumber(
                        e.currentTarget.value.replace(/[^0-9.]/g, ""),
                      );
                    }}
                  />
                  <Button type="submit" color="black">
                    확인
                  </Button>
                </div>
              </form>
            </div>
            <ul>
              <li>* 입력하신 전화번호로 앱 다운로드 URL을 보내드립니다.</li>
              <li>
                * 전화번호는 문자발송 시에만 사용되며 별도 저장되지 않습니다.
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-1 text-body02m text-gray-500">QR 코드</p>
            <Image
              src="/qr.png"
              alt="스마트R Qr코드"
              width={98}
              height={98}
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
