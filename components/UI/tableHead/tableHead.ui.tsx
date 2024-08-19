import styled from "styled-components";
import { TableHeadProps } from "@/models/tableHead";

const Thead = styled.thead`
  background-color: ${({ theme }) => theme.pageColors.bgTertiary};
  font-size: 20px;
`;

const Th = styled.th`
  padding: 10px;
  color: ${({ theme }) => theme.pageColors.textPrimary};
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
