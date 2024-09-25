"use client";

import merge from "lodash/merge";
import format from "date-fns/format";

import { colors } from "@hdc-ui/foundations";
import { DateUtility, NumberUtility } from "@hdc-ui/util";
import { ScatterChart, ScatterChartProps } from "@hdc-ui/react/clients";

import { pretendard } from "../RootLayout";

import "./style.css";

const min = 1000 * 1000 * 100;
const max = 1000 * 1000 * 1800;

const today = new Date();
const startDate = new Date(Number(today) - 30 * 24 * 60 * 60 * 1000);
const endDate = today;

const length = 20;

const dataPoints = Array.from({ length }).map(() => ({
  x: DateUtility.getRandomDate([startDate, endDate]),
  y: NumberUtility.getRandomNumber(min, max),
  type: "A1",
}));

const myDataPoints = Array.from({ length: 5 }).map(() => ({
  x: DateUtility.getRandomDate([startDate, endDate]),
  y: NumberUtility.getRandomNumber(min, max),
  type: "A1",
}));

// 최저점과 최고점 찾기
const minPoint = dataPoints.reduce(
  (min, point) => (point.y < min.y ? point : min),
  dataPoints[0],
);
const maxPoint = dataPoints.reduce(
  (max, point) => (point.y > max.y ? point : max),
  dataPoints[0],
);

const mock = {
  datasets: [
    {
      label: "public",
      data: dataPoints,
      backgroundColor: dataPoints.map((point) => {
        if (point === minPoint) return colors.blue[500]; // 최저점 색상
        if (point === maxPoint) return colors.red[500]; // 최고점 색상
        return "#A2A7B4";
      }),
      borderColor: "transparent",
    },
    {
      label: "my",
      data: myDataPoints,
      backgroundColor: colors.primary[500],
      borderColor: "#FFF5F4",
      borderWidth: 6,
      pointRadius: 6,
    },
  ],
};

export type ActualTransactionPriceChartProps = Partial<ScatterChartProps>;

export default function ActualTransactionPriceChart(
  props: ActualTransactionPriceChartProps,
) {
  const defaultProps = {
    type: "basic",
    data: mock,
    options: {
      animation: false,
      scales: {
        x: {
          ticks: {
            font: {
              family: pretendard.style.fontFamily,
            },
            autoSkipPadding: 12,
          },
          time: {
            displayFormats: {
              day: "yy.MM.dd",
              week: "yy.MM.dd",
              quarter: "yy.MM.dd",
            },
          },
        },
        y: {
          ticks: {
            font: {
              family: pretendard.style.fontFamily,
            },
            stepSize: 5 * 100 * 1000 * 1000,
          },
        },
      },
      interaction: {
        mode: "nearest",
      },
      plugins: {
        tooltip: {
          enabled: false,
          external,
        },
      },
    },
    plugins: [
      {
        id: "min-max-tooltip",
        afterRender: (chart: any) => {
          // 기존 라벨을 제거
          chart.canvas.parentElement
            .querySelectorAll(".chart-label")
            .forEach((label: HTMLDivElement) => label.remove());

          // 최저점 라벨 추가
          addLabel("최저", minPoint, colors.blue[500], "", chart);

          // 최고점 라벨 추가
          addLabel("최고", maxPoint, colors.red[500], "max", chart);
        },
      },
    ],
  };
  return (
    <div className="relative w-full">
      <ScatterChart {...merge(defaultProps, props)} />
    </div>
  );
}

const getTypeString = (type: string) => {
  switch (type) {
    case "A1":
    default: {
      return "매매";
    }
  }
};

const addLabel = (
  text: string,
  point: { x: Date; y: number; type: string },
  pointColor: string,
  className: string,
  chart: any,
) => {
  const meta = chart.getDatasetMeta(0);
  const pointPosition = meta.data[dataPoints.indexOf(point)].getProps(
    ["x", "y"],
    true,
  );

  pointPosition.options.backgroundColor = pointColor;
  pointPosition.options.borderColor = pointColor;

  const label = document.createElement("div");
  label.className = `chart-label ${className}`;
  label.innerText = text;

  // 라벨의 위치를 canvas 내부 좌표에 맞추어 설정
  label.style.left = `${pointPosition.x}px`;
  label.style.top = `${pointPosition.y - 8}px`; // 8px 위로 오프셋

  chart.canvas.parentNode?.appendChild(label);
};

const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector(".chart-tooltip");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div") as HTMLDivElement;
    tooltipEl.className = "chart-tooltip";

    const container = document.createElement("div");
    container.className = "container";

    tooltipEl.appendChild(container);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const external = (context: any) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = "0";
    return;
  }

  const dataPoint = tooltip.dataPoints[0];

  const tooltipData = dataPoint.dataset.data[dataPoint.dataIndex];

  const { x, y, type } = tooltipData;
  const formattedDate = format(x, "yy.MM.dd");
  const formattedPrice = NumberUtility.getPropertyPriceNumber(y);

  const span1 = document.createElement("span");
  const text1 = document.createTextNode(formattedDate);
  span1.appendChild(text1);
  const span2 = document.createElement("span");
  const text2 = document.createTextNode(
    `${getTypeString(type)} ${formattedPrice}`,
  );
  span2.appendChild(text2);

  const containerRoot = chart.canvas.parentNode?.querySelector(
    ".container",
  ) as HTMLDivElement;

  // Remove old children
  while (containerRoot.firstChild) {
    containerRoot.firstChild.remove();
  }

  containerRoot.appendChild(span1);
  containerRoot.appendChild(span2);

  const containerRect = containerRoot.getBoundingClientRect();

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  let offset = 0;
  // TODO 중앙 넘어가는 경우 offset 설정
  if (tooltip.caretX > chart.chartArea.width / 2) {
    offset -= containerRect.width + 12;
  }
  // Display, position, and set styles for font
  tooltipEl.style.opacity = "1";
  tooltipEl.style.left = positionX + tooltip.caretX + offset + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding =
    tooltip.options.padding + "px " + tooltip.options.padding + "px";
};
