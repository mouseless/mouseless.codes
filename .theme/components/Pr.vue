<template>
  <div>
    <h2 class="title">
      <NuxtLink :to="pr?.html_url" class="title__link">
        {{ pr?.title }}
      </NuxtLink>
      <div
        class="pr-state"
        :class="`pr-state--${getState(pr)}`"
      >
        <img
          class="pr-state__icon"
          :src="`${getState(pr)}.svg`"
        >
        {{ getState(pr) }}
      </div>
    </h2>
    <MarkdownFormat :body="pr?.body" tag="article" />
  </div>
</template>
<script setup>
defineProps({
  pr: {
    type: Object,
    default: null
  }
});

function getState(object) {
  if(object.state === "closed") {
    return object.merged_at !== null ? "merged" : "closed";
  }

  return object.draft ? "draft" : "open";
}
</script>
<style lang="scss" scoped>
.pr-state {
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-radius: var(--border-radius);
  text-transform: capitalize;
  padding: 0 1em;
  font-size: 60%;
  height: 2.5em;

  &--draft {
    background-color: var(--color-gray-darker);
  }

  &--open {
    background-color: var(--color-green);
  }

  &--closed {
    background-color: var(--color-red);
    color: var(--color-white);
  }

  &--merged {
    background-color: var(--color-blue);
    color: var(--color-white);
  }

  &__icon {
    width: 1em;
    height: 1em;
  }
}

.title {
  display: inline-flex;
  gap: 0.5em;
  align-items: center;

  &__link {
    text-decoration: none;
  }
}
</style>
