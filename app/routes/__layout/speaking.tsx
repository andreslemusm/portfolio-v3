import type { HeadersFunction } from "@remix-run/node";
import { SimpleLayout } from "~/components/simple-layout";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=0, stale-while-revalidate, s-maxage=86400",
});

const Speaking = (): React.ReactElement => (
  <SimpleLayout title="Speaking" intro="Coming Soon..." />
);

export { headers };
export default Speaking;
