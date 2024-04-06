<template>
  <div>
    <h3 class="title">
      <NuxtLink
        :to="pr?.html_url"
        class="title__link"
        :class="`title__link--color_${color}`"
      >
        {{ pr?.title }}
      </NuxtLink>
      <div
        class="pr-state"
        :class="`pr-state--${getState(pr)}`"
      >
        <img
          class="pr-state__icon"
          :src="`/components/pr/${getState(pr)}.svg`"
        >
        {{ getState(pr) }}
      </div>
    </h3>
    <MarkdownFormat :body="pr?.body" tag="article" class="pr-body" />
  </div>
</template>
<script setup>
defineProps({
  pr: {
    type: Object,
    default: null
  }
});

const color = inject("block-child-color", "dark");

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
  font-size: 40%;
  height: 2em;
  color: var(--color-fg);

  &--draft { background-color: var(--color-gray-darker); }
  &--open { background-color: var(--color-green); }
  &--closed { background-color: var(--color-red); color: var(--color-white); }
  &--merged { background-color: var(--color-blue); color: var(--color-white); }

  &__icon {
    width: 1em;
    height: 1em;
  }
}

.title {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.25em;
  flex-direction: column;
  margin-bottom: 0.5em;

  &__link {
    text-decoration: none;

    &--color{
      &_dark {
        color: var(--color-fg);

        &:hover {
          color: var(--color-logo-mark);
        }
      }

      &_light {
        color: var(--color-bg-mute);

        &:hover {
          color: var(--color-green);
        }
      }
    }
  }
}
</style>
<style lang="scss">
.pr-body {
  h1 { font-size: 3em; }
  h2 { font-size: 2.5em; }
  h3 { font-size: 2em; }
  h4 { font-size: 1.7em; }
  h5 { font-size: 1.5em; }
  h6 { font-size: 1.25em; }
}
</style>
