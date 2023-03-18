import { useTheme } from "next-themes";
import DataTable from "react-data-table-component";
import styled from "styled-components";

const columns = [
  {
    name: "Symbol",
    selector: (row) => (
      <div className="iconColor font-bold">
        <div>{row.title.split("/")[0]}/ </div>{" "}
        <div>{row.title.split("/")[1]}</div>
      </div>
    ),
    // width:'100px'
  },
  {
    name: "Price",
    selector: (row) => (
      <div className="priceText text-[14px] font-semibold">{row.price}</div>
    ),
    // width:'90px'
  },
  {
    name: "Pulse",
    selector: (row) => <div className="w-[20px] h-[10px] bg-[#EA3943]"></div>,
    // width:'70px'
  },
  {
    name: "Shift",
    selector: (row) => <div className="w-[20px] h-[10px] bg-[#26A17B]"></div>,
    // width:'70px'
  },
  {
    name: "Change",
    selector: (row) => (
      <div className="text-[#EA3943] font-semibold">-34.5%</div>
    ),
  },
];

const data = [
  {
    id: 1,
    title: "CRV/USDT",
    year: "1988",
    price: "$0.096",
  },
  {
    id: 2,
    title: "BNB/USDT",
    year: "1984",
    price: "$0.096",
  },
  {
    id: 3,
    title: "BNB/USDT",
    year: "1984",
    price: "$0.096",
  },
  {
    id: 4,
    title: "CRV/USDT",
    year: "1984",
    price: "$0.096",
  },
];

export function TableComp({
    title,
    // data,
    pagination,
    // columns,
    selectableRows,
    progressPending = false,
    setIsSelected = {},
    message,
    marginBottom,
    noHeader=false,
    HeaderBackgroundColor,
}) {
  const { theme, setTheme } = useTheme();
  return (
    <TableCompStyled Background={theme}>
     <DataTable
          responsive={true}
          title={title}
          columns={columns}
          data={data ? data : []}
          defaultSortFieldId={1}
          // sortIcon={<SortIcon />}
          pagination={pagination ? true : false}
          // // onSelectedRowsChange={handleRowSelected}
          selectableRows={selectableRows ? true : false}
          progressPending={progressPending}
          pointerOnHover
          noHeader={noHeader}
          
          persistTableHead={false}
          noDataComponent={message?message:false}

          
            // selectableRows
        />
    </TableCompStyled>
  );
}

const TableCompStyled = styled.div`
  .rdt_TableHeadRow {
    font-size: 13px;
    background: ${(props) =>
      props.Background === "dark" ? "#000" : "#fff"} !important;
    color: ${(props) =>
      props.Background !== "dark" ? "#00#0" : "#fff"}!important;
    // color:#545454;
  }
  .rdt_TableRow {
    border: none;
    padding: 20px 0;
    background-color: transparent !important;
  }

  .rdt_TableBody {
    background: ${(props) =>
      props.Background === "dark" ? "#000" : "#fff"}!important;
  }
`;
