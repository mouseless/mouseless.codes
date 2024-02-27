<template>
  <div class="card">
    <img v-if="image !== null" :src="image" class="card__image">
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: {
    type: String,
    default: null
  }
});
</script>
<style lang="scss">
.card {
  border: 1px solid;
  background-color: var(--color-white);
  padding: 1em;
  display: inline-flex;
  flex-direction: column;

  &:hover {
    margin-top: -3px;
    margin-left: -3px;
    margin-right: 3px;
    margin-bottom: 3px;
    box-shadow: 3px 3px 0 0 var(--color-bg-mute);
  }

  &__image {
    max-height: 300px;
    width: auto;
  }
}
</style>
