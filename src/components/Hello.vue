<template>
  <h1 class="font-semibold text-2xl">{{ title }}</h1>
  <p class="text-lg">
    <slot />
  </p>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
