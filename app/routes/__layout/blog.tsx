import { SimpleLayout } from "~/components/simple-layout";
import { generateMetaTags } from "~/utils/meta-tags";
import type { HeadersFunction, V2_MetaFunction } from "@remix-run/node";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=1, stale-while-revalidate=31536000",
});

const meta: V2_MetaFunction = () =>
  generateMetaTags({
    title: "Blog | Andres Lemus",
    description: "Read my thoughts on front-end development, design, and more.",
  });

const Blog = (): React.ReactElement => (
  <SimpleLayout title="Blog" intro="Coming Soon..." />
);

export { headers, meta };
export default Blog;
