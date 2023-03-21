import styled from "styled-components";

export const DataTable = styled.table`
  width: 720px;
  background-color: grey;
  padding: 10px 10px;
  border-radius: 10px;

  tr {
    width: 700px;

    th {
      border-bottom: 1px solid #282828;
      color: #080808;
    }

    td {
      width: 100px;
      text-align: center;

      &:first-child {
        border-right: 1px solid #282828;
      }

      input {
        width: 90px;
        height: 30px;
        margin: 5px;
        text-align: center;
        border: none;
        border-radius: 5px;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        [type="number"] {
          -moz-appearance: textfield;
        }
      }
    }
  }
`;
