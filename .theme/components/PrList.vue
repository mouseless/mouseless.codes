<template>
  <div class="pr-list">
    <div class="pr-list__repos">
      <ul class="repo-list">
        <li v-for="(repo, index) in repos" :key="repo" class="repo-list__item">
          <button
            class="repo-list__item-link"
            :class="`repo-list__item-link--color_${color}`"
            @click="changeSlider(index)"
          >
            {{ repo }}
          </button>
        </li>
      </ul>
    </div>
    <div class="pr-list__prs">
      <SliderInner v-if="render" :slides="repository[currentSlider]">
        <template #default="{pageNumber, slides}">
          <div v-if="slides.length !== 0" class="slide">
            <div class="slide__title">
              <h2>
                <NuxtLink :to="slides[pageNumber]?.html_url">
                  {{ slides[pageNumber]?.title }}
                </NuxtLink>
              </h2>
            </div>
            <div class="slide__body">
              <MDC :value="slides[pageNumber]?.body" tag="article" />
            </div>
          </div>
          <div v-else class="no-content">
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

const { getActivePullRequests } = useGitHub();

const blockColor = inject("block-color", "default");
const colors = {
  black: "light",
  gray: "dark",
  white: "dark",
  yellow: "dark",
  orange: "dark",
  red: "light",
  blue: "dark",
  green: "dark"
};
const color = computed(() => colors[blockColor.value] || "dark");

const repository = ref([]);
const currentSlider = ref(0);
const render = ref(false);

onBeforeMount(async() => {
  const results = [];
  for(const repo of props.repos) {
    results.push(await getActivePullRequests(repo));
  }

  repository.value = results;
  render.value = true;
});

function changeSlider(index) {
  currentSlider.value = index;
}
</script>
<style lang="scss">
.pr-list {
  display: flex;
  justify-content: space-around;

  &__repos {
    margin-right: 1em;
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
    padding: 0px 30px;

    &--color{
      &_dark {
        background-color: var(--color-fg);
        color: var(--color-bg-mute);

        &:hover {
          background-color: var(--color-fg-mute);
          color: var(--color-bg);
        }
      }
      &_light {
        background-color: var(--color-bg-mute);
        color: var(--color-fg);

        &:hover {
          background-color: var(--color-fg-mute);
          color: var(--color-bg-soft);
        }
      }
    }
  }
}
</style>
