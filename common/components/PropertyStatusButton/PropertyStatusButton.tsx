import Link from "next/link";

import { FC } from "react";

export type PropertyStatusConfig = {
  title: string;
  count?: number;
  href: string;
};

export interface Props {
  size?: "md" | "sm";
  config: PropertyStatusConfig;
  isLoading?: boolean;
}

const PropertyStatusButton: FC<Props> = ({
  size = "md",
  config,
  isLoading,
}) => {
  let titleSize;
  let containerPadding;
  let extent;

  switch (size) {
    case "md": {
      titleSize = "text-body01m";
      containerPadding = "py-4 pl-4 pr-5";
      extent = "h-[140px]";
      break;
    }
    case "sm": {
      titleSize = "text-body02m";
      containerPadding = "py-3 px-4";
      extent = "h-[97px]";
      break;
    }
  }

  if (isLoading)
    return (
      <Link
        href={config.href}
        className={`flex w-full flex-col justify-between rounded-2xl ${containerPadding} ${extent} pointer-events-none cursor-default bg-gray-200 text-gray-700`}
      >
        <p className={`${titleSize} w-[98%] truncate`}>{config.title}</p>
        <h4 className="w-[98%] animate-pulse truncate text-right text-heading04b">
          <div
            className="inline-block h-[30px] w-20 rounded bg-gray-300"
            aria-busy
            role="alert"
            aria-label={`${config.title} 로딩 중`}
          />
        </h4>
      </Link>
    );

  return (
    <Link
      href={config.href}
      className={`flex w-full flex-col justify-between rounded-2xl ${containerPadding} ${extent} bg-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white`}
    >
      <p className={`${titleSize} w-[98%] truncate`}>{config.title}</p>
      <h4 className="w-[98%] truncate text-right text-heading04b">
        {`${config?.count || 0}건`}
      </h4>
    </Link>
  );
};

export default PropertyStatusButton;
