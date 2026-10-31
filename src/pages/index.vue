<template>
  <div
    class="flex flex-col gap-y-2 justify-center items-center w-full h-screen"
  >
    <Hello title="pnxl/vue-template">
      a clean, yet fully-featured template for your vue projects
    </Hello>
    <p class="mt-4 dark:text-white/75 text-black/75">
      please refer to
      <a
        href="https://github.com/pnxl/vue-template/blob/main/README.md"
        target="_blank"
        class="dark:text-white/85 text-black/85 underline hover:text-black dark:hover:text-white inline-flex items-center gap-x-0.5"
        >README.md <IconLaunch class="inline-block size-3.5 my-auto"
      /></a>
      for more information and how to use this template.
    </p>
  </div>
</template>

<script setup lang="ts">
import Hello from "@/components/Hello.vue";
import IconLaunch from "virtual:icons/mdi/launch";
</script>
