import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import { router } from "./router";
import { DataLoaderPlugin } from "unplugin-vue-router/data-loaders";

const app = createApp(App);

app.use(DataLoaderPlugin, { router });
app.use(router);

app.mount("#app");

// small logger for navigations, useful to check HMR
router.isReady().then(() => {
  router.beforeEach((to, from) => {
    console.log("🧭", from.fullPath, "->", to.fullPath);
  });
});
