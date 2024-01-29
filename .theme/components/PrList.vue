<template>
  <div class="github-prs">
    <div class="repos">
      <ul>
        <li v-for="(repo, index) in repos" :key="repo">
          <button @click="changeSlider(index)">
            {{ repo }}
          </button>
        </li>
      </ul>
    </div>
    <div class="prs">
      <SliderInner v-if="render" :slides="repository[currentSlider]">
        <template #default="{pageNumber, slides}">
          <div v-if="slides.length !== 0" class="slide">
            <div class="title">
              <h2>
                <NuxtLink :to="slides[pageNumber]?.html_url">
                  {{ slides[pageNumber]?.title }}
                </NuxtLink>
              </h2>
            </div>
            <div class="info">
              {{ slides[pageNumber]?.body }}
            </div>
          </div>
          <div v-else class="no-content">
            <h3>
              There is currently no active pull request.
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
const repository = ref([]);
const currentSlider = ref(0);
const render = ref(false);

const { getActivePullRequests } = useGitHub();
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
.github-prs {
  display: flex;
  justify-content: space-around;

  .repos {

    li {
      margin: 30px;

      &::marker {
        content: none;
      }

      & button {
        background-color: var(--color-bg-box);
        border: 0cap;
        color: aliceblue;
        border-radius: 25px;
        width: 200px;
        height: 50px;

        &:hover {
          background-color: var(--color-fg-box);
        }
      }
    }
  }

  .prs {

    .title {

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
