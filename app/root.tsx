import styles from "./styles/index.output.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

const meta: MetaFunction = () => ({
  charSet: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  // Primary Meta Tags
  title: "Hi, I'm Andres Lemus. I build things with React.",
  description: "Come check out Andres Lemus' home on the internet.",
  //  Open Graph / Facebook
  "og:type": "website",
  "og:url": "https://andreslemus.dev/",
  "og:title": "Hi, I'm Andres Lemus. I build things with React.",
  "og:description": "Come check out Andres Lemus' home on the internet.",
  "og:image": "/preview.png",
  // Colors
  "theme-color": "#ffffff",
  "msapplication-TileColor": "#ffffff",
});

const links: LinksFunction = () => [
  // Favicons
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
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
  {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#101010",
  },
  // Stylesheets
  { rel: "stylesheet", href: styles },
  /* Museo Sans Rounded 100, 300, 700 */
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
  },
];

const App = (): React.ReactElement => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-900 font-sans text-gray-400 antialiased">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export { links, meta };
export default App;
