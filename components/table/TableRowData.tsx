export interface TableRowDataProps {
  tableRowData: string | number | boolean;
}

const TableRowData = ({ tableRowData }: TableRowDataProps) => {
  return <td className="p-4 min-w-[10rem] border-b-2">{tableRowData}</td>;
};

export default TableRowData;
