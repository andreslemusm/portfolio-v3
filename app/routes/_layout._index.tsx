import { Button } from "~/components/button";
import { Container } from "~/components/container";
import { Fragment } from "react";
import { cacheHeader } from "pretty-cache-header";
import { generateMetaTags } from "~/utils/meta-tags";
import { socialNetworks } from "~/utils/constants";
import { BriefcaseIcon, DownloadCloudIcon } from "~/assets/icons/";
import type { HeadersFunction, MetaFunction } from "react-router";
import { fithub, fluidAttacks, leanTech, sublime } from "~/assets/images";

const headers: HeadersFunction = () => ({
  "Cache-Control": cacheHeader({
    public: true,
    maxAge: "1m",
    staleWhileRevalidate: "1month",
  }),
});

const meta: MetaFunction = () =>
  generateMetaTags({
    title: "Andres Lemus Madrid",
    description: "Frontend Engineer",
  });

const Home = () => (
  <Fragment>
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Frontend Engineer
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Hi, I&apos;m Andres, a frontend engineer based in Medellín, Colombia.
          Currently, I&apos;m leading frontend development at{" "}
          <a
            href="https://sublime.app/"
            className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            target="_blank"
            rel="noreferrer"
          >
            Sublime
          </a>
          , where we&apos;re building an innovative platform for collecting and
          connecting digital content in meaningful ways.
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
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div />
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <BriefcaseIcon className="h-5 w-5 flex-none" />
              <span className="ml-4">Professional Experience</span>
            </h2>
            <ol className="mt-6 space-y-4">
              {resume.map((role) => (
                <li key={role.company} className="flex gap-4">
                  <div className="mt-1 grid h-10 w-10 flex-none place-items-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img
                      src={role.logo}
                      alt={`${role.company} logo`}
                      className="h-7 w-7"
                    />
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
              href="/resume.pdf"
              variant="secondary"
              className="group mt-6 w-full"
              download
            >
              Download Resume
              <DownloadCloudIcon className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-600 group-active:text-zinc-600 dark:group-hover:text-zinc-50 dark:group-active:text-zinc-50" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </Fragment>
);

const resume = [
  {
    company: "Sublime",
    title: "Senior Frontend Engineer",
    logo: sublime,
    start: "Apr 2023",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: "Lean Tech",
    title: "Lead Frontend Engineer",
    logo: leanTech,
    start: "Feb 2021",
    end: "Mar 2023",
  },
  {
    company: "FitHub",
    title: "Frontend Engineer",
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

export { meta, headers };
export default Home;
