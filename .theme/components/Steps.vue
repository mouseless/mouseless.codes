<template>
  <div class="steps">
    <div class="steps__content">
      <slot :name="steps[currentIndex]" />
    </div>
    <div class="steps__flow">
      <div v-for="index in stepCount" :key="index" class="steps__step">
        <div
          class="step"
          :class="[
            { 'step--active': currentIndex == index - 1 },
            `step--color_${color}`,
          ]"
          @click="changeContent(index - 1)"
        >
          <div class="step__number" :class="`step__number--color_${color}`">
            {{ index }}
          </div>
          <div class="step__name">
            {{ stepsName[index - 1] }}
          </div>
        </div>
        <img
          v-if="index !== stepCount"
          class="arrow"
          :class="`arrow--color_${color}`"
          src="/step-arrow.svg"
        >
      </div>
    </div>
  </div>
  <slot />
</template>
<script setup>
defineProps({
  stepsName: {
    type: Array,
    default: () => []
  }
});
const slots = useSlots();

const steps = Object.keys(slots);
const stepCount = steps.length;
const currentIndex = ref(0);
const color = inject("block-child-color", "dark");

function changeContent(index) {
  currentIndex.value = index;
}
</script>
<style lang="scss">
.steps {
  border: 1px solid;
  border-radius: var(--border-radius);
  padding: var(--border-radius);

  &__flow {
    display: flex;
    flex-direction: row;
    padding-top: 40px;
  }

  &__step {
    display: flex;
    flex-direction: row;
  }

  &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 300px;
  }
}

.step {
  border-radius: var(--border-radius);
  padding: 2em;
  cursor: pointer;
  width: 100px;

  &--color {
    &_dark {
      color: var(--color-white);
      background-color: var(--color-fg);

      &.step--active,
      &:hover {
        background-color: var(--color-fg-mute);
      }
    }

    &_light {
      color: var(--color-fg);
      background-color: var(--color-bg-soft);

      &.step--active,
      &:hover {
        background-color: var(--color-bg-mute);
      }
    }
  }

  &__number {
    border-radius: var(--border-radius);
    width: 7ch;
    height: 3ch;
    font-size: medium;

    &--color {
      &_dark {
        color: var(--color-fg);
        background-color: var(--color-bg);
      }

      &_light {
        color: var(--color-fg);
        background-color: var(--color-gray-darkest);
      }
    }
  }

  &__name {
    text-align: left;
    font-size: x-large;
    font-weight: bold;
  }

}

.arrow {
  width: 80px;
  height: 50px;
  margin-top: -40px;
}
</style>
