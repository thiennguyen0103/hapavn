import { FC, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { customerNavSidebar } from "../../configs/nav.config";
import { HapavnLogo, Money } from "../../lib/assets";
import { cn } from "../../lib/utils";

const CustomerSidebar: FC = () => {
  const { pathname } = useLocation();

  return (
    <aside className="fixed inset-y-0 left-0 hidden h-screen w-[220px] flex-col bg-white shadow-md md:flex">
      <div className="flex h-16 w-full items-center justify-center px-2 py-4">
        <HapavnLogo />
      </div>
      <div className="flex items-center gap-1 px-2 py-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/8849/d57d/e2abdafe9c9eef283cdda0366a953d84?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ncz0OQtPqge64xNtL6fVM5oT4mItVRbXyCu-GeKFnzqZH3~bP3YR6cZ2A07skQEmH57gXfQCgzX8J9rdrYj3k4qSd7c25x~URHongMnpW6FaYpHeJxp0kjmYHTfaWNA5RFt3KabkbUGXaove1bCz6kJTEOnQa6VN~H7NRCBBf9OVHGy2ouh2Jt6MdL6unEAlYJ9~xVN7lhcBqM7qbII9Lzq4gHEsLsDn8rpuSCmI6UM8S8WICg3KV6h0UzVV9MVhayepx3IjbjOzgxCPLJcF6MfVaNhcpbYp9r~DslF63WTkkdchTZ6gllAuYYjSFKjmavYCVOlAuUmppTj-k9mQPQ__"
          className="size-10 rounded-full"
        />
        <p className="font-bold text-[#333]">Nguyễn Huỳnh Như</p>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {customerNavSidebar.map((item) => {
          const { icon, name, path } = item;
          const Icon = icon || Fragment;
          return (
            <Link
              to={path}
              className={cn(
                "flex items-center gap-2 p-2",
                pathname === path && "rounded-xl bg-[#F0F9FE] text-[#0076DC]",
              )}
            >
              <Icon className="size-5" />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-4 rounded-xl bg-[#FFF8D4] p-4">
          <Money />
          <div className="text-[13px] font-light text-[#333]">
            <p>Tổng điểm tích lũy:</p>
            <div className="space-x-1">
              <data value="187000" className="text-[20px] font-bold">
                187.000
              </data>
              <span>điểm</span>
            </div>
          </div>
        </div>
        <div className="text-center text-xs font-light text-[#999]">
          Hotline: 0977.190.775
        </div>
      </div>
    </aside>
  );
};

export default CustomerSidebar;
