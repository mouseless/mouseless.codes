<template>
  <header class="header s s--pv_md">
    <NuxtLink class="header__logo" to="/">
      <img class="mouseless logo d d--v_m">
      <img class="mouseless logo short d d--h_m">
    </NuxtLink>
    <div
      v-if="menuShown"
      class="header__overlay d d--h_s"
      @click="close"
    />
    <div class="header__menu-container">
      <nav
        class="header__menu menu"
        :class="{ 'menu--active': menuShown }"
      >
        <NuxtLink
          to="javascript:void(0)"
          class="menu__item d d--h_s s s--mb_sm f f--xl"
          @click="toggle"
        >
          <i class="fa-solid fa-close" />
        </NuxtLink>
        <NuxtLink
          v-for="menu in menus"
          :key="menu['menu-title']"
          class="menu__item s s--mh_sm s--mv_xs s--pb_sm"
          :class="{
            'menu__item--selected': menu._path === root,
            'link': menu._path !== root
          }"
          :to="menu._path == $route.path ? '' : menu._path"
          @click="close"
        >
          {{ menu['menu-title'] }}
        </NuxtLink>
      </nav>
      <nav class="header__menu">
        <LinkButton
          text="contact us"
          class="header__menu-item"
          to="#contact-us"
        />
        <NuxtLink
          to="javascript:void(0)"
          class="header__menu-item d d--h_s s s--ml_md"
          @click="toggle"
        >
          <i class="fa-solid fa-bars" />
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { useRoute } from "#imports";
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
const menus = store.pageMeta.filter(m => !!m.position);
const route = useRoute();
const root = computed(() => `/${route.path.split("/")[1]}`);
const menuShown = ref(false);

function toggle() { menuShown.value = !menuShown.value; }
function close() { menuShown.value = false; }
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;

  &__logo {
    align-content: center;
    line-height: 0;
  }

  &__menu {
    font-family: var(--font-default);
  }

  &__menu-container {
    display: flex;
    gap: var(--space-sm);
  }
}

.menu {
  padding-top: var(--space-xs);

  &__item {
    text-decoration: none;

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

@media (max-width: $page-s) {
  .header {
    padding: var(--space-sm) 0;

    &__overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: var(--color-darkgreen-900);
      opacity: 0.5;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
    }
  }

  .menu {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    min-width: $page-min*0.75;
    height: 100%;
    z-index: 1;
    padding-top: 0;
    border-left: solid var(--space-xs) var(--color-darkgreen-800);
    background-color: var(--color-darkgreen-900);

    &--active {
      display: flex;
    }

    &__item {
      color: var(--color-light-link);
      margin-left: var(--space-sm);
      padding: var(--space-xs) 0;

      &:hover {
        color: var(--color-light-link-hover);
        border-bottom: 0;
      }

      &--selected {
        color: var(--color-light-link);
        border-bottom: none;
        border-left: solid var(--space-xs) var(--color-light-link-hover);
        margin-left: calc(var(--space-xs) * -1);
        padding-left: var(--space-sm);

        &:hover {
          color: var(--color-light-link);
        }
      }
    }
  }
}
</style>
