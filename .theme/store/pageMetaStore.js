import { defineStore } from "pinia";

export const usePageMetaStore = defineStore("pageMetaStore", {
  state: () => ({
    pageMeta: {}
  }),
  actions: {
    setPageMeta(pageMeta) {
      this.pageMeta = pageMeta;
    }
  }
});
