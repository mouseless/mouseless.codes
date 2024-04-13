<template>
  <div class="steps">
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
          src="/components/steps/arrow.png"
          class="flow__arrow"
          :class="`flow__arrow--color_${color}`"
        >
      </div>
    </div>
    <div class="steps__scroll">
      <div class="steps__content">
        <slot :name="steps[currentIndex]" />
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

  &__scroll {
    margin-top: 2em;
    height: v-bind(height);
    overflow: auto;
  }
}

.flow {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  &__step {
    display: flex;
    flex-direction: row;
  }

  &__arrow {
    width: 80px;
    height: 80px;
    margin-top: auto;
    margin-bottom: auto;

    &--color {
      &_light {
        filter: invert(1);
      }
    }
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
  gap: 0.5em;

  &--color {
    &_dark {
      color: var(--color-white);
      background-color: var(--color-fg);

      &:hover {
        background-color: var(--color-black-lightest);
      }
    }

    &_light {
      color: var(--color-fg);
      background-color: var(--color-bg-soft);

      &:hover {
        background-color: var(--color-bg-mute);
      }
    }
  }

  &__number {
    border-radius: var(--border-radius);
    width: 7ch;
    height: 3ch;
    margin-top: -2em;
    font-size: medium;
    color: var(--color-bg);
    text-align: center;

    &--color {
      &_dark {
        background-color: var(--color-fg-mute);
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
    font-family: var(--font-heading);
    font-size: large;
    font-weight: bold;
    height: 100%;
  }
}
</style>
