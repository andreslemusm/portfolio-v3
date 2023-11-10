import { Button } from "~/components/button";
import { Container } from "~/components/container";
import { Fragment } from "react";
import clsx from "clsx";
import { generateMetaTags } from "~/utils/meta-tags";
import { socialNetworks } from "~/utils/constants";
import { Briefcase, DownloadCloud } from "lucide-react";
import type { HeadersFunction, MetaFunction } from "@vercel/remix";
import {
  barcelona,
  carrierAssure,
  cartagena,
  fithub,
  fluidAttacks,
  leanGroup,
  paris,
  seville,
  zipaquira,
} from "~/assets";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=1, stale-while-revalidate=31536000",
});

const meta: MetaFunction = () =>
  generateMetaTags({
    title: "Andres Lemus",
    description: "Front-end Engineer",
  });

const Home = (): React.ReactElement => (
  <Fragment>
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Front-end engineer, and amateur traveler.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m Andres, a front-end engineer based in Medellin 🇨🇴. I&apos;m
          the lead front-end engineer of{" "}
          <a
            href="https://www.carrierassure.com/"
            className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            target="_blank"
            rel="noreferrer"
          >
            Carrier Assure
          </a>
          , where we develop technologies that empower companies or individuals
          to predict how a carrier will transport its goods.
        </p>
        <div className="mt-6 flex gap-6">
          {socialNetworks.map((socialNetwork) => (
            <a
              key={socialNetwork.label}
              href={socialNetwork.href}
              className="group -m-1 p-1"
              aria-label={`Follow on ${socialNetwork.label}`}
              target="_blank"
              rel="noreferrer"
            >
              <socialNetwork.icon className="h-5 w-5 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </a>
          ))}
        </div>
      </div>
    </Container>
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[zipaquira, seville, cartagena, paris, barcelona].map(
          (image, imageIndex) => (
            <div
              key={image}
              className={clsx(
                "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
                rotations[imageIndex % rotations.length],
              )}
            >
              <img
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ),
        )}
      </div>
    </div>
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            More coming soon...
          </p>
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <Briefcase className="h-5 w-5 flex-none" />
              <span className="ml-4">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
              {resume.map((role) => (
                <li key={role.company} className="flex gap-4">
                  <div className="mt-1 grid h-10 w-10 flex-none place-items-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img src={role.logo} alt="" className="h-7 w-7" />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {role.company}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                      {role.title}
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label={`${role.start} until ${
                        typeof role.end === "string" ? role.end : role.end.label
                      }`}
                    >
                      <time dateTime={role.start}>{role.start}</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time
                        dateTime={
                          typeof role.end === "string"
                            ? role.end
                            : role.end.dateTime.toString()
                        }
                      >
                        {typeof role.end === "string"
                          ? role.end
                          : role.end.label}
                      </time>
                    </dd>
                  </dl>
                </li>
              ))}
            </ol>
            <Button
              as="anchor"
              href="/cv.pdf"
              variant="secondary"
              className="group mt-6 w-full"
              download
            >
              Download CV
              <DownloadCloud className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-600 group-active:text-zinc-600 dark:group-hover:text-zinc-50 dark:group-active:text-zinc-50" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </Fragment>
);

const resume = [
  {
    company: "Carrier Assure (LSG Client)",
    title: "Lead Front-end Engineer",
    logo: carrierAssure,
    start: "Nov 2021",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: "Lean Solutions Group",
    title: "Lead Front-end Engineer",
    logo: leanGroup,
    start: "Feb 2021",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: "FitHub",
    title: "Front-end Engineer",
    logo: fithub,
    start: "Sep 2020",
    end: "Jan 2021",
  },
  {
    company: "Fluid Attacks",
    title: "Software Engineer",
    logo: fluidAttacks,
    start: "May 2019",
    end: "Aug 2020",
  },
];

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

export { meta, headers };
export default Home;