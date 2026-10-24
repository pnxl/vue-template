import { defineConfig } from "vite";
import VueRouter from "unplugin-vue-router/vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [VueRouter(), vue(), tailwindcss(), icons({ compiler: "vue3" })],
});
