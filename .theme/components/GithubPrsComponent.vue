<template>
  <div class="github-prs">
    <div class="repos">
      <ul>
        <li v-for="(repo, index) in repos" :key="repo">
          <button @click="() => currentSlider = index">
            {{ repo }}
          </button>
        </li>
      </ul>
    </div>
    <div class="prs">
      <Slider>
        <Slide v-for="pr in repository[currentSlider]" :key="pr.id">
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
        </Slide>
      </Slider>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  repos: {
    type: Array,
    default: () => ["mouseless.codes", "do"]
  }
});
const { getActivePullRequests } = useGitHub();

const repository = ref([]);

onBeforeMount(async() => {
  const results = [];
  for(let i = 0; i < props.repos.length; i++) {
    const result = await getActivePullRequests(props.repos[i]);
    results.push(result);
  }

  repository.value = results;
});

const currentSlider = ref(0);
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
