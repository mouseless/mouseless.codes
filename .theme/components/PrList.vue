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
        <Switcher :action="switcher" :status="prState" />
      </div>
    </div>
    <div class="pr-list__prs">
      <div v-if="!render" class="pr-list__loading" />
      <SliderInner v-if="render" :align="'left'" :height="height" :slides="pullRequests">
        <template #default="{pageNumber, slides}">
          <Pr v-if="slides.length !== 0 && pageNumber != slides.length - 1" :pr="slides[pageNumber]" />
          <div v-else>
            <strong>To see more pull requests </strong>
            <NuxtLink
              :text="`${repos[repoIndex]}/pulls`"
              :to="`https://github.com/mouseless/${repos[repoIndex]}/pulls`"
            />
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
    default: "50ch"
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
  display: grid;
  grid-template: "column column";
  grid-template-columns: 25ch auto;
  gap: 2em;

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
}

.repo-list {
  padding: 0;

  &__items {
    padding: 0;
  }

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
