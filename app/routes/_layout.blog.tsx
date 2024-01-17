import { SimpleLayout } from "~/components/simple-layout";
import { cacheHeader } from "pretty-cache-header";
import { generateMetaTags } from "~/utils/meta-tags";
import type { HeadersFunction, MetaFunction } from "@vercel/remix";

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
    description: "Read my thoughts on frontend development, design, and more.",
  });

const Blog = () => <SimpleLayout title="Blog" intro="Coming Soon..." />;

export { headers, meta };
export default Blog;
