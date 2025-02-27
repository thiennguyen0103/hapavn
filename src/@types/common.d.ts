import { IconType } from "react-icons";

type TNavSidebar = {
  name: string;
  icon?:
    | IconType
    | FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string;
          titleId?: string;
          desc?: string;
          descId?: string;
        }
      >;
  path: string;
  children?: TNavSidebar[];
};

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};
