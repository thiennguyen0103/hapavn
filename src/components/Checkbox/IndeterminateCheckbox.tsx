import { FC, HTMLProps, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

type TIndeterminateCheckboxProps = {
  indeterminate?: boolean;
} & HTMLProps<HTMLInputElement>;

const IndeterminateCheckbox: FC<TIndeterminateCheckboxProps> = ({
  indeterminate,
  className = "",
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={cn(
        "h-4 w-4 cursor-pointer rounded-sm border-[#999]",
        className,
      )}
      {...rest}
    />
  );
};

export default IndeterminateCheckbox;
