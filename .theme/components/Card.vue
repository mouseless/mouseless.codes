<template>
  <div class="card">
    <div class="text-area">
      <h3>{{ header }}</h3>
      <div class="text">
        <slot />
      </div>
      <NuxtLink v-if="link != null" :to="link">
        Learn More...
      </NuxtLink>
    </div>
    <div v-if="img != null" class="image-area">
      <img :src="img">
    </div>
  </div>
</template>
<script setup>
defineProps({
  header: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: null
  },
  img: {
    type: String,
    default: null
  }
});
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
}

.image-area {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
