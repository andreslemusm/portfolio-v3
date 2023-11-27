import { clamp } from "~/utils/formatters";
import clsx from "clsx";
import { profilePicture } from "~/assets/images";
import { ChevronIcon, MoonIcon, SunIcon, XIcon } from "~/assets/icons";
import {
  Container,
  InnerContainer,
  OuterContainer,
} from "~/components/container";
import { Fragment, useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "@remix-run/react";
import { Popover, Transition } from "@headlessui/react";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const avatarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    const downDelay = avatarRef.current?.offsetTop ?? 0;
    const upDelay = 64;

    const setProperty = (property: string, value: string | null) => {
      document.documentElement.style.setProperty(property, value);
    };
    const removeProperty = (property: string) => {
      document.documentElement.style.removeProperty(property);
    };

    const updateHeaderStyles = () => {
      if (!headerRef.current) throw Error("headerRef is not assigned");
      const { top, height } = headerRef.current.getBoundingClientRect();
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      );

      if (isInitial.current) {
        setProperty("--header-position", "sticky");
      }

      setProperty("--content-offset", `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`);
        setProperty("--header-mb", `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`);
        setProperty("--header-mb", `${height - offset}px`);
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`);
        setProperty("--header-mb", `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty("--header-inner-position", "fixed");
        removeProperty("--header-top");
        removeProperty("--avatar-top");
      } else {
        removeProperty("--header-inner-position");
        setProperty("--header-top", "0px");
        setProperty("--avatar-top", "0px");
      }
    };

    const updateAvatarStyles = () => {
      if (!isHomePage) {
        return;
      }

      const fromScale = 1;
      const toScale = 36 / 64;
      const fromX = 0;
      const toX = 2 / 16;

      const scrollY = downDelay - window.scrollY;

      const scale = clamp(
        (scrollY * (fromScale - toScale)) / downDelay + toScale,
        fromScale,
        toScale,
      );

      const x = clamp((scrollY * (fromX - toX)) / downDelay + toX, fromX, toX);

      setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      );

      const borderScale = 1 / (toScale / scale);
      const borderX = (-toX + x) * borderScale;
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty("--avatar-border-transform", borderTransform);
      setProperty("--avatar-border-opacity", scale === toScale ? "1" : "0");
    };

    const updateStyles = () => {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    };

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("scroll", updateStyles);
      window.removeEventListener("resize", updateStyles);
    };
  }, [isHomePage]);

  return (
    <Fragment>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        {/* Header */}
        <header
          className="pointer-events-none relative z-50 flex flex-col"
          style={{
            height: "var(--header-height)",
            marginBottom: "var(--header-mb)",
          }}
        >
          {isHomePage ? (
            <Fragment>
              <div
                ref={avatarRef}
                className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
              />
              <Container
                className="top-0 order-last -mb-3 pt-3"
                style={{
                  position:
                    "var(--header-position)" as React.CSSProperties["position"],
                }}
              >
                <div
                  className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                  style={{
                    position:
                      "var(--header-inner-position)" as React.CSSProperties["position"],
                  }}
                >
                  <div className="relative">
                    <div
                      className="absolute left-0 top-3 h-10 w-10 origin-left rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition-opacity dark:bg-zinc-800/90 dark:ring-white/10"
                      style={{
                        opacity: "var(--avatar-border-opacity, 0)",
                        transform: "var(--avatar-border-transform)",
                      }}
                    />
                    <Avatar
                      className="block h-16 w-16 origin-left"
                      style={{ transform: "var(--avatar-image-transform)" }}
                      large
                    />
                  </div>
                </div>
              </Container>
            </Fragment>
          ) : null}
          <div
            ref={headerRef}
            className="top-0 z-10 h-16 pt-6"
            style={{
              position:
                "var(--header-position)" as React.CSSProperties["position"],
            }}
          >
            <Container
              className="top-[var(--header-top,theme(spacing.6))] w-full"
              style={{
                position:
                  "var(--header-inner-position)" as React.CSSProperties["position"],
              }}
            >
              <div className="relative flex gap-4">
                <div className="flex flex-1">
                  {!isHomePage ? (
                    <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                      <Avatar />
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-1 justify-end md:justify-center">
                  {/* Mobile Navigation */}
                  <Popover className="pointer-events-auto md:hidden">
                    <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                      Menu
                      <ChevronIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                    </Popover.Button>
                    <Transition.Root>
                      <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
                      </Transition.Child>
                      <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="scale-95 opacity-0"
                        enterTo="scale-100 opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="scale-100 opacity-100"
                        leaveTo="scale-95 opacity-0"
                      >
                        <Popover.Panel
                          focus
                          className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                        >
                          <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button
                              aria-label="Close menu"
                              className="-m-1 p-1"
                            >
                              <XIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                            </Popover.Button>
                            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                              Navigation
                            </h2>
                          </div>
                          <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                              {paths.map((path) => (
                                <li key={path}>
                                  <Popover.Button
                                    as={Link}
                                    to={`/${path}`}
                                    className="block py-2 capitalize"
                                    prefetch="intent"
                                  >
                                    {path}
                                  </Popover.Button>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </Popover.Panel>
                      </Transition.Child>
                    </Transition.Root>
                  </Popover>
                  {/* End Mobile Navigation */}
                  {/* DesktopNavigation */}
                  <nav className="pointer-events-auto hidden md:block">
                    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      {paths.map((path) => (
                        <li key={path}>
                          <NavLink
                            to={`/${path}`}
                            className={({ isActive }) =>
                              clsx(
                                "relative block px-3 py-2 capitalize transition",
                                isActive
                                  ? "text-teal-500 dark:text-teal-400"
                                  : "hover:text-teal-500 dark:hover:text-teal-400",
                              )
                            }
                            prefetch="intent"
                          >
                            {({ isActive }) => (
                              <Fragment>
                                {path}
                                {isActive ? (
                                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                                ) : null}
                              </Fragment>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  {/* End Desktop Navigation */}
                </div>
                <div className="flex justify-end md:flex-1">
                  <div className="pointer-events-auto">
                    <button
                      type="button"
                      aria-label="Toggle dark mode"
                      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      onClick={() => {
                        // Disable transitions temporarily
                        document.documentElement.classList.add(
                          "[&_*]:!transition-none",
                        );
                        window.setTimeout(() => {
                          document.documentElement.classList.remove(
                            "[&_*]:!transition-none",
                          );
                        }, 0);

                        const darkModeMediaQuery = window.matchMedia(
                          "(prefers-color-scheme: dark)",
                        );
                        const isSystemDarkMode = darkModeMediaQuery.matches;
                        const isDarkMode =
                          document.documentElement.classList.toggle("dark");

                        if (isDarkMode === isSystemDarkMode) {
                          return window.localStorage.removeItem("isDarkMode");
                        }

                        return window.localStorage.setItem(
                          "isDarkMode",
                          isDarkMode.toString(),
                        );
                      }}
                    >
                      <SunIcon className="h-5 w-5 text-teal-400 transition group-hover:text-teal-500 dark:hidden" />
                      <MoonIcon className="hidden h-5 w-5 text-zinc-700 transition group-hover:text-zinc-500 dark:block" />
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </header>
        {isHomePage ? (
          <div style={{ height: "var(--content-offset)" }} />
        ) : null}
        {/* End Header */}
        <main>
          <Outlet />
        </main>
        {/* Footer */}
        <footer className="mt-32">
          <OuterContainer>
            <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <InnerContainer>
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="flex gap-6 text-sm ">
                    {paths.map((path) => (
                      <Link
                        key={path}
                        to={`/${path}`}
                        prefetch="intent"
                        className="font-medium capitalize text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
                      >
                        {path}
                      </Link>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    &copy; {new Date().getFullYear()} Andres Lemus Madrid. All
                    rights reserved.
                  </p>
                </div>
              </InnerContainer>
            </div>
          </OuterContainer>
        </footer>
        {/* End Footer */}
      </div>
    </Fragment>
  );
};

type AvatarProps = {
  large?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Avatar = ({ large = false, className, style }: AvatarProps) => (
  <Link
    to="/"
    aria-label="Home"
    className={clsx(className, "pointer-events-auto")}
    style={style}
    prefetch="intent"
  >
    <img
      src={profilePicture}
      alt=""
      sizes={large ? "4rem" : "2.25rem"}
      className={clsx(
        "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
        large ? "h-16 w-16" : "h-9 w-9",
      )}
    />
  </Link>
);

const paths = ["about", "projects", "blog"];

export default Layout;
