<template>
  <div class="inline-frame">
    <iframe
      class="inline-frame__frame"
      scrolling="no"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdwFCoyM4uN9JF9qORCkbSyey3Y9ux30Sir6JXbWnXCghhlsQ/viewform?embedded=true&hl=en"
    >
      <slot />
    </iframe>
  </div>
</template>
<style lang="scss" scoped>
.inline-frame {
  height: 1400px;
  position: relative;
  top: 225px;
  left: 130px;

  &__frame {
    border-width: 0;
    height: 950px;
    width: 750px;
    scale: 1.5;
  }
}
</style>
