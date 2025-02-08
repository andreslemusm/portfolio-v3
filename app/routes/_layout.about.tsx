import { Container } from "~/components/container";
import { MailIcon } from "~/assets/icons";
import { cacheHeader } from "pretty-cache-header";
import { generateMetaTags } from "~/utils/meta-tags";
import { portraitPicture } from "~/assets/images";
import type { HeadersFunction, MetaFunction } from "react-router";
import { mail, socialNetworks } from "~/utils/constants";

const headers: HeadersFunction = () => ({
  "Cache-Control": cacheHeader({
    public: true,
    maxAge: "1m",
    staleWhileRevalidate: "1month",
  }),
});

const meta: MetaFunction = () =>
  generateMetaTags({
    title: "About - Andres Lemus Madrid",
    description:
      "I'm a frontend engineer passionate about building exceptional web experiences",
  });

const About = () => (
  <Container className="mt-16 sm:mt-32">
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <img
            src={portraitPicture}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square w-full rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          I&apos;m a frontend engineer passionate about crafting exceptional web
          experiences.
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            My tech journey began at the{" "}
            <a
              href="https://unal.edu.co/"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              National University of Colombia
            </a>
            , where I studied Systems Engineering with a focus on networking.
            Though I didn&apos;t complete my degree, the strong foundation in
            object-oriented programming, functional programming, data
            structures, and compiler theory has proven invaluable throughout my
            career.
          </p>
          <p>
            Discovering my passion for frontend development, I committed myself
            to mastering the craft. Using a structured{" "}
            <a
              href="https://roadmap.sh/frontend"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              learning path
            </a>
            , I immersed myself in web technologies. After three months of
            dedicated study and practice, I secured my first role as a software
            engineer at Fluid Attacks in May 2019.
          </p>
          <p>
            The learning journey wasn&apos;t always smooth - concepts sometimes
            proved elusive, and retention could be challenging. For others
            facing similar hurdles, I highly recommend this{" "}
            <a
              href="https://www.coursera.org/learn/learning-how-to-learn"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              learning techniques course
            </a>
            . It provided me with invaluable strategies to enhance my learning
            process. Best of all, you can access the core content for free!
          </p>
          <p>
            Today, I specialize in creating intuitive, performant user
            interfaces that help businesses achieve their goals. My approach
            combines technical expertise with a deep understanding of user
            experience principles. If you&apos;re looking for a frontend
            engineer who brings both technical skill and user-focused thinking
            to your projects,{" "}
            <a
              href={`mailto:${mail}`}
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              I&apos;d love to connect!
            </a>
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
            <MailIcon className="h-5 w-5 flex-none text-zinc-500 transition group-hover:text-teal-500" />
            <span className="ml-4">{mail}</span>
          </a>
        </li>
      </ul>
    </div>
  </Container>
);

export { meta, headers };
export default About;
