import type { HeadersFunction } from "@remix-run/node";
import { SimpleLayout } from "~/components/simple-layout";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=0, stale-while-revalidate, s-maxage=86400",
});

const Uses = (): React.ReactElement => (
  <SimpleLayout title="Uses" intro="Coming Soon..." />
);

export { headers };
export default Uses;
