<template>
  <div
    class="people"
    :class="`people--align_${align}`"
  >
    <div
      v-if="render"
      class="members people__members"
    >
      <div v-for="member in members" :key="member.login">
        <a :href="member.html_url" target="_blank">
          <img :src="member.avatar_url" class="members__image">
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  align: {
    type: String,
    default: "center"
  }
});

const { getPeople } = useGitHub();

const members = ref([]);
const render = ref(false);

onBeforeMount(async() => {
  members.value = await getPeople();
  render.value = true;
});
</script>
<style lang="scss" scoped>
.people {
  width: 100%;

  &--align {
    &_left {
      text-align: left;
    }

    &_center {
      text-align: center;
    }

    &_right {
      text-align: right;
    }
  }

  &__members {
    display: inline-flex;
  }
}

.members {
  &__image {
    width: 60px;
    height: 60px;
    margin: 0 5px;
    border-radius: var(--border-radius);
  }
}
</style>
