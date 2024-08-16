import styled from "styled-components";
import { TableHeadProps } from "@/models/tableHead";

const Thead = styled.thead`
  background-color: #454545;
  font-size: 22px;
`;

const Th = styled.th`
  padding: 10px;
  color: #fff;
`;

export function TableHead({ columns }: TableHeadProps) {
  return (
    <Thead>
      <tr>
        {columns.map((column) => (
          <Th key={column}>{column}</Th>
        ))}
      </tr>
    </Thead>
  );
}
