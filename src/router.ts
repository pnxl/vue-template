import { createRouter, createWebHistory } from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

function addRedirects() {
  // example of adding redirects programmatically
  /*   router.addRoute({
   *     path: "/new-about",
   *     redirect: "/about?from=hoho",
   *    });
   */
}

if (import.meta.hot) {
  // development
  handleHotUpdate(router, (routes) => {
    console.log("🔥 HMR with", routes);
    addRedirects();
  });
} else {
  // production
  addRedirects();
}
