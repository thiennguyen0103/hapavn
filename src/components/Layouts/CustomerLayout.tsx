import { FC } from "react";
import { Outlet } from "react-router-dom";
import AppMenu from "../AppMenu/AppMenu";
import CustomerSidebar from "../Sidebar/CustomerSidebar";

const CustomerLayout: FC = () => {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#F3F5F7]">
      <CustomerSidebar />
      <div className="flex-1 pb-[43px] md:ml-[220px] md:pb-0">
        <div>
          <Outlet />
        </div>
      </div>
      <AppMenu />
    </main>
  );
};

export default CustomerLayout;
