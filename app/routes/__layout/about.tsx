import { Container } from "~/components/container";
import { FaEnvelope } from "react-icons/fa";
import { portraitPicture } from "~/assets";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { mail, socialNetworks } from "~/utils/constants";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
});

const meta: MetaFunction = () => ({
  title: "About -  Andres Lemus",
  description: "I&apos;m Andres Lemus. I build things with ReactJS.",
});

const About = (): React.ReactElement => (
  <Container className="mt-16 sm:mt-32">
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <img
            src={portraitPicture}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I&apos;m a Front-end engineer. I build things with{" "}
          <span
            style={{ color: "#61dafb" }}
            className="inline-flex items-baseline gap-x-2"
          >
            React{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-11.5 -10.23174 23 20.46348"
              width="24"
              height="24"
              className="inline-block h-7 w-7"
            >
              <circle cx="0" cy="0" r="2.05" fill="#61dafb"></circle>
              <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
              </g>
            </svg>
          </span>
          .
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I went to the{" "}
            <a
              href="https://unal.edu.co/"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              National University of Colombia
            </a>{" "}
            where I studied Systems Engineer with an emphasis in Networking
            (yes, I&apos;m a big fan of the internet 🤷‍♂️). I didn&apos;t graduate
            and probably never will since I already learned the topics that
            would make a difference in my career (OOP, FP, data structures, and
            compilers). Also, today companies don&apos;t require you to have a
            degree, so it isn&apos;t worth investing time.
          </p>
          <p>
            After deciding to focus on learning everything related to front-end
            development (I used this{" "}
            <a
              href="https://roadmap.sh/frontend"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              roadmap
            </a>{" "}
            to track the topics I needed to learn), I spent almost 3 months
            learning everything from HTML up to ReactJS. Finally, I got my first
            job in May 2019 at Fluid Attacks.
          </p>
          <p>
            Like everyone, I had difficulties in my learning process: Something
            didn&apos;t click immediately; I forgot about something I supposedly
            learned a week before 😕; sometimes, it was just that the topic was
            too difficult to wrap my head around. My advice if you&apos;re
            having the same difficulties is to take this{" "}
            <a
              href="https://www.coursera.org/learn/learning-how-to-learn"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              course
            </a>
            , it&apos;ll give you powerful tools to improve your learning
            ability, and the best thing is freemium! 🥳.
          </p>
        </div>
      </div>
      <ul className="lg:pl-20">
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.label} className="pb-4">
            <a
              href={socialNetwork.href}
              target="_blank"
              className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              rel="noreferrer"
            >
              <socialNetwork.icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span className="ml-4">Follow on {socialNetwork.label}</span>
            </a>
          </li>
        ))}
        <li className="mt-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
          <a
            className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            href={`mailto:${mail}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
            <span className="ml-4">{mail}</span>
          </a>
        </li>
      </ul>
    </div>
  </Container>
);

export { meta, headers };
export default About;
