<template>
  <div class="pr-list">
    <div class="pr-list__repos">
      <ul class="repo-list">
        <li v-for="(repo, index) in repos" :key="repo" class="repo-list__item">
          <button
            class="repo-list__item-link"
            :class="[
              `repo-list__item-link--color_${color}`,
              {'repo-list__item-link--active': index == repoIndex},
            ]"
            @click="changeSlider(index)"
          >
            {{ repo }}
          </button>
        </li>
      </ul>
    </div>
    <div class="pr-list__prs">
      <div v-if="!render" class="pr-list__loading" />
      <SliderInner v-if="render" :slides="repoDetail">
        <template #default="{pageNumber, slides}">
          <div v-if="slides.length !== 0">
            <h2>
              <NuxtLink :to="slides[pageNumber]?.html_url">
                {{ slides[pageNumber]?.title }}
              </NuxtLink>
            </h2>
            <MDC :value="slides[pageNumber]?.body" tag="article" />
          </div>
          <div v-else>
            <h3>
              There are currently no active pull requests.
            </h3>
          </div>
        </template>
      </SliderInner>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  repos: {
    type: Array,
    default: () => []
  }
});

const { getPullRequests } = useGitHub();

const color = inject("block-child-color", "dark");
const repoDetail = ref([]);
const repoIndex = ref(0);
const render = ref(false);

onBeforeMount(async() => {
  repoDetail.value = await getPullAllRequests();
  render.value = true;
});

async function changeSlider(index) {
  repoIndex.value = index;
  repoDetail.value = await getPullAllRequests();
}

async function getPullAllRequests() {
  render.value = false;
  const result = await getPullRequests(props.repos[repoIndex.value]);
  render.value = true;
  return result;
}
</script>
<style lang="scss">
.pr-list {
  display: grid;
  grid-template: "column column";
  grid-template-columns: 25ch auto;
  gap: 2em;

  &__repos {
    margin-right: 1em;
  }

  &__prs {
    margin: auto;
  }

  &__loading {
    animation: spin 1s linear infinite;
    border: 4px solid var(--color-bg-soft);
    border-left-color: var(--color-fg);
    border-radius: 50px;
    height: 50px;
    width: 50px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}

.repo-list {
  padding: 0;

  &__item {
    margin-bottom: 1em;

    &::marker {
      content: none;
    }
  }

  &__item-link {
    background-color: var(--color-bg-soft);
    border: 0px;
    cursor: pointer;
    border-radius: 25px;
    width: 100%;
    height: 50px;
    padding: 0 var(--border-radius);
    text-align: left;

    &--color{
      &_dark {
        background-color: var(--color-fg);
        color: var(--color-bg-mute);
      }

      &_light {
        background-color: var(--color-bg-mute);
        color: var(--color-fg);
      }
    }

    &:hover {
      margin-left: 2ch;
    }

    &--active {
      margin-left: 1ch;
    }
  }
}
</style>
