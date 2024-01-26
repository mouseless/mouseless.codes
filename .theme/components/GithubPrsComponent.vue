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
      <Slider>
        <template v-for="pr in repository[currentSlider]" #[pr.id] :key="pr.id">
          <div class="slide">
            <div class="title">
              <h2>
                <NuxtLink :to="pr.html_url">
                  {{ pr.title }}
                </NuxtLink>
              </h2>
            </div>
            <div class="info">
              {{ pr.body }}
            </div>
          </div>
        </template>
      </Slider>
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

onBeforeMount(async() => {
  const results = [];
  for(const repo of props.repos) {
    results.push(await getActivePullRequests(repo));
  }

  repository.value = results;
});

const currentSlider = ref(0);
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
