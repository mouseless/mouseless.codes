<template>
  <ContentRenderer :value="data" />
</template>
<script setup>
const props = defineProps({
  file: {
    type: String,
    default: null
  }
});
// TODO - 'page-data' may not be best practice
const { data } = await useAsyncData("page-data", () => queryContent(props.file.replace(/\.md$/, "")).findOne());
</script>
