import type { HeadersFunction } from "@remix-run/node";
import { Link as LinkIcon } from "lucide-react";
import { SimpleLayout } from "~/components/simple-layout";
import { rmdb } from "~/assets";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=1, stale-while-revalidate=31536000",
});

const Projects = (): React.ReactElement => (
  <SimpleLayout title="Projects" intro="Coming Soon...">
    <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "RMDB",
          description:
            "Website for exploring trending movies and searching for your favorite ones.",
          link: {
            href: "https://rmdb.andreslemusm.com",
            label: "rmdb.andreslemusm.com",
          },
          logo: rmdb,
        },
      ].map((project) => (
        <li
          className="group relative flex flex-col items-start"
          key={project.name}
        >
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img src={rmdb} className="h-10 w-10 text-zinc-50" alt="" />
          </div>
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
            <a href={project.link.href} target="_blank" rel="noreferrer">
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{project.name}</span>
            </a>
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{project.link.label}</span>
          </p>
        </li>
      ))}
    </ul>
  </SimpleLayout>
);

export { headers };
export default Projects;
