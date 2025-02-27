import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Breadcrumb } from "../Breadcrumb";

const AdminHeader = () => {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/products" },
  ];

  return (
    <div className="sticky top-0 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-2 px-6 py-4">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex cursor-pointer items-center gap-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/244b/0d6d/289af22fed6ceccf3204c8bef906a212?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZLDt-V0kk4g~TBc6v0E93XUw3qrlAf3a5dDRDiiBURj2cQsXgl2VVHK0jhNZdN5XpdZeQZWc9QAOx7ikY8R8E-W6mVI77TG6nCFXJQPVNcOcbGoNzfX7bOIsOd2S6vaFs2D1mbdEkF9V4PiCUCp0KwsbLWnUpua~VXfE1runiro0~hoQbXSnZfqQko9sDCuzOan7cWahJnL4HM4-lKbOuF28ALQohHXjxt3P03f-AUzqULsZEZEPqm5pubdy6-m5yKqul42plVxK7kjly1omuu5tH3lMcGxyDwA5ZC5Z34HqDaLE0atLkFqcjK1FyjVtXtV~qga5TbWvX7eh-BgC4Q__"
            alt="avatar"
            className="size-9 rounded-full object-cover"
          />
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#333]">Nguyễn Chí Toàn</span>
            <MdOutlineKeyboardArrowDown size={24} className="text-[#999]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
