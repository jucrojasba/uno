import styled from "styled-components";
import { TableHeadProps } from "@/models/tableHead";
import { GlobalTheme } from "@/app/GlobalStyling";

const Thead = styled.thead`
  background-color: ${GlobalTheme.pageColors.bgTertiary};
  font-size: 20px;
`;

const Th = styled.th`
  padding: 10px;
  color: ${GlobalTheme.pageColors.textPrimary};
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
