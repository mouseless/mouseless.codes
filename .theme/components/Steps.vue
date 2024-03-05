<template>
  <div class="steps">
    <div class="steps__scroll">
      <div class="steps__content">
        <slot :name="steps[currentIndex]" />
      </div>
    </div>
    <div class="flow steps__flow">
      <div v-for="index in stepCount" :key="index" class="flow__step">
        <div
          class="step"
          :class="[
            { 'step--active': currentIndex == index - 1 },
            `step--color_${color}`,
          ]"
          @click="changeContent(index - 1)"
        >
          <div
            class="step__number"
            :class="[
              `step__number--color_${color}`,
              {'step__number--active': currentIndex == index - 1}
            ]"
          >
            {{ index }}
          </div>
          <div class="step__name">
            {{ titles[index - 1] }}
          </div>
        </div>
        <img
          v-if="index !== stepCount"
          class="flow__arrow"
          :class="`arrow--color_${color}`"
          :src="`/components/steps/step-arrow-${color}.svg`"
        >
      </div>
    </div>
  </div>
  <slot />
</template>
<script setup>
defineProps({
  titles: {
    type: Array,
    default: () => []
  },
  height: {
    type: String,
    default: "50ch"
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
  border-radius: var(--border-radius);
  padding: var(--border-radius);

  &__flow {
    margin-top: 2em;
  }

  &__scroll {
    height: v-bind(height);
    overflow: auto;
  }

  &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}

.flow {
  display: flex;
  flex-direction: row;
  justify-content: center;

  &__step {
    display: flex;
    flex-direction: row;
  }

  &__arrow {
    width: 80px;
    height: 50px;
  }
}

.step {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  padding: 1.5em;
  cursor: pointer;
  width: 100px;
  margin-top: 2em;

  &--color {
    &_dark {
      color: var(--color-white);
      background-color: var(--color-fg);
    }

    &_light {
      color: var(--color-fg);
      background-color: var(--color-bg-soft);
    }
  }

  &:hover, &--active {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  &__number {
    border-radius: var(--border-radius);
    width: 7ch;
    height: 3ch;
    font-size: medium;
    margin-top: -2em;
    color: var(--color-bg);

    &--color {
      &_dark {
        background-color: var(--color-black-lightest);
      }

      &_light {
        background-color: var(--color-gray-darkest);
      }
    }

    &--active {
      background-color: var(--color-logo-mark);
    }
  }

  &__name {
    display: flex;
    align-items: center;
    font-size: large;
    font-weight: bold;
    height: 100%;
  }
}
</style>
