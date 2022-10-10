import type { HeadersFunction } from "@remix-run/node";
import { SimpleLayout } from "~/components/simple-layout";

const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=1, stale-while-revalidate=31536000",
});

const Uses = (): React.ReactElement => (
  <SimpleLayout title="Uses" intro="Coming Soon..." />
);

export { headers };
export default Uses;
