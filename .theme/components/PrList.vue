<template>
  <div class="pr-list">
    <div class="pr-list__repos">
      <div class="repo-list">
        <ul>
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
        <div
          class="switcher repo-list__switcher"
          :class="`switcher--status_${prState}`"
        >
          <button class="switcher__hand" @click="switcher" />
          <div class="switcher__text">
            {{ prState === "all" ? "All" : "Open" }}
          </div>
        </div>
      </div>
    </div>
    <div class="pr-list__prs">
      <div v-if="!render" class="pr-list__loading" />
      <SliderInner v-if="render" :slides="repoDetail">
        <template #default="{pageNumber, slides}">
          <div v-if="slides.length !== 0 && pageNumber != slides.length - 1">
            <h2 class="title">
              <NuxtLink :to="slides[pageNumber]?.html_url">
                {{ slides[pageNumber]?.title }}
              </NuxtLink>
              <div
                class="pr-state"
                :class="`pr-state--${getState(slides[pageNumber])}`"
              >
                <img
                  class="pr-state__icon"
                  :src="`${getState(slides[pageNumber])}.svg`"
                >
                {{ getState(slides[pageNumber]) }}
              </div>
            </h2>
            <MDC :value="slides[pageNumber]?.body" tag="article" />
          </div>
          <div v-else-if="pageNumber == slides.length - 1">
            <strong>If you want to see more pull request </strong>
            <LinkButton :text="slides[0]?.head.repo.name" type="cta" :to="slides[0]?.head.repo.html_url" />
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
const prState = ref("all");

onBeforeMount(async() => {
  const result = await getPullAllRequests(prState.value);
  repoDetail.value = result.length > 0 ? [...result, { }] : result;
  render.value = true;
});

watch([repoIndex, prState], async() => {
  const result = await getPullAllRequests(prState.value);
  repoDetail.value = result.length > 0 ? [...result, { }] : result;
});

function switcher() {
  prState.value = prState.value === "all" ? "open" : "all";
};

function changeSlider(index) {
  repoIndex.value = index;
}

async function getPullAllRequests(state) {
  render.value = false;
  const result = await getPullRequests(props.repos[repoIndex.value], state);
  render.value = true;
  return result;
}

function getState(object) {
  if(object.state === "closed") {
    if(object.merged_at != null) {
      return "merged";
    }

    return "closed";
  }

  if(object.draft) {
    return "draft";
  }

  return "open";
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

  &__switcher {
    margin-left: 5em;
  }
}

.switcher {
  display: flex;
  align-items: center;
  border: solid 1px;
  border-radius: var(--border-radius);
  color: var(--color-fg-mute);
  font-weight: bold;
  position: relative;
  height: 35px;
  width: 75px;

  &--status {
    &_open {
      background-color: var(--color-green);
      color: var(--color-white);
      justify-content: start;

      .switcher__hand {
        right: 2px;
      }
    }

    &_all {
      background-color: var(--color-gray);
      justify-content: end;

      .switcher__hand {
        left: 2px;
      }
    }
  }

  &__text {
    margin-left: 7px;
    margin-right: 8px;
  }

  &__hand {
    position: absolute;
    width: 31px;
    height: 31px;
    background-color: var(--color-white);
    border-radius: 50%;
    cursor: pointer;
    border: 0;
    top: 2px;
  }
}

.pr-state {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: var(--border-radius);
  text-transform: capitalize;
  width: 100px;
  padding: 0 15px;

  &--draft {
    background-color: var(--color-gray-darker);
  }

  &--open {
    background-color: var(--color-green);
  }

  &--closed {
    background-color: var(--color-red);
    color: var(--color-white);
  }

  &--merged {
    background-color: #8957e5;
    color: var(--color-white);
  }

  &__icon {
    width: 20px;
    height: 20px;
  }
}

.title {
  display: inline-flex;
  gap: 0.5em;
}
</style>
