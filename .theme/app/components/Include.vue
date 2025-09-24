<template>
  <ContentRenderer v-if="data" :value="data" />
</template>
<script setup>
import { withLeadingSlash } from "ufo";

const props = defineProps({
  content: {
    type: String,
    default: null
  }
});

const path = props.content.replace(/\.md$/, "");
const data = await queryCollection("content").path(withLeadingSlash(path)).first();
</script>
