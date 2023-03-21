import React from "react";

const BarChart = ({ xAxisName, yAxisName, xAxisData, yAxisData }) => {
  const barWidth = 100 / yAxisData.length;
  const maxBarHeight = Math.max.apply(Math, yAxisData);

  return (
    <svg width="100%" height="100%">
      <svg
        x="20px"
        y="20px"
        width="calc(100% - 40px)"
        height="calc(100% - 40px)"
      >
        <svg y="10px" width="calc(100% - 10px)" height="calc(100% - 10px)">
          {yAxisData.map((dataSet, index) => {
            return (
              <svg
                x={index * barWidth + "%"}
                y={`calc(100% - ${(dataSet / maxBarHeight) * 100}%)`}
                width={barWidth + "%"}
                height={(dataSet / maxBarHeight) * 100 + "%"}
                fill="red"
                key={dataSet + "_" + index + "_" + new Date().getTime()}
              >
                <rect x="20%" y="0" width="60%" height="100%" />
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
    </svg>
  );
};
export default BarChart;
