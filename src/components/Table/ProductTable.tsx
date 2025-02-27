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
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import IndeterminateCheckbox from "../Checkbox/IndeterminateCheckbox";

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

const ProductTable = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  console.log("🚀 ~ ProductTable ~ rowSelection:", rowSelection);
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  console.log("🚀 ~ ProductTable ~ expanded:", expanded);

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
        note: "",
        children: [],
      },
      {
        id: 2,
        image:
          "https://s3-alpha-sig.figma.com/img/ee38/ad91/0f0966c7a12d08619ed11ec7530ff069?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kNqNQpmE6r36rza9COkGi0QDA2pjBC4cYGOy99YkHOZGwEbE7yB-vf7MD2xPjqYdir~BbDot9QWb0nD8QJ3VxC35b963ovnERELhP4uAaHYByLYHSrfRIznKle~mtVLRCYP-KdNYnGyOkI~dVmsdrNFXMJMbHGuYdA5SzW247U-1ZXNNExjmd5zd4NtDBsmws4ir3ZnJh4SCmy3r6k7ZzDplWCsliZL-QCMjRXSn13kFPefry9ccqJjbhkngIqTjDtzAHh4907BchidFS4Zkw2jhIGd6OcbX57zxO-fXte3sOo8ybdq-vWpP0Paas4gWLBOXMpOfnBnDdIiqgCfCBA__",
        productName: "Combo Máy Lọc Nước Đầu Nguồn 3M AP904...",
        brand: "3M",
        sku: "COMBO AP904",
        usage: 59,
        note: "...",
        children: [],
      },
      {
        id: 3,
        image:
          "https://s3-alpha-sig.figma.com/img/0481/9be6/a8af76c5336103fdc04990686b1a55ff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YCE7pSOSK01nsHbg6aMSRZWHZeyRibXCqov-0NUbU~l2nQtZxU6QM26Aa9pyYC1~~WRlIYTKUFhxMsiq7M9IVQ5W5QREZk3rLyllOhO3EXqoqKgG8vkW5htzonveICG~TBHf1~VjhEzaJVR0pSjIqYscWJdoC~8mBQInLi5CyPne3eJBStPkJljq~fQiGKOrBaHhXSDbKDUZR4hCvyWrighRKpnl6~tJIzErIqOM2PAM6vyv1j3sS2TsTcFTPA9yBeDzOTHj-2Ajn0YY8SELOEk97oqdagutIsrPNgPAOB5nHXEc6HsTQBCAqZpGPNv25yH7~3SixMqAt-B6aFbW-w__",
        productName: "Máy Lọc Nước 3M BREW120-MS",
        brand: "3M",
        sku: "BREW120-MS",
        usage: 38,
        note: "",
      },
      {
        id: 4,
        image:
          "https://s3-alpha-sig.figma.com/img/a2bf/0336/93ce772dcde950b39dd7977b9f417f8d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bZvHSwZZ-JYeJbIzfkO9S~7qXI1ohbw--AOHtx~btFp5KiBZ-X3Uy4d5ik7~~bg2YxgLCtc1d293ojgt9AqIk7aVya63q4xAwXz683~SJX~kmWFfpsbWaetnQtiEfLKn-8hg3RDycvFDyYy7YScHU3l93niKQsTx33O-MoFkjIiv9bOupjAUaglxtT0lkgLRgzRC8gb2lCsZ1V35riSun1Rx2EYsMn-iMaLKmEkzejvHIFOOJ5r6aeWzSsMwv4txKEllmrNAZ9fZAUJH11vxvrMy3y2Bmno4QVUNnjJCk991vcmwChqCbb-SC5hNJW-1G8LGW6drJ-aDaWM~pHzAMw__",
        productName: "Máy Lọc Nước RYO Hyundai RP901",
        brand: "RYO Hyundai",
        sku: "RP901",
        usage: 110,
        note: "",
        children: [
          {
            id: 5,
            image:
              "https://s3-alpha-sig.figma.com/img/6fcd/8f3c/4a5f60ac1c81ead761d5e092080b18df?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O3hcRQHs71x9S90VxHoa1HCRfzJWver1LZVjT0VodUBW8P8ikuUbInqdAp42hZZTiynjCxV1gFiV9dcgy89H6zDR4jb-QoewdVxhRe96KHm3L22XZZmRoKU9kxViHBPSTnepgla5EWe03Q7GgIGrBUC19vdEOSEcilU4bP86w0M92ud1Yw9YWIg~PkWmicdijVueF5b6yoswb9oiQBatNLQvHH4xMImEK2Cym9HQVIv7TXfiuTrnmJMOOK1d2~XtSUysPks36s2HfyXTxgZ2j4k34CVptP7Om2NKVkgjQMxGiWXacq70IA1AUldAoOUpJIwTZ6r9fRs4OJDpxT1CFA__",
            productName: "Lõi lọc RYO Sediment Filter",
            brand: "RYO Hyundai",
            sku: "RYO Sediment",
            maintenanceCycle: "6 tháng",
            price: "280,000đ",
          },
          {
            id: 6,
            image:
              "https://s3-alpha-sig.figma.com/img/6fd9/0c22/5cf2a74f0dee1fd361a57bf473c42e8e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=srbcwzysBPXg5QnP~IXlqVEQ6Od-yR5hh-Z-mu2qz247wmhsuRq1Wet9HGNFOUecr6tS63PCYaF7SB3h3e~n81qwp1FxJzYP509vuoWF-Sbb3wcEvx7gcBlsTXkmBn7sWwYLPMpTvA3ImGNgUU3qMSmrEJ8UqthoEAr8jvgYQMEr-SvbGClZ~kuxP-zx84DNwKYdabPRP0l2RSVnw5lb6q7UbS4btIgF4mRNxfhkF4Wi6HsG3TnKRSAg-1W8nTWjzBori9E0t-xY6JAnUqxI5QBuvIpGRkoLHcYAWJWSCmfrc97FwIT-f7veJKf8jbhwEP30TTzkeSBCMiy7B8wmhg__",
            productName: "Lõi lọc RYO Pre-Carbon Filter",
            brand: "RYO Hyundai",
            sku: "RYO Pre-Carbon",
            maintenanceCycle: "9 tháng",
            price: "300,000đ",
          },
          {
            id: 7,
            image:
              "https://s3-alpha-sig.figma.com/img/f09f/9737/5be9159ffe1a655c65116f053f42d8f6?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BeNg8Xjn-KOSL84QnnR7qY-WxXooMGgALO0S0k8scX5nKr1CXGy4sIR7iswGHiAfr-MGGqB2vPbzdlt696Htt726jwwmG0JT7Y82r~80nnLPzClGh7UTJ48oyUtgohOgYKki2uQb07ykQeWd7SE9a6g5NiIAaXqNszjpy4FK~tT6zJLnoHYkSZvc0-oOy89umpqwJeWXQpwIs4R5Xl2Xa~DZTUpMAdU0eIVwRPaFEP-lppnyYv4cBUp5qNggL5rv3aa91cm6K5E25c-5piyYl7qym1eQanxDPEFm-zoDO5a4JB5qqvTo5daw-HJc7VrM47HtWWYwTQ4y39Km5t1nWw__",
            productName: "Lõi lọc RYO UF Membrane Filter",
            brand: "RYO Hyundai",
            sku: "RYO UF",
            maintenanceCycle: "24 tháng",
            price: "680,000đ",
          },
          {
            id: 8,
            image:
              "https://s3-alpha-sig.figma.com/img/d628/69eb/e94f1d070e003e9a88f9ba69b46152f6?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PkZzdoXMqyuZlrJZrcMd1s-jax5iZKR4zsPE16lAgJJjKDsnXrjAJpNlgR8QzIp-RwSDQcfYidm3Q5XzBfRr2JrID9NPlJED2NGFmkjdVg8l1CuK4WHrZU470PWyn8ghesslbCJqMqri96Rkacdjcd98mN6hoS~wXPMx4CMjERJ5nXs7dLWBTCVe7LPjjiWzH9zvAPxwlthyiDXpiA1vrE8wlh9wwkp7FUM-ykLGTKNrKsHJcfucOI3FJIEzI~R~3W1Z7zvZ8Oe-P8LShyhosvruADLUaU-Hc9vc3PIIiv7CpQqiCP-lrY6Xzna8nYaKt3IQsV8X3Bab37Nfn7syLg__",
            productName: "Lõi lọc RYO Post Carbon Filter",
            brand: "RYO Hyundai",
            sku: "RYO Post Carbon",
            maintenanceCycle: "12 tháng",
            price: "320,000đ",
          },
          {
            id: 9,
            image:
              "https://s3-alpha-sig.figma.com/img/e01b/9c6d/2426bf737f6e0b3b682f40474014bf63?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jkF~xyxx4O4bMoFsmE7hAaAns3ofaJxVs9fzKhsIhuQ2yaeXh0LXXgyiMeEUoydEXWSqsikqpFYLjnMzMOIuN41VjtE5dSomXtcQv6sFu0Al3O5EQONP5QJsMbaoMGtlp6giAB0iehDcekoA~h5TGit~w2uzpLWd3wJ7jrMdhPlCbEI9SnsKdN7UefE5lxw7IJR9-HYpXWV~gXGylqPNGzjT3xiH8aWxqgm4DyrYNWsQNdVek-tMjQoCQQifHQRFpN45suKLDutizwFWzgIXURDqcmtn85Lun0CS~3ukBwpnZ-bSnB5i02mvxTj2lBu-mH~GuzQHoq5N8fU~p26kuQ__",
            productName: "Lõi lọc RYO TCR Filter",
            brand: "RYO Hyundai",
            sku: "RYO TCR Filter",
            maintenanceCycle: "12 tháng",
            price: "360,000đ",
          },
        ],
      },
    ],
    [],
  );

  const columnHelper = createColumnHelper<TProduct>();

  const columns = [
    columnHelper.accessor("id", {
      id: "expandable",
      header: "",
      cell: ({ row }) => (
        <button
          onClick={row.getToggleExpandedHandler()}
          className="cursor-pointer"
        >
          {row.getIsExpanded() ? (
            <MdKeyboardDoubleArrowDown size={24} className="text-[#0076DC]" />
          ) : (
            <MdKeyboardDoubleArrowRight size={24} className="text-[#999]" />
          )}
        </button>
      ),
    }),
    columnHelper.display({
      id: "select",
      header: ({ table }) => (
        <div className="text-left">
          <IndeterminateCheckbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div>
          <IndeterminateCheckbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </div>
      ),
    }),
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
              {row.getIsExpanded() && (
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
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

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
      <thead className="font-medium text-neutral-900">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="p-4">
                {header.isPlaceholder ? null : (
                  <>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
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
