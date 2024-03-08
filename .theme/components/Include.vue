<template>
  <ContentRenderer :value="data" />
</template>
<script setup>
const props = defineProps({
  content: {
    type: String,
    default: null
  }
});

const path = props.content.replace(/\.md$/, "");
const { data } = await useAsyncData(path, () => queryContent(path).findOne());
</script>
