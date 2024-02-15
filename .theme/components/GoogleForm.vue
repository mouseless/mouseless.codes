<template>
  <div class="frame">
    <iframe
      :src="source"
      class="frame__form"
    >
      <slot />
    </iframe>
    <div v-if="meeting" class="frame__schedule">
      <button>
        schedule meeting
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  source: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  meeting: {
    type: Boolean,
    default: true
  }
});

const height = props.height || "auto";
</script>
<style lang="scss" scoped>
.frame {
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    width: 100%;
    height: v-bind(height);
    border: 0;
  }

  &__schedule {
    width: 200px;
  }
}
</style>
