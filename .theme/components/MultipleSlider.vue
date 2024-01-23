<template>
  <div>
    <div>
      <ul>
        <li v-for="slot in slots" :key="slot">
          {{ slot }}
        </li>
      </ul>
    </div>
    <div>
      <slot :name="slots[1]" />
    </div>
  </div>
</template>
<script setup>
const slots = Object.keys(useSlots());
console.log(slots);
</script>
