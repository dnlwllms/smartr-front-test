import { FC } from "react";

import { Button, Tag } from "@hdc-ui/react/components";

export interface Props {
  code: string;
  date: string;
  complexType: string;
  address: string;
  dealType: string;
  quote: string;
}

const PropertyCard: FC<Props> = ({
  code,
  date,
  dealType,
  address,
  complexType,
  quote,
}) => {
  return (
    <div className="flex flex-col gap-y-2 pb-4">
      <div className="card-header flex items-center justify-between">
        <Tag className="bg-[#34C7590D] text-green-500">{code}</Tag>
        <p className="text-body02m text-gray-500">{date}</p>
      </div>
      <div className="card-body flex flex-col gap-x-0.5 text-gray-900">
        <p className="truncate text-body01m">
          [{complexType}] {address}
        </p>
        <h4 className="text-heading04b">
          {dealType} {quote}
        </h4>
      </div>
      <div className="card-footer flex gap-x-1.5">
        <Button color="white">노출종료</Button>
        <Button color="black">재등록</Button>
      </div>
    </div>
  );
};

export default PropertyCard;
