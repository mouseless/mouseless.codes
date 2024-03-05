<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
const excludePath = ["/footer", "/header", "/not-found", "/readme"];

if(!process.dev) {
  excludePath.push("/demo");
}

const { data: pageMeta } = await useAsyncData("pageMeta", () => queryContent()
  .where({ _path: { $not: { $in: excludePath } } })
  .only(["_path", "menu-title", "position", "seo-title", "seo-description", "seo-image"])
  .sort({ position: 1, $numeric: true })
  .find()
);

store.setPageMeta(pageMeta.value);
</script>
