import { FC, MouseEvent, ReactNode, useState } from "react";
import { IconBase } from "react-icons";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { TAdminNavSidebar } from "../../@types/common";
import { cn } from "../../lib/utils";

type TCollapseProps = {
  title: ReactNode;
  items: TAdminNavSidebar[];
};

const Collapse: FC<TCollapseProps> = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleShowContent = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <div className="relative text-white">
        {title}
        <div
          className="absolute top-1/2 right-0.5 -translate-y-1/2 cursor-pointer p-2"
          onClick={handleShowContent}
        >
          <MdKeyboardArrowDown size={24} />
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-2 py-2 text-white"
          >
            <IconBase size={24} />
            <span className="flex-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collapse;
