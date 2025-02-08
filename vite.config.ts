import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from "@vercel/remix/vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        unstable_optimizeDeps: true,
        v3_routeConfig: true,
        v3_singleFetch: true,
      },
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
});
