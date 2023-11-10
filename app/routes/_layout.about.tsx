import { Container } from "~/components/container";
import { MailIcon } from "~/assets/icons";
import { cacheHeader } from "pretty-cache-header";
import { generateMetaTags } from "~/utils/meta-tags";
import { portraitPicture } from "~/assets";
import type { HeadersFunction, MetaFunction } from "@vercel/remix";
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
    title: "About | Andres Lemus",
    description:
      "I'm a front-end engineer, with a passion for building things with React",
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
          I&apos;m a front-end engineer, with a passion for building things with{" "}
          <span
            style={{ color: "#61dafb" }}
            className="inline-flex items-center gap-x-2"
          >
            React{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-11.5 -10.23174 23 20.46348"
              width="24"
              height="24"
              className="h-9 w-9"
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
            I started my journey into the world of tech at the{" "}
            <a
              href="https://unal.edu.co/"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              National University of Colombia
            </a>
            , where I studied Systems Engineering with an emphasis in
            Networking. While I didn&apos;t complete my degree, I gained
            valuable knowledge in OOP, FP, data structures, and compilers, which
            has helped me in my career.
          </p>
          <p>
            I soon realized that front-end development was where my true passion
            lay, so I decided to focus on learning everything related to this
            field. I used a{" "}
            <a
              href="https://roadmap.sh/frontend"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              roadmap
            </a>{" "}
            to track the topics I needed to learn, and after almost three months
            of hard work, I became proficient in everything from HTML to
            ReactJS. In May 2019, I landed my first job as a software engineer
            at Fluid Attacks.
          </p>
          <p>
            Like many people, I encountered challenges along the way. Some
            things didn&apos;t click immediately, and sometimes I forgot
            something I had learned a week before. There were also times when
            the topics were simply too difficult to wrap my head around. If
            you&apos;re going through the same thing, I highly recommend this{" "}
            <a
              href="https://www.coursera.org/learn/learning-how-to-learn"
              className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
            >
              course
            </a>{" "}
            that gave me powerful tools to improve my learning ability. And the
            best thing? It&apos;s freemium, so you can start learning today!
          </p>
          <p>
            Overall, I&apos;m passionate about building intuitive and
            user-friendly interfaces, and I love using my skills to help
            businesses achieve their goals. If you&apos;re looking for a
            front-end engineer who&apos;s dedicated, hardworking, and always
            looking to improve,{" "}
            <strong className="font-medium text-zinc-800 dark:text-zinc-200">
              let&apos;s chat!
            </strong>
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
