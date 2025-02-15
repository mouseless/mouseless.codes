<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
const { data: menus } = await useAsyncData("menus", () =>
  queryCollection("menus").andWhere(query => {
    var groupQuery = query.where("position", "IS NOT NULL");
    if(!import.meta.dev)
    {
      groupQuery.where("path", "<>", "/demo");
    }

    return groupQuery;
  }).order("position", "ASC").all()
);

store.setPageMeta(menus.value);
</script>
