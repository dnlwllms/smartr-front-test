import { FC } from "react";

export interface Props {}

//TODO. 추후 로티 교체

const Spinner: FC<Props> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      className="trans absolute left-2/4 top-2/4 animate-spin"
      role="status"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2652 3.5735C16.2011 2.72077 16.852 1.96432 17.7071 1.89781C27.1759 1.16136 35.4299 8.22098 36.1398 17.6632C36.8497 27.1054 29.7471 35.3594 20.2783 36.0959C10.8096 36.8323 2.55555 29.7727 1.84564 20.3305C1.78153 19.4777 2.43247 18.7213 3.2876 18.6548C4.14272 18.5883 4.89918 19.2353 4.96329 20.088C5.54431 27.8159 12.295 33.5897 20.0446 32.9869C27.7942 32.3842 33.6032 25.6335 33.0222 17.9057C32.4411 10.1778 25.6905 4.40399 17.9409 5.00672C17.0858 5.07323 16.3293 4.42623 16.2652 3.5735Z"
        fill="#999"
      />
    </svg>
  );
};

export default Spinner;
