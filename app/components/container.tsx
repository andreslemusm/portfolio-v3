import clsx from "clsx";
import { forwardRef } from "react";

const OuterContainer = forwardRef(
  (
    { className, children, ...props }: React.ComponentPropsWithoutRef<"div">,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
);
if (process.env.NODE_ENV === "development") {
  OuterContainer.displayName = "OuterContainer";
}

const InnerContainer = forwardRef(
  (
    { className, children, ...props }: React.ComponentPropsWithoutRef<"div">,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);
if (process.env.NODE_ENV === "development") {
  InnerContainer.displayName = "InnerContainer";
}

const Container = forwardRef(
  (
    { children, ...props }: React.ComponentPropsWithoutRef<"div">,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }
);
if (process.env.NODE_ENV === "development") {
  Container.displayName = "Container";
}

export { Container, InnerContainer, OuterContainer };
