import { generateRobotsTxt } from "@forge42/seo-tools/robots"
import { cacheHeader } from "pretty-cache-header"
import type { LoaderFunctionArgs } from "react-router"

import { getDomainUrl } from "~/utils/mics.server"

export const loader = ({ request }: LoaderFunctionArgs) => {
  const robotsTxt = generateRobotsTxt([
    {
      userAgent: "*",
      allow: ["/"],
      sitemap: [`${getDomainUrl(request)}/sitemap.xml`],
    },
  ])

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": cacheHeader({
        public: true,
        maxAge: "5m",
        staleWhileRevalidate: "1month",
      }),
    },
  })
}
