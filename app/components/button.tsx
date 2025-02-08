import { Link } from "react-router";
import clsx from "clsx";

const variantStyles = {
  primary:
    "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
  secondary:
    "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70",
};

type BaseProps = {
  variant?: keyof typeof variantStyles;
};

type ButtonProps = {
  as?: "button";
} & React.ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  as: "anchor";
} & Omit<React.ComponentPropsWithoutRef<"a">, "type">;

type LinkProps = {
  as: "link";
} & Omit<React.ComponentProps<typeof Link>, "type">;

export const Button = ({
  variant = "primary",
  className,
  ...props
}: (ButtonProps | LinkProps | AnchorProps) & BaseProps) => {
  const calculatedClassName = clsx(
    "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className,
  );

  if (props.as === "anchor") {
    return (
      <a className={calculatedClassName} {...props}>
        {props.children}
      </a>
    );
  }

  if (props.as === "link") {
    return (
      <Link className={calculatedClassName} {...props}>
        {props.children}
      </Link>
    );
  }

  return <button className={calculatedClassName} {...props} />;
};
