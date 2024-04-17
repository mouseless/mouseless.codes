<template>
  <div
    class="people"
    :class="`people--align_${align}`"
  >
    <div class="members people__members">
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
    default: "left"
  },
  itemHeight: {
    type: String,
    default: "50px"
  }
});

const { getPeople } = useGitHub();

const members = ref([]);

onServerPrefetch(async() => members.value = await getPeople());
onBeforeMount(async() => members.value = await getPeople());
</script>
<style lang="scss" scoped>
.people {
  margin-top: 1em;
  margin-bottom: 1em;
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
}

.members {
  &__image {
    width: v-bind(itemHeight);
    height: v-bind(itemHeight);
    border-radius: v-bind(itemHeight);
  }
}
</style>
