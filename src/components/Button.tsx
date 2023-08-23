import { VariantProps, cva } from 'class-variance-authority';
import React, { forwardRef, Ref } from 'react';
import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

const buttonVariants = cva(
  'px-10 py-3 rounded-full font-semibold flex items-center gap-2',
  {
    variants: {
      variant: {
        default: 'bg-main text-white hover:bg-main hover:brightness-95',
        secondary: 'text-main border-main border-2 font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button(
  { className, children, color, variant, ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      ref={ref}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default forwardRef<HTMLButtonElement, ButtonProps>(Button);
