<template>
  <ContentDoc>
    <template #not-found>
      <ContentDoc path="/not-found" />
    </template>
  </ContentDoc>
</template>
<script setup>
import { joinURL } from "ufo";
import { usePageMetaStore } from "~/store/pageMetaStore";

const route = useRoute();
const store = usePageMetaStore();
const runtimeConfig = useRuntimeConfig();

const page = store.pageMeta?.find(page => page._path === route.path) ?? { };

useSeoMeta({
  ogTitle: page["seo-title"] ?? page.title,
  ogDescription: page["seo-description"],
  ogImage: fullUrl(page["seo-image"]),
  twitterTitle: page["seo-title"] ?? page.title,
  twitterDescription: page["seo-description"],
  twitterImage: fullUrl(page["seo-image"])
});

function fullUrl(path) {
  const { protocol, authority, baseUrl } = runtimeConfig.public;

  return `${protocol}://${joinURL(authority, baseUrl, path)}`;
}
</script>
