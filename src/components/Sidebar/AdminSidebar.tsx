import { FC, Fragment } from "react";
import { RiMore2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { adminNavSidebar } from "../../configs/nav.config";
import { Logo } from "../../lib/assets";
import { Collapse } from "../Collapse";

const AdminSidebar: FC = () => {
  return (
    <aside className="fixed inset-y-0 left-0 h-screen w-[240px] bg-[#263A53]">
      <div className="flex h-16 w-full items-center justify-between px-2 py-4">
        <Logo />
        <div className="cursor-pointer p-2">
          <RiMore2Fill size={24} className="text-white" />
        </div>
      </div>
      <nav className="h-[calc(100vh-64px)] overflow-y-auto px-2 py-4">
        {adminNavSidebar.map((item) => {
          const { icon, name } = item;
          const Icon = icon || Fragment;
          return item.children ? (
            <Collapse
              key={name}
              title={
                <Link
                  to={item.path}
                  className="flex items-center gap-2 py-2 text-white"
                >
                  <Icon className="size-6" />
                  <span className="flex-1">{name}</span>
                </Link>
              }
              items={item.children}
            />
          ) : (
            <Link
              key={name}
              to={item.path}
              className="flex items-center gap-2 py-2 text-white"
            >
              <Icon size={24} />
              <span className="flex-1">{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
