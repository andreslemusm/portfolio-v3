import { BrandIcon } from "~/assets";
import { Fragment } from "react";
import { classNames } from "~/utils/formatters";
import { socialNetworks } from "~/utils/constants";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link, NavLink, Outlet } from "@remix-run/react";
import { Popover, Transition } from "@headlessui/react";

const myMail = "mailto:aclmadrid04@gmail.com";

const navItems = ["home", "blog", "about"];

const Layout = (): React.ReactElement => (
  <div className="container mx-auto px-5">
    <header className="flex items-center justify-between py-10">
      <Link to="/" className="relative" aria-label="Home" prefetch="intent">
        <BrandIcon className="relative z-10 h-14 w-14 text-[#1092ba] mix-blend-difference md:h-20 md:w-20" />
        {gradientAnimation}
      </Link>
      {/* Navigation */}
      <Popover as="div" className="md:hidden">
        <Popover.Button as={Fragment}>
          <button aria-label="Open navigation menu" />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition"
          >
            {({ close }) => (
              <div className="overflow-hidden rounded-lg bg-gray-800 shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <BrandIcon className="h-8 w-auto" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button as={Fragment}>
                      <button
                        // icon={HiX}
                        aria-label="Close navigation menu"
                      />
                    </Popover.Button>
                  </div>
                </div>
                <div className="my-5 space-y-1 px-2">
                  {navItems.map((navItem) => (
                    <NavLink
                      key={navItem}
                      to={navItem === "home" ? "/" : `/${navItem}`}
                      prefetch="intent"
                      className={({ isActive }) =>
                        classNames(
                          "block rounded-md px-2 py-2 text-sm capitalize transition",
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        )
                      }
                    >
                      {navItem}
                    </NavLink>
                  ))}
                  <Popover.Button
                    as="a"
                    href={myMail}
                    className="block rounded-md px-2 py-2 text-sm text-green-300 transition hover:bg-green-300 hover:bg-opacity-5 hover:text-green-400"
                  >
                    Contact
                  </Popover.Button>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="hidden items-center gap-x-5 md:flex">
        {navItems.map((navItem) => (
          <NavLink
            key={navItem}
            to={navItem === "home" ? "/" : `/${navItem}`}
            prefetch="intent"
            className={({ isActive }) =>
              classNames(
                "inline-flex items-center justify-center rounded-sm border border-transparent px-3 py-2 text-sm capitalize leading-4 transition focus:outline-none focus:ring-2 focus:ring-green-300",
                isActive ? "text-green-300" : "text-white hover:text-green-300"
              )
            }
          >
            {navItem}
          </NavLink>
        ))}
        <a
          href={myMail}
          className="rounded-sm border border-green-300 px-3 py-2 text-sm text-green-300 transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Get in touch
        </a>
      </div>
    </header>

    <main className="px-1 md:px-2">
      <Outlet />
    </main>

    <footer className="flex flex-col items-center gap-y-5 pt-20 pb-12 md:flex-row md:justify-between">
      <p className="text-center">
        © {new Date().getFullYear()} Andres Lemus. All rights reserved.
      </p>
      <div className="order-first flex gap-x-5 md:order-last">
        <a
          href={socialNetworks.twitter}
          className="hover:text-green-300"
          aria-label="Andres Lemus's Twitter"
        >
          <AiOutlineTwitter className="h-6 w-6" />
        </a>
        <a
          href={socialNetworks.github}
          className="hover:text-green-300"
          aria-label="Andres Lemus's GitHub"
        >
          <AiOutlineGithub className="h-6 w-6 " />
        </a>
        <a
          href={socialNetworks.linkedin}
          className="hover:text-green-300"
          aria-label="Andres Lemus's LinkedIn"
        >
          <AiFillLinkedin className="h-6 w-6" />
        </a>
      </div>
    </footer>
  </div>
);

const gradientAnimation = (
  <div className="absolute inset-0 z-0">
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-full w-full overflow-visible"
    >
      <defs>
        <radialGradient
          id="Gradient1"
          cx="50%"
          cy="50%"
          fx="0.441602%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="34s"
            values="0%;3%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stopColor="rgba(255, 0, 0, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
        </radialGradient>
        <radialGradient
          id="Gradient2"
          cx="50%"
          cy="50%"
          fx="2.68147%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="23.5s"
            values="0%;3%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
        </radialGradient>
        <radialGradient
          id="Gradient3"
          cx="50%"
          cy="50%"
          fx="0.836536%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="21.5s"
            values="0%;3%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
          <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
        </radialGradient>
        <radialGradient
          id="Gradient4"
          cx="50%"
          cy="50%"
          fx="4.56417%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="23s"
            values="0%;5%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
          <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
        </radialGradient>
        <radialGradient
          id="Gradient5"
          cx="50%"
          cy="50%"
          fx="2.65405%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="24.5s"
            values="0%;5%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop>
          <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
        </radialGradient>
        <radialGradient
          id="Gradient6"
          cx="50%"
          cy="50%"
          fx="0.981338%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="25.5s"
            values="0%;5%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stopColor="rgba(255,0,255, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
        </radialGradient>
      </defs>
      <rect
        x="13.744%"
        y="1.18473%"
        width="100%"
        height="100%"
        fill="url(#Gradient1)"
        transform="rotate(334.41 50 50)"
        strokeDasharray="400"
        strokeDashoffset="400"
        style={{ strokeDashoffset: "0px" }}
      >
        <animate
          attributeName="x"
          dur="20s"
          values="25%;0%;25%"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          dur="21s"
          values="0%;25%;0%"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="7s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
      <rect
        x="-2.17916%"
        y="35.4267%"
        width="100%"
        height="100%"
        fill="url(#Gradient2)"
        transform="rotate(255.072 50 50)"
        strokeDasharray="400"
        strokeDashoffset="400"
        style={{ strokeDashoffset: "0px" }}
      >
        <animate
          attributeName="x"
          dur="23s"
          values="-25%;0%;-25%"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          dur="24s"
          values="0%;50%;0%"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="12s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
      <rect
        x="9.00483%"
        y="14.5733%"
        width="100%"
        height="100%"
        fill="url(#Gradient3)"
        transform="rotate(139.903 50 50)"
        strokeDasharray="400"
        strokeDashoffset="400"
        style={{ strokeDashoffset: "0px" }}
      >
        <animate
          attributeName="x"
          dur="25s"
          values="0%;25%;0%"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          dur="12s"
          values="0%;25%;0%"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 50 50"
          to="0 50 50"
          dur="9s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
    </svg>
  </div>
);

export default Layout;
