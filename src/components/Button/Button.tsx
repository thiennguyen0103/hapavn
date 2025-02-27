import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#0076DC] text-white shadow hover:bg-primary/90",
        ghost: "",
      },
      size: {
        default: "px-5 py-2.5",
        sm: "px-4.5 py-2",
        lg: "px-5 py-3",
        icon: "p-2.5"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button: FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;
