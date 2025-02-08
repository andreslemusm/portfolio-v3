import { SimpleLayout } from "~/components/simple-layout";
import { cacheHeader } from "pretty-cache-header";
import { generateMetaTags } from "~/utils/meta-tags";
import type { HeadersFunction, MetaFunction } from "react-router";

const headers: HeadersFunction = () => ({
  "Cache-Control": cacheHeader({
    public: true,
    maxAge: "1m",
    staleWhileRevalidate: "1month",
  }),
});

const meta: MetaFunction = () =>
  generateMetaTags({
    title: "Blog - Andres Lemus Madrid",
    description:
      "Insights and reflections on frontend development, modern web technologies, and building exceptional user experiences.",
  });

const Blog = () => (
  <SimpleLayout
    title="Thoughts on Frontend Development and Beyond"
    intro="A collection of articles sharing my experiences, learnings, and perspectives on building better web applications. Stay tuned for upcoming posts!"
  />
);

export { headers, meta };
export default Blog;
