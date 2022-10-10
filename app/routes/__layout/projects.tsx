import type { HeadersFunction } from "@remix-run/node";
import { SimpleLayout } from "~/components/simple-layout";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=1, stale-while-revalidate=31536000",
});

const Projects = (): React.ReactElement => (
  <SimpleLayout title="Projects" intro="Coming Soon..." />
);

export { headers };
export default Projects;
