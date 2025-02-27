import { FC, useState } from "react";
import { Tab } from "../../@types/common";
import { cn } from "../../lib/utils";

interface TOrderTabsProps {
  tabs: Tab[];
}

const OrderTabs: FC<TOrderTabsProps> = ({ tabs }) => {
  const [activeTab] = useState<string>(tabs[0].id);

  return (
    <div className="w-full">
      <div className="flex w-fit">
        {tabs.map(({ label, id }) => (
          <button
            key={label}
            className={cn(
              "relative cursor-pointer rounded-tl-2xl rounded-tr-2xl bg-[#E8EAEB] px-6 py-4 text-lg font-bold text-[#666] transition-all duration-300",
              activeTab === id && "bg-white text-[#0076DC]",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="animate-fade-in">
                {tab.content}
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default OrderTabs;
