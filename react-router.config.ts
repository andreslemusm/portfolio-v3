import type { Config } from "@react-router/dev/config"
import { vercelPreset } from "@vercel/react-router/vite"

export default {
  future: {
    unstable_optimizeDeps: true,
    unstable_previewServerPrerendering: true,
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
  ssr: true,
  presets: [vercelPreset()],
} satisfies Config
