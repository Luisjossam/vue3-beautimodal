import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      name: "vue3-beautimodal",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "vue",
        },
      },
    },
  },
  plugins: [vue(), dts()],
});
