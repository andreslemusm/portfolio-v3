import { cacheHeader } from "pretty-cache-header";
import { generateRemixSitemap as generateRRSitemap } from "@forge42/seo-tools/remix/sitemap";
import { getDomainUrl } from "~/utils/mics.server";
// @ts-expect-error - This import exists but is not picked up by the typescript compiler because it's a react-router internal import
import { routes } from "virtual:react-router/server-build";
import type { LoaderFunctionArgs, ServerBuild } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const sitemap = await generateRRSitemap({
    domain: getDomainUrl(request),
    // @ts-expect-error - This will be fixed after seo-tools adds support for react-router v7
    routes: routes as ServerBuild["routes"],
  });

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": cacheHeader({
        public: true,
        maxAge: "5m",
        staleWhileRevalidate: "1month",
      }),
    },
  });
};
