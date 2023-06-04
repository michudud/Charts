import { useRef } from "react";

const BarChart = ({
  chartTitle,
  xAxisName,
  yAxisName,
  xAxisData,
  yAxisData,
}) => {
  const barWidth = 100 / yAxisData.length;
  const maxBarHeight = Math.max.apply(Math, yAxisData);

  const verticalTextSvg = useRef();

  return (
    <svg width="100%" height="100%">
      <svg y="5px" width="100%" height="20px">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#404040"
          fontWeight="bold"
        >
          {chartTitle}
        </text>
      </svg>
      <svg
        x="30px"
        y="50px"
        width="calc(100% - 60px)"
        height="calc(100% - 100px)"
      >
        <svg y="10px" width="calc(100% - 10px)" height="calc(100% - 10px)">
          {yAxisData.map((dataSet, index) => {
            return (
              <svg
                x={index * barWidth + "%"}
                y={100 - (dataSet / maxBarHeight) * 100 + "%"}
                width={barWidth + "%"}
                height={(dataSet / maxBarHeight) * 100 + "%"}
                key={dataSet + "_" + index + "_" + new Date().getTime()}
              >
                <rect
                  x="20%"
                  y="1px"
                  width="60%"
                  height="100%"
                  fill="lightblue"
                  stroke="silver"
                />
              </svg>
            );
          })}
        </svg>
        {/* axis */}
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="#404040"
          strokeWidth="3px"
        />
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="#404040"
          strokeWidth="3px"
        />
        {/* axis */}
      </svg>
      {/* axis-name */}
      <svg
        x="30px"
        y="calc(100% - 30px)"
        width="calc(100% - 60px)"
        height="30px"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#404040"
          fontWeight="bold"
        >
          {xAxisName}
        </text>
      </svg>
      <svg
        x="7.5px"
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
          textAnchor="end"
          dominantBaseline="hanging"
          transform="rotate(-90)"
          fill="#404040"
          fontWeight="bold"
        >
          {yAxisName}
        </text>
      </svg>
      {/* axis-name */}
      {/* axis-data */}
      <svg
        x="30px"
        y="calc(100% - 50px)"
        width="calc(100% - 60px)"
        height="20px"
      >
        <svg width="calc(100% - 10px)" height="100%">
          {xAxisData.map((dataSet, index) => {
            return (
              <svg
                x={index * barWidth + "%"}
                y="2px"
                width={barWidth + "%"}
                height="18px"
                key={dataSet + "_" + index + "_" + new Date().getTime()}
              >
                <text
                  x="50%"
                  y="50%"
                  fontSize="14px"
                  fill="#404040"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {dataSet}
                </text>
              </svg>
            );
          })}
        </svg>
      </svg>
      {/* axis-data */}
    </svg>
  );
};
export default BarChart;
