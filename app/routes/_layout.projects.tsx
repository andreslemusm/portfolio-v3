import { SimpleLayout } from "~/components/simple-layout";
import { cacheHeader } from "pretty-cache-header";
import { generateMetaTags } from "~/utils/meta-tags";
import type { HeadersFunction, MetaFunction } from "react-router";
import { LinkIcon, OttomotoIcon, RMDBIcon } from "~/assets/icons";
import { carrierAssure, fithub, sublime } from "~/assets/images";

const headers: HeadersFunction = () => ({
  "Cache-Control": cacheHeader({
    public: true,
    maxAge: "1m",
    staleWhileRevalidate: "1month",
  }),
});

const meta: MetaFunction = () =>
  generateMetaTags({
    title: "Projects - Andres Lemus Madrid",
    description:
      "I'm proud of the projects I've worked on and excited to share them with you.",
  });

const Projects = () => (
  <SimpleLayout
    title="I'm proud of the projects I've worked on and excited to share them with you."
    intro="You'll find a selection of projects that showcase my skills and experience in frontend development. I've worked on various types of projects, including e-commerce sites, web applications, and online platforms."
  >
    <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li
          className="group relative flex flex-col items-start"
          key={project.name}
        >
          {project.logo}
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
            <a href={project.link.href} target="_blank" rel="noreferrer">
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
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

const projects = [
  {
    name: "Sublime",
    description: "Experience a calmer, more human Internet.",
    link: {
      href: "https://sublime.app",
      label: "sublime.app",
    },
    logo: (
      <img
        src={sublime}
        className="relative z-10 -ml-1.5 h-12 w-12 shrink-0"
        alt="Abstract S"
      />
    ),
  },
  {
    name: "Carrier Assure",
    description:
      "The first carrier performance scoring software that analyzes data to help find the best carrier for you.",
    link: {
      href: "https://carrierassure.com",
      label: "carrierassure.com",
    },
    logo: (
      <img
        src={carrierAssure}
        className="relative z-10 -ml-1 h-12 w-12 shrink-0"
        alt="Blue circle with a white CA in the middle"
      />
    ),
  },
  {
    name: "Ottomoto",
    description:
      "Streamline automotive financing processes. Gives dealers access to more lenders and closes deals faster.",
    link: {
      href: "https://ottomoto.net",
      label: "ottomoto.net",
    },
    logo: (
      <OttomotoIcon
        role="img"
        aria-label="Navy O, orange M, and a trademark symbol"
        className="relative z-10 h-12 w-24 shrink-0"
      />
    ),
  },
  {
    name: "FitHub",
    description: "The one-stop shop for healthy products.",
    link: {
      href: "https://fithub.com.co",
      label: "fithub.com.co",
    },
    logo: (
      <img
        src={fithub}
        className="relative z-10 -ml-1.5 h-12 w-auto shrink-0"
        alt="Orange map marker"
      />
    ),
  },
  {
    name: "RMDB",
    description: "Browse and discover movies.",
    link: {
      href: "https://rmdb.andreslemusm.com",
      label: "rmdb.andreslemusm.com",
    },
    logo: (
      <RMDBIcon
        role="img"
        aria-label="Black square with a white RMDB in the middle"
        className="relative z-10 h-12 w-auto shrink-0"
      />
    ),
  },
];

export { headers, meta };
export default Projects;
