import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    outDir: "dist",
    rollupOptions: {
      external: [/^lit/, "react"],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
    }),
  ],
});
