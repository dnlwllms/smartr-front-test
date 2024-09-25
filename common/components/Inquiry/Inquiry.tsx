"use client";

import Link from "next/link";

export interface Props {
  remoteControlUrl: string;
}

export default function Inquiry(props: Props) {
  return (
    <div>
      <h4
        className="mb-2.5 flex items-center justify-between text-body01b text-gray-900"
      >
        문의전화
        <Link
          href={props.remoteControlUrl}
          className="flex items-center gap-x-1 text-body02m"
        >
          원격제어
          <svg className="h-4 w-4" aria-hidden>
            <use
              href="/icons/outlined/arrows.svg#Outlined/Arrows/right"
              width={16}
              height={16}
            />
          </svg>
        </Link>
      </h4>
      <ul className="flex flex-col gap-y-2.5">
        <li>
          <Link
            href="tel:02-525-5114"
            className="flex w-full items-center gap-x-4 rounded-2xl border border-gray-200 p-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <svg className="h-4 w-4" aria-hidden>
                <use
                  href="/icons/outlined/peoples.svg#Outlined/Peoples/user-business"
                  width={16}
                  height={16}
                  color="#999"
                />
              </svg>
            </span>
            <div className="w-[calc(100%-56px)]">
              <p
                className="truncate text-body01m text-gray-900"
                title="네트워크사업부 담당자"
              >
                네트워크사업부 담당자
              </p>
              <p
                className="truncate text-body02m text-gray-500"
                title="02-525-5114"
              >
                02-525-5114
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="tel:02-525-5114"
            className="flex w-full items-center gap-x-4 rounded-2xl border border-gray-200 p-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <svg className="h-4 w-4" aria-hidden>
                <use
                  href="/icons/outlined/base.svg#Outlined/Base/phone-telephone"
                  width={16}
                  height={16}
                  color="#999"
                />
              </svg>
            </span>
            <div className="w-[calc(100%-56px)]">
              <p
                className="truncate text-body01m text-gray-900"
                title="고객센터 (평일 오전 9시 ~ 오후 6시)"
              >
                고객센터 (평일 오전 9시 ~ 오후 6시)
              </p>
              <p
                className="truncate text-body02m text-gray-500"
                title="02-525-5114"
              >
                02-525-5114
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
