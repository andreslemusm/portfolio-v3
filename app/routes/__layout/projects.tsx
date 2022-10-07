import type { HeadersFunction } from "@remix-run/node";
import { SimpleLayout } from "~/components/simple-layout";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
});

const Projects = (): React.ReactElement => (
  <SimpleLayout title="Projects" intro="Coming Soon..." />
);

export { headers };
export default Projects;
