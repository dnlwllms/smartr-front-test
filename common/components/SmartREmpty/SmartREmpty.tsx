import { FC, ReactElement } from "react";

export interface Props {
  icons?: ReactElement;
  mainText: string;
  subText?: string;
}

const SmartREmpty: FC<Props> = ({ icons, mainText, subText }) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      {icons !== undefined ? (
        icons
      ) : (
        <svg className="h-12 w-12" aria-hidden>
          <use
            href="/icons/outlined/character.svg#Outlined/Character/attention"
            color="#eee"
          />
        </svg>
      )}
      <div className="flex flex-col items-center gap-y-1 text-center">
        <h4 role="status" className="text-heading04m text-gray-900">
          {mainText}
        </h4>
        {subText && (
          <p role="status" className="text-body02m text-gray-500">
            {subText}
          </p>
        )}
      </div>
    </div>
  );
};

export default SmartREmpty;
