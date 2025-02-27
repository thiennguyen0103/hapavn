import { FC, ReactNode } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type TBreadcrumbProps = {
  items: { href: string; label: ReactNode }[];
};

const Breadcrumb: FC<TBreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-sm text-[#999]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <Link
            to={item.href}
            className={cn(index === items.length - 1 && "text-[#333]")}
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <MdKeyboardArrowRight className="mx-2 h-4 w-4 text-[#999]" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
