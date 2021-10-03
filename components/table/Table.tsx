import TableHeader from "@/components/table/TableHead";
import TableRow from "@/components/table/TableRow";
import TableRowData from "@/components/table/TableRowData";
import TableRowDataPrice from "@/components/table/TableRowDataPrice";

export interface TableProps {
  tableData: any[];
}

const Table: React.FC<TableProps> = ({ tableData }: TableProps) => {
  return (
    <table className="p-4 text-lg bg-white rounded-lg shadow">
      <thead>
        <tr>
          <TableHeader headerName="Nombre" />
          <TableHeader headerName="Precio" />
          <TableHeader headerName="Comprador" />
          <TableHeader headerName="Fecha" />
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <TableRow key={data.id}>
            <TableRowData tableRowData={data.name} />
            <TableRowDataPrice tableRowData={data.price} />
            <TableRowData tableRowData={data.buyer} />
            <TableRowData tableRowData={data.date} />
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
