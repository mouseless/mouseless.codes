<template>
  <div class="multiple-slider">
    <div class="sections">
      <ul>
        <li v-for="(slot, index) in slotNames" :key="slot">
          <button @click="() => currentSlider = index">
            {{ slot }}
          </button>
        </li>
      </ul>
    </div>
    <div class="slider">
      <slot :name="slotNames[currentSlider]" />
    </div>
  </div>
</template>
<script setup>
const slotNames = Object.keys(useSlots());
const currentSlider = ref(0);
</script>
