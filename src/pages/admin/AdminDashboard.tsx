import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Tabs } from "../../components";
import Filter from "../../components/Filter/Filter";
import ProductTable from "../../components/Table/ProductTable";

const AdminDashboard: FC = () => {
  const handleBrandChange = (brand: string) => {
    console.log("Selected Brand:", brand);
  };

  const handleOtherFilters = () => {
    console.log("Show other filters");
  };
  const tabData = [
    {
      id: "1",
      label: "Tất cả",
      content: (
        <div>
          <Filter
            onBrandChange={handleBrandChange}
            onOtherFilters={handleOtherFilters}
          />
          <ProductTable />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Sản phẩm</h1>
        <Button size="sm">
          <AiOutlinePlus />
          <span>Tạo mới</span>
        </Button>
      </div>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default AdminDashboard;
