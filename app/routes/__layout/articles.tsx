import type { HeadersFunction } from "@remix-run/node";
import { SimpleLayout } from "~/components/simple-layout";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=1, stale-while-revalidate=31536000",
});

const Articles = (): React.ReactElement => (
  <SimpleLayout title="Articles" intro="Coming Soon..." />
);

export { headers };
export default Articles;
