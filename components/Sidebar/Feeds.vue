<template>
  <aside
    class="sticky top-0 h-screen w-64 overflow-y-auto border-r border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
  >
    <div class="flex h-full flex-col">
      <nav
        class="flex-between h-12 border-b border-gray-300 px-4 dark:border-gray-700"
      >
        <nuxt-link to="/" title="Home" class="flex-space-x-2">
          <base-logo class="h-6 w-6" />
          <p class="text-lg font-black tracking-wide">feedful</p>
        </nuxt-link>
        <div class="flex items-center space-x-2">
          <a
            href="https://github.com/fayazara/feedful"
            target="_blank"
            title="Github"
            class="navbar-button"
          >
            <icon-github class="h-4 w-4" />
          </a>
        </div>
      </nav>
      <perfect-scrollbar class="flex-1 overflow-y-auto">
        <ul
          class="border-b border-gray-200 py-6 px-2 text-sm dark:border-gray-700"
        >
          <li class="flex-between p-2">
            <div class="flex items-center space-x-4">
              <icon-bookmark class="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <p>Bookmarks</p>
            </div>
            <p class="text-xs text-gray-400">8</p>
          </li>
          <li class="flex-between p-2">
            <div class="flex items-center space-x-4">
              <icon-recently-read
                class="h-6 w-6 text-gray-500 dark:text-gray-400"
              />
              <p>Recently Read</p>
            </div>
            <p class="text-xs text-gray-400">3</p>
          </li>
        </ul>
        <div class="space-y-6 py-6">
          <div v-for="group in publications" :key="group.path">
            <div
              class="items center flex space-x-2 pl-4 text-gray-400 dark:text-gray-600"
            >
              <component :is="`icon-${group.path}`" class="h-4 w-4" />
              <p class="font-mono text-xs uppercase">
                {{ group.type }}
              </p>
            </div>
            <ul class="mt-1">
              <li
                v-for="publication in group.publications"
                :key="publication.key"
              >
                <nuxt-link
                  :to="publication.key"
                  class="active-feed flex items-center space-x-4 py-2 px-4"
                >
                  <component :is="publication.icon" class="h-6 w-6 rounded" />
                  <p class="text-sm">{{ publication.name }}</p>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </perfect-scrollbar>
      <footer
        class="flex-between border-t border-gray-200 px-4 py-3 dark:border-gray-700"
      >
        <div class="flex-between">
          <div class="flex items-center space-x-4">
            <icon-settings
              class="h-6 w-6 text-gray-500 dark:text-gray-400"
              active
            />
            <p class="text-sm uppercase">Settings</p>
          </div>
        </div>
        <base-toggle />
      </footer>
    </div>
  </aside>
</template>

<script>
import * as timeago from "timeago.js";

import publications from "~/constants/publications.json";
export default {
  data() {
    return {
      publications,
      t: process.server ? 0 : window.__NUXT__.renderedOn,
      lastUpdated: "",
    };
  },
  mounted() {
    this.lastUpdated = timeago.format(this.t);
  },
};
</script>

<style>
.nuxt-link-exact-active.active-feed {
  @apply relative bg-gray-200 dark:bg-gray-800;
}
.nuxt-link-exact-active.active-feed::after {
  content: "";
  position: absolute;
  height: 40px;
  @apply absolute top-0 right-0 w-1 bg-gray-600;
}
</style>
