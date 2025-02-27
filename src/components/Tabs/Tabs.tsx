import { FC, useState } from "react";
import { Tab } from "../../@types/common";
import { cn } from "../../lib/utils";

type TabsProps = {
  tabs: Tab[];
  onTabChange?: (tab: string) => void;
};

const Tabs: FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="flex border-b border-[#E8EAEB]">
        {tabs.map(({ label }) => (
          <button
            key={label}
            onClick={() => handleTabClick(label)}
            className={cn(
              "relative cursor-pointer p-4 text-sm font-medium transition-all duration-300",
              activeTab === label
                ? "after:bg-[#0076DC] text-[#0076DC] after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:w-full"
                : "text-gray-500",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div>
        {tabs.find(({ label }) => label === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
