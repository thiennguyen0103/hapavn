import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../../lib/assets";

const CustomerHeader = () => {
  return (
    <header className="relative z-10 p-2 md:hidden">
      <div className="flex items-center justify-between gap-2">
        <Logo className="h-6" />
        <RxHamburgerMenu size={24} className="text-white" />
      </div>
    </header>
  );
};

export default CustomerHeader;
