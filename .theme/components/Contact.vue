<template>
  <div class="contact">
    <div class="header">
      <h2>Contact Us</h2>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {

    & .header {
        position: absolute;
        left: 50%;
        right: 50%;
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
