import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use '/no-gravity-berlin/' for GitHub Pages, '/' for lovable.dev and local
  // Detect GitHub Pages by checking for GITHUB_PAGES env or fallback to production mode
  const isGhPages = process.env.GITHUB_PAGES === 'true' || process.env.NODE_ENV === 'production';
  return {
    base: isGhPages ? '/no-gravity-berlin/' : '/',
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
