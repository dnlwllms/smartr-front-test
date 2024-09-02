import { FC } from "react";

export interface Props {
  title: string;
  count?: number;
  size?: "md" | "sm";
}

const PropertyStatusButton: FC<Props> = ({ title, count, size = "md" }) => {
  let titleSize;
  let containerPadding;
  let extent;

  switch (size) {
    case "md": {
      titleSize = "text-body01m";
      containerPadding = "py-4 pl-4 pr-5";
      extent = "min-w-[221px] h-[140px]";
      break;
    }
    case "sm": {
      titleSize = "text-body02m";
      containerPadding = "py-3 px-4";
      extent = "min-w-40 h-[97px]";
      break;
    }
  }

  return (
    <label
      htmlFor={title}
      className={`flex w-full flex-col justify-between rounded-2xl ${containerPadding} ${extent} cursor-pointer bg-gray-200 text-gray-700 hover:bg-gray-300 has-[:checked]:bg-gray-900 has-[:checked]:text-white`}
      tabIndex={0}
    >
      <input type="radio" name="propertyStatusButton" id={title} hidden />
      <p className={`${titleSize}`}>{title}</p>
      <h4 className="text-right text-heading04b">
        {typeof count === "number" ? count : "-"}건
      </h4>
    </label>
  );
};

export default PropertyStatusButton;
