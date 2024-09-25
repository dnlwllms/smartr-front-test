"use client";

import PropertyStatusButton, {
  PropertyStatusConfig,
} from "./PropertyStatusButton";

export type Props = {
  size?: "sm" | "md";
  items: PropertyStatusConfig[];
  isLoading?: boolean;
};

// TODO: 모바일 사이즈 추가 필요
export default function PropertyStatus(props: Props) {
  return (
    <div>
      <ul className="flex w-full gap-x-3">
        {props.items.map((config, index) => {
          return (
            <li key={index} className="flex-1">
              <PropertyStatusButton
                size={props.size}
                config={config}
                isLoading={props.isLoading}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
