import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  future: {
    unstable_optimizeDeps: true,
  },
  ssr: true,
  presets: [vercelPreset()],
} satisfies Config;
