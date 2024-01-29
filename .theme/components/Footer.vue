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
        <ContentRenderer>
          <ContentRendererMarkdown :value="footer" />
        </ContentRenderer>
        <ContentQuery
          v-slot="{ data: menus }"
          path="/"
          :where="{
            _dir: { $eq: '' },
            _path: { $not: { $in: excludePath } },
          }"
        >
          <div class="links">
            <div v-for="menu in menus" :key="menu.title" class="link">
              <h5>
                <NuxtLink :to="menu._path == $route.path ? '' : menu._path">
                  {{ menu.title }}
                </NuxtLink>
              </h5>
              <ul>
                <li v-for="link in menu?.body.toc.links" :key="link.id">
                  <NuxtLink :to="menu._path + '#' + link.id">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </ContentQuery>
      </div>
      <div class="copyright">
        <NuxtLink to="/">
          <img class="mouseless logo mono">
        </NuxtLink>
        <span class="copyright-text"> &copy; {{ footer.copyright }} </span>
      </div>
    </ContentQuery>
  </footer>
</template>
<script setup>
const excludePath = ["/footer", "/header", "/", "/not-found", "/demo", "/readme"];
</script>
<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: solid 2px var(--color-fg-box);

  .content {
    display: flex;
    flex-direction: row;

    .links {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .copyright {
    .logo {
      opacity: 0.50;
      height: 1em;
    }
  }
}
</style>
