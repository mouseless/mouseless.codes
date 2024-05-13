<template>
  <div class="inline-frame">
    <iframe
      class="inline-frame__frame"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdwFCoyM4uN9JF9qORCkbSyey3Y9ux30Sir6JXbWnXCghhlsQ/viewform?embedded=true&hl=en"
    >
      <slot />
    </iframe>
  </div>
</template>
<style lang="scss" scoped>
.inline-frame {
  &__frame {
    border-width: 0;
    height: 875px;
    width: 750px;
    margin-left: -37px;
  }
}
</style>
