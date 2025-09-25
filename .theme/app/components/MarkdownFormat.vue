<template>
  <MDC :value="updatedBody" tag="article" />
</template>
<script setup>
const props = defineProps({
  body: {
    type: String,
    default: null
  }
});

const updatedBody = ref(props.body);

watch(props, (newBody, _) => {
  updatedBody.value = newBody.body;
});
</script>
