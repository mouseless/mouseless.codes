<template>
  <div class="pr">
    <h3 class="pr__title title">
      {{ pr?.title }}
      <div
        class="title__state"
        :class="`title__state--${getState(pr)}`"
      >
        <img
          class="title__state-icon"
          :src="`/components/pr/${getState(pr)}.svg`"
        >
        {{ getState(pr) }}
      </div>
    </h3>
    <div class="pr__body">
      <MarkdownFormat :body="pr?.body" tag="article" />
    </div>
    <NuxtLink :to="pr?.html_url" class="pr__link">
      See in GitHub
    </NuxtLink>
  </div>
</template>
<script setup>
defineProps({
  pr: {
    type: Object,
    default: null
  },
  height: {
    type: String,
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
.pr {
  background-color: var(--color-black-lightest); border-radius: var(--border-radius);
  color: var(--color-bg);
  padding: 2em;
  overflow: hidden;

  &__title {
    margin-bottom: 0.5em;
    color: var(--color-bg);
  }

  &__body {
    height: v-bind(height);
    overflow: hidden;
  }

  &__link {
    display: block;
    color: var(--color-bg);
    text-decoration: none;
    text-align: center;
    margin-bottom: -2em;
    line-height: 3em;

    &:hover {
      color: var(--color-green);
    }
  }
}

.title {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.25em;
  flex-direction: column;

  &__state {
    display: flex;
    align-items: center;
    gap: 0.5em;
    border-radius: var(--border-radius);
    text-transform: capitalize;
    padding: 0 1em;
    font-size: 40%;
    height: 2em;
    color: var(--color-fg);

    &--draft { background-color: var(--color-gray-darker); }
    &--open { background-color: var(--color-green); }
    &--closed { background-color: var(--color-red); color: var(--color-white); }
    &--merged { background-color: var(--color-blue); color: var(--color-white); }
  }

  &__state-icon {
    width: 1em;
    height: 1em;
  }
}
</style>
<style lang="scss">
.pr {
  &__body {
    h1 { font-size: 2.5em; }
    h2 { font-size: 2em; }
    h3 { font-size: 1.7em; }
    h4 { font-size: 1.5em; }
    h5 { font-size: 1.25em; }
    h6 { font-size: 1.125em; }

    h1, h2, h3, h4, h5, h6 {
      color: var(--color-bg);
    }
  }
}

</style>
