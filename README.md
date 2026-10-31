# vue-template

a clean template for your vue projects, packed with Tailwind CSS, automatic page routing, and icons from unplugin-icons

## cheatsheet

### installing dependencies and running the dev server

```bash
pnpm install
```

```bash
pnpm dev
```

### creating pages

add pages in the `/src/pages` directory, for example:

```bash
touch ./src/pages/about.vue
```

or make a new directory for nested routes:

```bash
mkdir ./src/pages/blog
touch ./src/pages/blog/index.vue
touch ./src/pages/blog/[id].vue
```

### changing the default colours

head over to `style.css` and change the colours in the `body` selector, for example:

```css
@layer base {
  body {
    /* backgrounds */
    @apply bg-white dark:bg-gray-900;
    /* texts */
    @apply text-base text-black dark:text-white;
    /* selections */
    @apply *:selection:bg-indigo-500 *:selection:text-white dark:*:selection:bg-indigo-700 dark:*:selection:text-white;
  }
}
```

### adding fonts

i recommend using [Fontsource](https://fontsource.org) to add fonts to your project, for example:

```bash
pnpm add @fontsource-variable/ibm-plex-sans
```

then import the font in the entry point of the project, which in this case is in `main.ts`:

```ts
import "@fontsource-variable/ibm-plex-sans";
```

apply it in Tailwind CSS by overriding one of the default font families in `style.css`:

```css
@theme {
  --font-sans:
    "IBM Plex Sans Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  <!-- ... -->
}
```

or add a new font family in Tailwind CSS by adding a new variable in `style.css`:

```css
@theme {
  --font-ibm-plex-sans:
    "IBM Plex Sans Variable", sans-serif;
  <!-- ... -->
}
```

refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/theme#customizing-your-theme) for more information on how to customize your theme and individual font pages on [Fontsource](https://fontsource.org) for more information on how to use the fonts you install

### importing files from the `/src` directory

```ts
import MyComponent from "@/components/MyComponent.vue";
```

or for assets:

```html
<img src="@/assets/my-image.png" />
```

### using icons

refer to [Icônes](https://icones.js.org) for a list of available icons — then make sure to install the icon pack you want to use, for example:

```bash
pnpm add @iconify-json/mdi
```

then use the icons like this:

```html
<template>
  <IconHome />
</template>

<script setup lang="ts">
  import IconHome from "virtual:icons/mdi/home";
</script>
```

ignore any type errors when using icons, they will be generated automatically

### editing the site's metadata

head over to `index.html` and edit the `<head>` section, for example:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>pnxl/vue-template</title>
  <meta
    name="description"
    content="a clean template for your vue projects, packed with Tailwind CSS, automatic page routing, and icons from unplugin-icons"
  />
  <meta name="keywords" content="vue, template, tailwind, unplugin-icons" />
</head>
```

### building for production

```bash
pnpm build
```
