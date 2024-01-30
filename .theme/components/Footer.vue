<template>
  <footer>
    <ContentQuery
      v-slot="{ data: footer }"
      find="one"
      path="/"
      :where="{
        _path: { $eq: '/footer' },
      }"
    >
      <div class="content">
        <div>
          <NuxtLink to="/">
            <img class="mouseless logo mono">
          </NuxtLink>
          <ContentRenderer>
            <ContentRendererMarkdown :value="footer" />
          </ContentRenderer>
        </div>
        <ContentQuery
          v-slot="{ data: menus }"
          path="/"
          :where="{
            _dir: { $eq: '' },
            _path: { $not: { $in: excludePath } },
          }"
        >
          <div class="links">
            <ul>
              <li v-for="menu in menus" :key="menu.title" class="link">
                <NuxtLink :to="menu._path == $route.path ? '' : menu._path">
                  {{ menu.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </ContentQuery>
      </div>
      <div class="copyright">
        <br>
        <span class="copyright-text"> Mouseless &copy; {{ footer.copyright }} </span>
      </div>
    </ContentQuery>
  </footer>
</template>
<script setup>
const excludePath = ["/footer", "/header", "/", "/not-found", "/demo", "/readme"];
</script>
<style lang="scss" scoped>
footer {
  margin-top: 2em;
  border-top: solid 2px var(--color-fg-box);

  .logo {
    opacity: 0.50;
    height: 1em;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1em;

    .links {
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>
