<template>
  <div class="pr-list">
    <div class="pr-list__repos">
      <ul>
        <li v-for="(repo, index) in repos" :key="repo">
          <button @click="changeSlider(index)">
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
<style lang="scss" scoped>
.pr-list {
  display: flex;
  justify-content: space-around;

  &__repos {
    margin-right: 1em;

    ul {
      padding: 0;

      li {
        margin-bottom: 1em;

        &::marker {
          content: none;
        }

        & button {
          background-color: var(--color-bg-soft);
          border: 0px;
          color: var(--color-fg);
          cursor: pointer;
          border-radius: 25px;
          width: 100%;
          height: 50px;
          padding: 0px 30px;

          &:hover {
            background-color: var(--color-bg-mute);
          }
        }
      }
    }
  }
}
</style>
