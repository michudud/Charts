import styled from "styled-components";

export const DataTable = styled.table`
  background-color: grey;
  padding: 10px 10px;
  border-radius: 10px;

  tr {
    th {
      border-bottom: 1px solid #282828;
      color: #080808;
    }

    td {
      text-align: center;

      &:first-child {
        border-right: 1px solid #282828;
      }

      input {
        width: 60px;
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

      button {
        width: 30px;
        height: 30px;
        margin: 5px;
        border: none;
        border-radius: 5px;
        background-color: white;
      }
    }
  }
`;
