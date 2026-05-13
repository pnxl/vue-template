import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

import VueRouter from "vue-router/vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";
import components from "unplugin-vue-components/vite";
import resolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    tailwindcss(),
    icons({ compiler: "vue3" }),
    components({ dts: true, resolvers: [resolver()] }),
  ],

  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
