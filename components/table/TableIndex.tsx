import TableHeader from "@/components/table/TableHead";
import TableRow from "@/components/table/TableRow";
import TableRowData from "@/components/table/TableRowData";

export interface TableIndexProps {
  tableData: any;
}

const TableIndex: React.FC<TableIndexProps> = ({
  tableData,
}: TableIndexProps) => {
  console.log(tableData);
  return (
    <table className="p-4 text-lg rounded-lg shadow bg-gray-50">
      <thead>
        <tr>
          <TableHeader headerName="Name" />
          <TableHeader headerName="Description" />
        </tr>
      </thead>
      <tbody>
        <TableRow key={tableData.id}>
          <TableRowData tableRowData={tableData.device} />
          <TableRowData tableRowData={tableData.description} />
        </TableRow>
      </tbody>
    </table>
  );
};

export default TableIndex;
