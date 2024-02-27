<template>
  <ContentDoc>
    <template #not-found>
      <ContentDoc path="/not-found" />
    </template>
  </ContentDoc>
</template>
<script setup>
import { usePageMetaStore } from "~/store/pageMetaStore";

const route = useRoute();
const store = usePageMetaStore();

const page = store.pageMeta?.find(page => page._path === route.path);

useSeoMeta({
  ogTitle: `Mouseless - ${page?.title}`,
  ogDescription: page?.ogDescription,
  ogImage: page?.ogImage,
  twitterTitle: `Mouseless - ${page?.title}`,
  twitterDescription: page?.ogDescription,
  twitterImage: page?.ogImage
});
</script>
