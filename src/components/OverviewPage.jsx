import React, { useEffect, useRef, useState } from "react";
import BarChart from "./BarChart";
import { ChartContainer } from "./styles/ChartContainer.styled";
import { FlexColContainer } from "./styles/FlexContainer.styled";
import { DataTable } from "./styles/DataTable.styled";
import { Menu } from "./styles/Menu.styled";

const OverviewPage = () => {
  const [xAxisName, setXAxisName] = useState("X-axis");
  const [yAxisName, setYAxisName] = useState("Y-axis");
  const [xAxisData, setXAxisData] = useState([]);
  const [yAxisData, setYAxisData] = useState([]);
  const [columnsNumber, setColumnsNumber] = useState(6);

  useEffect(
    function tableWithRandomDataSets() {
      let xData = [];
      let yData = [];
      for (let i = 0; i < columnsNumber; i++) {
        let randomValue = Math.floor(Math.random() * 100 + 1);
        xData.push(i + 1);
        yData.push(randomValue);
      }
      setXAxisData(xData);
      setYAxisData(yData);
    },
    [columnsNumber]
  );

  return (
    <FlexColContainer>
      <Menu>
        <DataTable>
          <thead>
            <tr>
              <th>Axis</th>
              <th colSpan={columnsNumber}>Data</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue="X-axis"
                  onChange={(e) => {
                    setXAxisName(e.target.value);
                  }}
                />
              </td>
              {xAxisData.map((dataSet, axisIndex) => {
                return (
                  <td
                    key={dataSet + "_" + axisIndex + "_" + new Date().getTime()}
                  >
                    <input
                      type="text"
                      defaultValue={dataSet}
                      onChange={(e) => {
                        const newData = [...xAxisData];
                        newData[axisIndex] = e.target.value;
                        setXAxisData(newData);
                      }}
                    />
                  </td>
                );
              })}
              <td>
                <button
                  onClick={() => {
                    setColumnsNumber(columnsNumber + 1);
                  }}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue="Y-axis"
                  onChange={(e) => {
                    setYAxisName(e.target.value);
                  }}
                />
              </td>
              {yAxisData.map((dataSet, dataIndex) => {
                return (
                  <td
                    key={dataSet + "_" + dataIndex + "_" + new Date().getTime()}
                  >
                    <input
                      type="number"
                      defaultValue={dataSet}
                      onChange={(e) => {
                        const newData = [...yAxisData];
                        newData[dataIndex] = Number(e.target.value);
                        setYAxisData(newData);
                      }}
                    />
                  </td>
                );
              })}
              <td>
                <button
                  onClick={() => {
                    columnsNumber > 0
                      ? setColumnsNumber(columnsNumber - 1)
                      : null;
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </Menu>

      <ChartContainer>
        <BarChart
          xAxisName={xAxisName}
          yAxisName={yAxisName}
          xAxisData={xAxisData}
          yAxisData={yAxisData}
        />
      </ChartContainer>
    </FlexColContainer>
  );
};

export default OverviewPage;
