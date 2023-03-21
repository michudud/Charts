import React, { useEffect, useState } from "react";
import { Container } from "./styles/Container.styled";
import { DataTable } from "./styles/DataTable.styled";
import { Menu } from "./styles/Menu.styled";

const OverviewPage = () => {
  const [dataForCharts, setDataForCharts] = useState([[]]);

  const collumnsNumber = 6;
  useEffect(function tableWithRandomDataSets() {
    let dataSets = [["X", "Y"]];
    for (let i = 0; i < collumnsNumber; i++) {
      let randomValue = Math.floor(Math.random() * 100 + 1);
      dataSets.push([i + 1, randomValue]);
    }
    setDataForCharts(dataSets);
  }, []);

  const updateData = (e, index, index2) => {
    const newData = [...dataForCharts];
    let newValue = e.target.value;
    index > 0 && index2 === 1 ? (newValue = Number(newValue)) : null;
    newData[index][index2] = newValue;
    setDataForCharts(newData);
  };

  useEffect(() => {
    console.log(dataForCharts);
  }, [dataForCharts]);

  return (
    <Container>
      <Menu>
        <DataTable>
          <thead>
            <tr>
              <th>Axis</th>
              <th colSpan={collumnsNumber}>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue="X"
                  onChange={(e) => {
                    updateData(e, 0, 0);
                  }}
                />
              </td>
              {dataForCharts.map((dataSet, axisIndex) => {
                if (axisIndex > 0) {
                  return (
                    <td>
                      <input
                        type="text"
                        defaultValue={dataSet[0]}
                        onChange={(e) => {
                          updateData(e, axisIndex, 0);
                        }}
                      />
                    </td>
                  );
                }
              })}
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue="Y"
                  onChange={(e) => {
                    updateData(e, 0, 1);
                  }}
                />
              </td>
              {dataForCharts.map((dataSet, dataIndex) => {
                if (dataIndex > 0) {
                  return (
                    <td>
                      <input
                        type="number"
                        defaultValue={dataSet[1]}
                        onChange={(e) => {
                          updateData(e, dataIndex, 1);
                        }}
                      />
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </DataTable>
      </Menu>
    </Container>
  );
};

export default OverviewPage;
