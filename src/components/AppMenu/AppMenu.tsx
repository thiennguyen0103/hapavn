import { Link } from "react-router-dom";
import { customerMobileNavSidebar } from "../../configs/nav.config";

const AppMenu = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 w-full bg-white shadow-2xl md:hidden">
      <div className="grid grid-cols-5">
        {customerMobileNavSidebar.map((item) => {
          const Icon = item.icon;
          return (
            <Link to={item.path} key={item.path}>
              <div className="flex flex-col items-center p-1">
                <Icon className="size-5" />
                <span className="text-center text-[10px] font-light">
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AppMenu;
