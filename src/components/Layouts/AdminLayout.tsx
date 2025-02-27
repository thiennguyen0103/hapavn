import { FC } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../Header/AdminHeader";
import { AdminSidebar } from "../Sidebar";

const AdminLayout: FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#F3F5F7]">
      <AdminSidebar />
      <div className="ml-[240px] flex-1">
        <AdminHeader />
        <div className="px-6 py-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
