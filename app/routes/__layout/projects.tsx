import { Link as LinkIcon } from "lucide-react";
import { SimpleLayout } from "~/components/simple-layout";
import { generateMetaTags } from "~/utils/meta-tags";
import type { HeadersFunction, V2_MetaFunction } from "@remix-run/node";
import { OttomotoIcon, RMDBIcon } from "~/assets";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=1, stale-while-revalidate=31536000",
});

const meta: V2_MetaFunction = () =>
  generateMetaTags({
    title: "Projects | Andres Lemus",
    description:
      "I'm proud of the projects I've worked on and excited to share them with you.",
  });

const Projects = (): React.ReactElement => (
  <SimpleLayout
    title="I'm proud of the projects I've worked on and excited to share them with you."
    intro="You'll find a selection of projects that showcase my skills and experience in front-end development. I've worked on various types of projects, including e-commerce sites, web applications, and online platforms."
  >
    <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Ottomoto",
          description:
            "Platform design to make the car buying and selling process easier and more transparent for both buyers and sellers.",
          link: {
            href: "https:/ottomoto.net",
            label: "ottomoto.net",
          },
          logo: <OttomotoIcon className="relative z-10 h-12 w-24 shrink-0" />,
        },
        {
          name: "RMDB",
          description:
            "Web-based platform that allows users to browse and discover movies.",
          link: {
            href: "https://rmdb.andreslemusm.com",
            label: "rmdb.andreslemusm.com",
          },
          logo: <RMDBIcon className="relative z-10 h-12 w-auto shrink-0" />,
        },
      ].map((project) => (
        <li
          className="group relative flex flex-col items-start"
          key={project.name}
        >
          {project.logo}
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
          <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <LinkIcon className="h-4 w-4" />
            <span className="ml-2">{project.link.label}</span>
          </p>
        </li>
      ))}
    </ul>
  </SimpleLayout>
);

export { headers, meta };
export default Projects;
