import { Fragment } from "react";
import { ReactIcon, profilePicture } from "~/assets";

const Home = (): React.ReactElement => (
  <Fragment>
    <img
      src={profilePicture}
      height={800}
      width={800}
      alt="Andres Lemus at Monserrate"
      className="mt-10 h-16 w-16 rounded-full object-cover object-center"
    />
    <article className="pt-5">
      <h1>
        <div className="pl-1 font-normal text-green-300 md:text-lg">
          Hi, my name is
        </div>
        <div className="pt-5 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
          Andres Lemus.
        </div>
        <div className="pt-2 text-4xl font-semibold text-gray-400 md:pt-3 md:text-5xl lg:text-6xl">
          I build things with{" "}
          <span className="text-[#61dafb]">
            React <ReactIcon className="inline-block h-8 w-8" />
          </span>
          .
        </div>
      </h1>
      <p className="prose pt-5 text-gray-400 md:prose-lg md:pt-7">
        I&apos;m a Front-end Engineer specializing in building exceptional web
        applications. In my free time, I&apos;m probably working on personal
        projects or learning new things. BUT, you could find me doing
        Calisthenics, Traveling, Reading, playing Videogames and recently
        cooking.
      </p>
    </article>
  </Fragment>
);

export default Home;
