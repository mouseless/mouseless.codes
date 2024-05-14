<template>
  <div class="pr-list">
    <div class="pr-list__repos">
      <div class="repo-list">
        <ul class="repo-list__items">
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
        <Switcher :action="switcher" :status="prState" class="repo-list__switcher" />
      </div>
    </div>
    <div class="pr-list__prs">
      <div v-if="!render" class="pr-list__loading" />
      <SliderInner v-if="render" :align="'left'" :slides="pullRequests">
        <template #default="{pageNumber, slides}">
          <Pr
            v-if="slides.length !== 0 && pageNumber != slides.length - 1"
            :pr="slides[pageNumber]"
            :height="height"
          />
          <div v-else class="pr-list__see-more pr">
            <div class="pr__body">
              To see more pull requests, please visit
              <NuxtLink
                :text="`github.com/mouseless/${repos[repoIndex]}/pulls`"
                :to="`https://github.com/mouseless/${repos[repoIndex]}/pulls${prState == 'all' ? '?q=is%3Apr' : ''}`"
              />
            </div>
          </div>
        </template>
      </SliderInner>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "30ch"
  },
  repos: {
    type: Array,
    default: () => []
  }
});

const github = useGitHub();

const color = inject("block-child-color", "dark");
const pullRequests = ref([]);
const repoIndex = ref(0);
const render = ref(false);
const prState = ref("all");

onBeforeMount(async() => {
  const result = await getPullRequests(prState.value);
  pullRequests.value = result.length > 0 ? [...result, { }] : result;
});

watch([repoIndex, prState], async() => {
  const result = await getPullRequests(prState.value);
  pullRequests.value = result.length > 0 ? [...result, { }] : result;
});

function switcher() {
  prState.value = prState.value === "all" ? "open" : "all";
};

function changeSlider(index) {
  repoIndex.value = index;
}

async function getPullRequests(state) {
  render.value = false;
  const result = await github.getPullRequests(props.repos[repoIndex.value], state);
  render.value = true;

  return result;
}
</script>
<style lang="scss">
.pr-list {
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  /* couldn't find a better way, manually calculated */
  min-height: calc(v-bind(height) + 142px + 190px);

  &__repos {
    margin-right: 1em;
  }

  &__prs {
    margin: auto;
    width: 100%;
  }

  &__loading {
    animation: spin 1s linear infinite;
    border: 4px solid var(--color-bg-soft);
    border-left-color: var(--color-fg);
    border-radius: 50px;
    height: 50px;
    width: 50px;
    margin: 0 auto;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  &__see-more {
    color: var(--color-gray-100);
    background-color: var(--color-darkgreen-700);
    border-radius: var(--border-radius);
    padding: var(--border-radius);

    /* couldn't find a better way, manually calculated */
    height: calc(v-bind(height) + 142px);
  }
}

.repo-list {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0;

  &__items {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  &__item {
    &::marker {
      content: none;
    }
  }

  &__item-link {
    background-color: var(--color-darkgreen-700);
    border: 0px;
    cursor: pointer;
    border-radius: var(--space-xs);
    width: 100%;
    padding: var(--space-xs) var(--space-sm);
    text-align: left;
    white-space: nowrap;
    font-family: var(--font-default);
    font-size: medium;

    &--color{
      &_dark {
        background-color: var(--color-gray-300);
        color: var(--color-darkgreen-900);
      }

      &_light {
        background-color: var(--color-bg-mute);
        color: var(--color-fg);
      }
    }

    &:hover {
      background-color: var(--color-gray-400);
    }

    &--active, &--active:hover {
      background-color: var(--color-darkgreen-700);
      color: var(--color-gray-100);
    }
  }

  &__switcher {
    margin-left: auto;
    margin-right: 0
  }
}
</style>
