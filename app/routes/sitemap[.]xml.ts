import type { LoaderFunctionArgs } from "react-router";
import { cacheHeader } from "pretty-cache-header";
import { generateRemixSitemap as generateRRSitemap } from "@forge42/seo-tools/remix/sitemap";
import { getDomainUrl } from "~/utils/mics.server";
import { routes } from "virtual:react-router/server-build";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const sitemap = await generateRRSitemap({
    domain: getDomainUrl(request),
    routes,
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
