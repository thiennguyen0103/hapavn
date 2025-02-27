import { useState } from "react";
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import { MdFilterAlt } from "react-icons/md";

type FilterProps = {
  onBrandChange: (brand: string) => void;
  onOtherFilters: () => void;
};

const Filter: React.FC<FilterProps> = ({
  onBrandChange,
  onOtherFilters,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedBrand(selected);
    onBrandChange(selected);
  };

  return (
    <div className="flex items-center p-4">
      {/* Search Bar */}

      <div className="relative w-[420px]">
        <IoMdSearch
          size={24}
          className="absolute top-1/2 left-2 -translate-y-1/2 text-[#999]"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Tìm theo tên Sản phẩm gốc, Mã SKU sản phẩm"
          className="h-9 w-full border border-[#E8EAEB] pr-4 pl-10 text-sm text-[#333] placeholder:text-sm focus:outline-none"
        />
      </div>

      {/* Brand Filter Dropdown */}
      <div className="relative w-[180px]">
        <IoMdArrowDropdown
          size={24}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-[#999]"
        />
        <select
          value={selectedBrand}
          onChange={handleBrandChange}
          className="h-9 w-full cursor-pointer appearance-none border border-[#E8EAEB] px-4 text-sm text-[#333] focus:outline-none"
        >
          <option value="">Thương hiệu</option>
          <option value="brand1">Thương hiệu 1</option>
          <option value="brand2">Thương hiệu 2</option>
          <option value="brand3">Thương hiệu 3</option>
        </select>
      </div>

      {/* Other Filters Button */}
      <button
        onClick={onOtherFilters}
        className="inline-flex h-9 w-[130px] cursor-pointer items-center border border-[#E8EAEB] px-2 text-[#333]"
      >
        <span className="text-sm">Bộ lọc khác</span>
        <MdFilterAlt size={24} className="ml-4 text-[#999]" />
      </button>
    </div>
  );
};

export default Filter;
