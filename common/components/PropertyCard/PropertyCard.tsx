import { FC } from "react";

import { Button, Tag } from "@hdc-ui/react/components";

export interface Props {
  code: string;
  exposurePeriod: [Date, Date];
  complexType: string;
  address: string;
  dealType: string;
  quote: string;
  rent?: string;
}

const PropertyCard: FC<Props> = ({
  code,
  exposurePeriod,
  dealType,
  address,
  complexType,
  quote,
  rent,
}) => {
  return (
    <div className="flex flex-col gap-y-2 pb-4">
      <div className="flex items-center justify-between gap-x-1.5">
        <Tag className="border-transparent bg-[#34C7590D] text-green-500">
          {code}
        </Tag>
      </div>
      <div className="flex flex-col text-gray-900">
        <p className="truncate text-body01m" title={address}>
          {address}
        </p>
        <h4
          className="my-0.5 truncate text-heading04b"
          title={`${dealType} ${quote}`}
        >
          {dealType === "매매"
            ? `${dealType} ${quote}`
            : `${dealType} ${quote}/${rent}`}
        </h4>
        <p title={complexType} className="truncate text-body02m text-gray-900">
          {complexType}
        </p>
        <p className="text-body02m text-gray-500">{`${exposurePeriod[0].toLocaleDateString()} ~ ${exposurePeriod[1].toLocaleDateString()}`}</p>
      </div>
      <div className="flex gap-x-1.5">
        <Button color="white" size="sm" className="flex-1">
          노출종료
        </Button>
        <Button color="black" size="sm" className="flex-1" disabled>
          재등록
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
