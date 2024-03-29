import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    tsconfigPaths(),
    checker({ typescript: true, eslint: { lintCommand: "eslint './src/**.ts'" } }),
  ],
  base: "",
});
