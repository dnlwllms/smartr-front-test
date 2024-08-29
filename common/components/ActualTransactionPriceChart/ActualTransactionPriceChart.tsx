"use client";

import { r114Request } from "@/common/network/r114/request";
import { ScatterChart, ScatterChartProps } from "@hdc-ui/react/clients";

import { DateUtility, NumberUtility } from "@hdc-ui/util";

const min = 1000 * 1000 * 100;
const max = 1000 * 1000 * 1000;

const startDate = new Date("2023-01-01");
const endDate = new Date("2023-12-31");

const mock = {
  datasets: [
    { 
      label: "83A㎡",
      data: Array.from({ length: 5 }).map(() => ({
        x: DateUtility.getRandomDate([startDate, endDate]),
        y: NumberUtility.getRandomNumber(min, max),
      })),
    },
    {
      label: "84C㎡",
      data: Array.from({ length: 5 }).map(() => ({
        x: DateUtility.getRandomDate([startDate, endDate]),
        y: NumberUtility.getRandomNumber(min, max),
      })),
    },
    {
      label: "84B㎡",
      data: Array.from({ length: 5 }).map(() => ({
        x: DateUtility.getRandomDate([startDate, endDate]),
        y: NumberUtility.getRandomNumber(min, max),
      })),
    },
  ],
};

export default function ActualTransactionPriceChart({
  type = "basic",
  data = mock,
  ...props
}: Partial<ScatterChartProps>) {
  const handleClick = async () => {
    const formData = new FormData();
    formData.append("username", "testduck");
    formData.append("password", "testduck1!");
    fetch("http://localhost:8090/auth/login", {
      method: "POST",
      body: formData
    })
  }

  return (
    <div>
      <button onClick={handleClick}>
        login
      </button>
    <ScatterChart
      type="basic"
      data={data}
      options={{
        scales: {
          x: {
            ticks: {
              autoSkipPadding: 24,
            },
          },
          y: {
            ticks: {
              stepSize: 500 * 1000 * 1000,
            },
          },
        },
      }}
      {...props}
    />
    </div>
  );
}
