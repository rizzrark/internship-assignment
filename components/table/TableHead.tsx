export interface TableHeadProps {
  headerName: string;
}

const TableHead: React.FC<TableHeadProps> = ({
  headerName,
}: TableHeadProps) => {
  return (
    <th className="p-4 text-lg font-bold tracking-wider text-left text-blue-600 border-b-2 dark:border-dark-5 whitespace-nowrap">
      {headerName}
    </th>
  );
};

export default TableHead;
