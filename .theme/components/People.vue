<template>
  <div
    class="people"
    :class="`people--align_${align}`"
  >
    <div
      v-if="render"
      class="members people__members"
      :class="`people__members--align_${align == 'left' ? 'right' : 'left'}`"
    >
      <div v-for="member in members" :key="member.login">
        <a :href="member.html_url">
          <img :src="member.avatar_url" class="members__image">
        </a>
      </div>
    </div>
    <div
      class="people__title"
      :class="[
        `people__title--align_${align}`,
        `people__title--color_${color}`
      ]"
    >
      Our People
    </div>
  </div>
</template>
<script setup>
defineProps({
  align: {
    type: String,
    default: "right"
  }
});

const { getPeople } = useGitHub();

const members = ref([]);
const render = ref(false);

onBeforeMount(async() => {
  const results = await getPeople();

  members.value = results;
  render.value = true;
});

const color = inject("block-child-color", "dark");
</script>
<style lang="scss" scoped>
.people {
  display: grid;
  grid-template-areas: "left right";
  width: 100%;

  &--align {
    &_left {
      grid-template-columns: 200px auto;
    }

    &_right {
      grid-template-columns: auto 200px;
    }
  }

  &__members {
    display: inline-flex;

    &--align {
      &_left {
        grid-area: left;
        justify-content: end;
      }

      &_right {
        grid-area: right;
        justify-content: start;
      }
    }
  }

  &__title {
    font-weight: bolder;
    font-size: x-large;
    margin-top: auto;
    margin-bottom: auto;

    &--align {
      &_left {
        grid-area: left;
        border-bottom-right-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        text-align: left;
      }

      &_right {
        grid-area: right;
        border-bottom-left-radius: var(--border-radius);
        border-top-left-radius: var(--border-radius);
        text-align: right;
      }
    }

    &--color {
      &_dark {
        background-color: var(--color-fg);
        color: var(--color-bg);
      }

      &_light {
        background-color: var(--color-bg);
        color: var(--color-fg);
      }
    }
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
