import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../..");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@demo/app-common": path.resolve(rootDir, "packages/common/src"),
      "@demo/app-ui": path.resolve(rootDir, "packages/ui/src"),
      "@demo/app-theme": path.resolve(rootDir, "packages/theme"),
      "@demo/app-hooks": path.resolve(rootDir, "packages/hooks/src"),
    },
  },
});
