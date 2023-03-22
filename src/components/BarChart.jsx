import React, { useRef } from "react";

const BarChart = ({ xAxisName, yAxisName, xAxisData, yAxisData }) => {
  const barWidth = 100 / yAxisData.length;
  const maxBarHeight = Math.max.apply(Math, yAxisData);

  const verticalTextSvg = useRef();
  if (verticalTextSvg.current) {
    console.log(verticalTextSvg.current.getBBox().width);
  }

  return (
    <svg width="100%" height="100%">
      <svg
        x="30px"
        y="30px"
        width="calc(100% - 60px)"
        height="calc(100% - 60px)"
      >
        <svg y="10px" width="calc(100% - 10px)" height="calc(100% - 10px)">
          {yAxisData.map((dataSet, index) => {
            return (
              <svg
                x={index * barWidth + "%"}
                y={`calc(100% - ${(dataSet / maxBarHeight) * 100}%)`}
                width={barWidth + "%"}
                height={(dataSet / maxBarHeight) * 100 + "%"}
                key={dataSet + "_" + index + "_" + new Date().getTime()}
              >
                <rect
                  x="20%"
                  y="0"
                  width="60%"
                  height="100%"
                  fill="lightblue"
                />
              </svg>
            );
          })}
        </svg>

        {/* axis */}
        <line x1="0" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="3px" />
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="black"
          strokeWidth="3px"
        />
        {/* axis */}
      </svg>
      <svg
        x="30px"
        y="calc(100% - 30px)"
        width="calc(100% - 60px)"
        height="30px"
      >
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          {xAxisName}
        </text>
      </svg>

      <svg
        x="5px"
        y={`calc(50% - ${
          verticalTextSvg.current
            ? verticalTextSvg.current.getBBox().width / 2
            : 0
        }px)`}
        width="30px"
        height="calc(100% - 60px)"
      >
        <text
          ref={verticalTextSvg}
          x="0"
          y="0"
          text-anchor="end"
          dominant-baseline="hanging"
          transform="rotate(-90)"
        >
          {yAxisName}
        </text>
      </svg>
    </svg>
  );
};
export default BarChart;
