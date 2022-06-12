import { Fragment } from "react";
import { React, profilePicture } from "~/assets";

const Home = (): React.ReactElement => (
  <Fragment>
    <div className="mt-10 h-16 w-16 overflow-hidden rounded-full">
      {/* <img src={profilePicture} alt="Andres Lemus at Monserrate" /> */}
    </div>
    <article className="pt-5">
      <h1 className="pl-1 font-normal text-green-300 md:text-lg">
        Hi, my name is
      </h1>
      <h2 className="pt-5 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
        Andres Lemus.
      </h2>
      <h3 className="pt-2 text-4xl font-semibold text-gray-400 md:pt-3 md:text-5xl lg:text-6xl">
        I build things with{" "}
        <span className="text-[#61dafb]">
          React <React className="inline-block h-8 w-8" />
        </span>
        .
      </h3>
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
