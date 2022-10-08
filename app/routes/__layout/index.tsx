import { Container } from "~/components/container";
import { socialNetworks } from "~/utils/constants";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=0, stale-while-revalidate, s-maxage=86400",
});

const meta: MetaFunction = () => ({
  title: "Andres Lemus - Front-end engineer, and amateur traveler",
  description:
    "I'm Andres Lemus, a front-end engineer based in Medellin 🇨🇴. I'm the lead front-end engineer of Carrier Assure, where we develop technologies that empower companies or individuals to predict how a carrier will transport its goods",
});

const Home = (): React.ReactElement => (
  <Container className="mt-9">
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Front-end engineer, and amateur traveler.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I&apos;m Andres, a front-end engineer based in Medellin 🇨🇴. I&apos;m the
        lead front-end engineer of{" "}
        <a
          href="https://www.carrierassure.com/"
          className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
          target="_blank"
          rel="noreferrer"
        >
          Carrier Assure
        </a>
        , where we develop technologies that empower companies or individuals to
        predict how a carrier will transport its goods.
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
    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      More coming soon...
    </p>
  </Container>
);

export { meta, headers };
export default Home;
