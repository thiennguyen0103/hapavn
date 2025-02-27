import {
  AccessorKeyColumnDefBase,
  createColumnHelper,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  IdIdentifier,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type TSubProduct = {
  id: number;
  image?: string;
  productName: string;
  brand: string;
  sku: string;
  maintenanceCycle: string;
  price: string;
};

type TProduct = {
  id: number;
  image: string;
  productName: string;
  brand: string;
  sku: string;
  usage: number;
  note: string;
  children?: TSubProduct[];
};

const OrderTable = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const data = useMemo(
    () => [
      {
        id: 1,
        image:
          "https://s3-alpha-sig.figma.com/img/30d4/f905/ee0a84d5f6a6e38247fc01072851fa84?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aUx1yEuIpZ7T~tOqyOLw0SeQV-LfemJtmkFO8UTbn4gMUEtoCv9M2dx8fRTlksscJ0-wc6IDyBTg5jsNoQ0yZ7WiP6qRCD9YEwV7CGBICH~TCfkJ8DU3rZxYAHc9bYDg4hUarOIcTMds2y0amrlJF0zqIIqm3EfbAwHGjmM25XsqOXV~vyFcb7nPNGD2YzTw2EpdyHNgdyJrG7HTeQy34UT6aZQ1XkL8K9zHk4n-8h72QRycohM9ApAjh~Llen4tYDm6fUn7MsLY4kIDq5k804u-9jY1sbcdvqymfsqZDlKsSqvso0~HBhMUJmqPK0Hb2zuSr3nWoINVXcRg5HUHUg__",
        productName: "Máy Lọc Nước Đầu Nguồn 3M AP904",
        brand: "3M",
        sku: "AP904",
        usage: 25,
        note: "...",
        children: [],
      },
      {
        id: 2,
        image: "Ảnh 2",
        productName: "Combo Máy Lọc Nước Đầu Nguồn 3M AP904",
        brand: "3M",
        sku: "COMBO AP904",
        usage: 59,
        note: "...",
        children: [],
      },
      {
        id: 3,
        image: "Ảnh 3",
        productName: "Máy Lọc Nước 3M BREW120-MS",
        brand: "3M",
        sku: "BREW120-MS",
        usage: 38,
        note: "...",
        children: [
          {
            id: 4,
            productName: "Lõi lọc RYO Sediment Filter",
            brand: "RYO Hyundai",
            sku: "RYO Sediment",
            maintenanceCycle: "6 tháng",
            price: "280,000đ",
          },
          {
            id: 5,
            productName: "Lõi lọc RYO Pre-Carbon Filter",
            brand: "RYO Hyundai",
            sku: "RYO Pre-Carbon",
            maintenanceCycle: "9 tháng",
            price: "300,000đ",
          },
        ],
      },
      {
        id: 6,
        image: "Ảnh 2",
        productName: "Combo Máy Lọc Nước Đầu Nguồn 3M AP904",
        brand: "3M",
        sku: "COMBO AP904",
        usage: 59,
        note: "...",
        children: [],
      },
    ],
    [],
  );

  const columnHelper = createColumnHelper<TProduct>();

  const columns = [
    columnHelper.accessor("image", {
      header: () => <div className="text-left">Ảnh</div>,
      cell: (info) => <img src={info.getValue()} className="size-9" />,
    }),
    columnHelper.accessor("productName", {
      header: () => <div className="text-left">Sản phẩm gốc</div>,
      cell: (info) => (
        <Link to={"#"} className="text-[#0076DC]">
          {info.getValue()}
        </Link>
      ),
    }),
    columnHelper.accessor("brand", {
      header: () => <div className="text-left">Thương hiệu</div>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("sku", {
      header: () => <div className="text-left">Mã SKU</div>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("usage", {
      header: () => <div className="text-left">Tổng số lượt sử dụng</div>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("note", {
      header: () => <div className="text-left">Ghi chú</div>,
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onRowSelectionChange: setRowSelection,
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.children as any,
    manualExpanding: true,
    state: {
      rowSelection,
      expanded,
    },
    enableExpanding: true,
    enableRowSelection: true,
  });

  const childColumnHelper = createColumnHelper<TSubProduct>();

  const childColumns = [
    childColumnHelper.accessor("image", {
      header: () => <div className="text-left">Ảnh</div>,
      cell: (info) => <img src={info.getValue()} className="size-9" />,
    }),
    childColumnHelper.accessor("productName", {
      header: () => <div className="text-left">Sản phẩm gốc</div>,
      cell: (info) => (
        <Link to={"#"} className="text-[#0076DC]">
          {info.getValue()}
        </Link>
      ),
    }),
    childColumnHelper.accessor("brand", {
      header: () => <div className="text-left">Thương hiệu</div>,
      cell: (info) => info.getValue(),
    }),
    childColumnHelper.accessor("sku", {
      header: () => <div className="text-left">Mã SKU</div>,
      cell: (info) => info.getValue(),
    }),
    childColumnHelper.accessor("maintenanceCycle", {
      header: () => <div className="text-left">Chu kỳ chăm sóc</div>,
      cell: (info) => info.getValue(),
    }),
    childColumnHelper.accessor("price", {
      header: () => <div className="text-left">Giá bán</div>,
      cell: (info) => info.getValue(),
    }),
  ];

  return (
    <div>
      <table className="min-w-full text-sm">
        <thead className="bg-[#E8EAEB]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="[&>tr~tr>td]:border-t [&>tr~tr>td]:border-[#E8EAEB]">
          {table.getRowModel().rows.map((row) => (
            <>
              <tr
                key={row.id}
                className={cn(
                  "relative",
                  row.getIsExpanded() && "bg-[#F0F9FE]",
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>

              <tr className="bg-[#F0F9FE]">
                <td className="border-none!" />
                <td
                  colSpan={row.getVisibleCells().length - 1}
                  className="border-none! pl-4"
                >
                  <SubTable<TSubProduct>
                    columns={childColumns}
                    data={row.original.children || []}
                  />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

interface SubTableProps<T extends object> {
  data: T[];
  columns: (AccessorKeyColumnDefBase<T, string> &
    Partial<IdIdentifier<T, string>>)[];
}

const SubTable = <T extends object>({ data, columns }: SubTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="relative w-full bg-white">
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border-t border-[#E8EAEB] px-4 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
