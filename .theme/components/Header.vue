<template>
  <header class="header s s--pv_md">
    <NuxtLink class="header__logo" to="/">
      <img class="mouseless logo d d--v_m">
      <img class="mouseless logo short d d--h_m">
    </NuxtLink>
    <nav class="menu header__menu">
      <NuxtLink
        v-for="menu in menus"
        :key="menu['menu-title']"
        :class="{
          'menu__item--selected': menu._path === root,
          'link': menu._path !== root
        }"
        :to="menu._path == $route.path ? '' : menu._path"
        class="menu__item s s--mh_sm s--mv_xs s--pb_sm"
      >
        {{ menu['menu-title'] }}
      </NuxtLink>
      <LinkButton
        text="contact us"
        class="menu__item s s--ml_sm"
        to="#contact-us"
      />
    </nav>
  </header>
</template>
<script setup>
import { useRoute } from "#imports";
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
const menus = store.pageMeta.filter(m => !!m.position);
const route = useRoute();
const root = computed(() => `/${route.path.split("/")[1]}`);
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;

  &__logo {
    align-content: center;
    line-height: 0;
  }
}

.menu {
  &__item {
    text-decoration: none;
    font-family: var(--font-default);

    &--selected {
      color: var(--color-dark-link);
      border-bottom: solid 1px var(--color-dark-link);
    }
  }
}

.link {
  &:hover {
    color: var(--color-dark-link-hover);
    border-bottom: solid 1px var(--color-dark-link-hover);
  }
}
</style>
