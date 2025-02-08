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
      "A showcase of my most impactful projects in frontend development.",
  });

const Projects = () => (
  <SimpleLayout
    title="A showcase of my most impactful projects in frontend development."
    intro="Each project represents a unique challenge that I've tackled, demonstrating my expertise in creating intuitive user interfaces, optimizing performance, and delivering exceptional user experiences across various domains."
  >
    <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li
          className="group relative flex flex-col items-start"
          key={project.name}
        >
          {project.logo}
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
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
    description:
      "A revolutionary platform reimagining how we interact with digital content, designed to create a more focused and meaningful online experience.",
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
      "An innovative carrier performance scoring platform that leverages data analytics to optimize logistics partnerships and streamline carrier selection.",
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
      "A comprehensive automotive financing platform that revolutionizes dealership operations by expanding lender networks and accelerating deal closures.",
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
    description:
      "A curated marketplace connecting health enthusiasts with premium wellness products and nutritional supplements.",
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
    description:
      "An intuitive movie discovery platform featuring comprehensive film information and personalized recommendations.",
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
