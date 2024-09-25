import Link from "next/link";

import { FC, Fragment, ReactNode } from "react";

import ActualTransactionPriceChart from "@/common/components/ActualTransactionPriceChart";

export default async function Home() {
  return (
    <Fragment>
      <Section>
        <Section.Title>매물현황</Section.Title>
      </Section>
      <Section>
        <Section.Title>노출 종료 예정 매물</Section.Title>
      </Section>
      <Section>
        <Section.Title>등록 매물 호가 현황</Section.Title>
        <Section.Contents>
          <ActualTransactionPriceChart />
        </Section.Contents>
      </Section>
    </Fragment>
  );
}

type CommonProps = {
  children?: ReactNode;
  className?: string;
};

function Section({ children, className }: CommonProps) {
  return <section className={`mb-16 p-6 ${className}`}>{children}</section>;
}

const Title: FC<CommonProps & { link?: string; rightSide?: ReactNode }> = (
  props,
) => {
  return (
    <div className="mb-8 flex justify-between">
      {props.link ? (
        <Link href={props.link}>
          <h2 className="flex items-center text-heading04b text-gray-900">
            {props.children}

            <svg width={24} height={24}>
              <use href="/icons/outlined/arrows.svg#Outlined/Arrows/right" />
            </svg>
          </h2>
        </Link>
      ) : (
        <h2 className="text-heading04b">{props.children}</h2>
      )}
      {props.rightSide}
    </div>
  );
};

const Contents: FC<CommonProps> = ({ children, className }) => {
  return <article className={className}>{children}</article>;
};

Section.Title = Title;
Section.Contents = Contents;
