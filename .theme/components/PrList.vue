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
        <div
          class="switcher repo-list__switcher"
          :class="`switcher--status_${prState}`"
          @click="switcher"
        >
          <button class="switcher__btn" />
          <div class="switcher__text">
            {{ prState === "all" ? "All" : "Open" }}
          </div>
        </div>
      </div>
    </div>
    <div class="pr-list__prs">
      <div v-if="!render" class="pr-list__loading" />
      <SliderInner v-if="render" align="left" :slides="pullRequests">
        <template #default="{pageNumber, slides}">
          <div v-if="slides.length !== 0 && pageNumber != slides.length - 1">
            <h2 class="title">
              <NuxtLink :to="slides[pageNumber]?.html_url" class="title__link">
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

function getState(object) {
  if(object.state === "closed") {
    return object.merged_at !== null ? "merged" : "closed";
  }

  return object.draft ? "draft" : "open";
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

.pr-state {
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-radius: var(--border-radius);
  text-transform: capitalize;
  padding: 0 1em;
  font-size: 60%;
  height: 2.5em;

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
    background-color: var(--color-blue);
    color: var(--color-white);
  }

  &__icon {
    width: 1em;
    height: 1em;
  }
}

.title {
  display: inline-flex;
  gap: 0.5em;
  align-items: center;

  &__link {
    text-decoration: none;
  }
}
</style>
