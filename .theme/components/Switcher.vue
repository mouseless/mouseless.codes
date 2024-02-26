<template>
  <div
    class="switcher"
    :class="`switcher--status_${status}`"
    @click="action"
  >
    <button class="switcher__btn" />
    <div class="switcher__text">
      {{ status === "all" ? "All" : "Open" }}
    </div>
  </div>
</template>
<script setup>
defineProps({
  action: {
    type: Function,
    default: null
  },
  status: {
    type: String,
    default: null
  }
});
</script>
<style lang="scss" scoped>
.switcher {
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  color: var(--color-fg-mute);
  cursor: pointer;
  font-weight: bold;
  font-size: smaller;
  height: 25px;
  position: relative;
  width: 63px;
  margin: 0 auto;

  &--status {
    &_open {
      background-color: hsl(from var(--color-green) h s calc(l - .2));
      color: var(--color-white);
      justify-content: start;

      .switcher__btn {
        right: 2px;
      }
    }

    &_all {
      background-color: var(--color-gray);
      justify-content: end;

      .switcher__btn {
        left: 2px;
      }
    }
  }

  &__text {
    margin-left: 7px;
    margin-right: 8px;
  }

  &__btn {
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: var(--color-white);
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    top: 2px;
  }
}
</style>
