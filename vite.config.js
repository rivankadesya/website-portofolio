import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Base path untuk GitHub Pages
  // Jika menggunakan custom domain atau root repo, set ke "/"
  // Jika menggunakan GitHub Pages dengan repo name, set ke "/repo-name/"
  const base = env.VITE_REPO_NAME ? `/${env.VITE_REPO_NAME}/` : "/";
  return {
    base: "/website-portofolio/",
    plugins: [
      react({
        // Enable Fast Refresh (Hot Reload)
        fastRefresh: true,
      }),
      tailwindcss(),
    ],
    server: {
      open: true,
      host: true, // Allow access from network devices
      port: 5173, // Default Vite port
      hmr: {
        // Enable Hot Module Replacement
        overlay: true, // Show error overlay in browser
      },
      watch: {
        // Watch for file changes
        usePolling: false, // Set to true if hot reload doesn't work on some systems
      },
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
