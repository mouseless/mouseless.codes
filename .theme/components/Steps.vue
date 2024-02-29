<template>
  <div class="steps">
    <div class="steps__content">
      <slot :name="steps[currentIndex]" />
    </div>
    <div class="steps__flow">
      <div
        v-for="index in stepCount"
        :key="index"
        class="steps__step"
      >
        <div class="step" @click="changeContent(index - 1)">
          <div class="step__number">
            {{ index }}
          </div>
          <div class="step__name">
            {{ stepsName[index - 1] }}
          </div>
        </div>
        <img
          v-if="index !== stepCount"
          class="arrow"
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

function changeContent(index) {
  currentIndex.value = index;
}
</script>
<style lang="scss">
.steps {
  &__flow {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 40px;
  }

  &__step {
    display: flex;
    flex-direction: row;
  }
}

.step {
  color: var(--color-white);
  background-color: var(--color-fg);
  display: grid;
  grid-template-columns:
    "row"
    "row";
  padding: 2em;
  align-items: center;
  cursor: pointer;
  width: 100px;

  &__number {
    background-color: var(--color-bg);
    border-radius: var(--border-radius);
    color: var(--color-fg);
    width: 7ch;
    height: 3ch;
    font-size: medium;
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
