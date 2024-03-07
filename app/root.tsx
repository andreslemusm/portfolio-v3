/* eslint-disable import/group-exports
  --
  Vercel's config requires to be exported on its own, so we can't group all the exports together.
*/
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";
import styles from "./tailwind.css?url";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

const links: LinksFunction = () => [
  // Favicons
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
  // Stylesheets
  { rel: "stylesheet", href: styles },
];

const Layout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" className="h-full antialiased">
    <head>
      <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      <Meta />
      <Links />
    </head>
    <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
      {children}
      <ScrollRestoration />
      <Scripts />
      <Analytics />
    </body>
  </html>
);

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

const App = () => <Outlet />;

export const config = { runtime: "edge" };

export { Layout, links };
export default App;
