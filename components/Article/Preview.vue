<template>
  <div class="flex-grow">
    <div class="flex h-screen flex-col">
      <nav
        class="flex-between h-12 border-b border-gray-300 px-4 dark:border-gray-700"
      >
        <div class="flex-space-x-2">
          <button
            v-tooltip="'Close'"
            @click="$emit('close')"
            class="rounded-lg p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <icon-close class="h-5 w-5" />
          </button>
          <p class="text-sm font-semibold">Article</p>
        </div>
        <div class="flex-space-x-2">
          <button
            v-tooltip="'Bookmark'"
            class="rounded-lg p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <icon-bookmark class="h-5 w-5" />
          </button>
          <button
            v-tooltip="'Full Screen'"
            class="rounded-lg p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <icon-fullscreen class="h-5 w-5" />
          </button>
          <button
            v-tooltip="'Share Article'"
            class="rounded-lg p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <icon-share class="h-5 w-5" />
          </button>
          <a
            :href="article.url"
            target="_blank"
            v-tooltip="'Open Article'"
            class="rounded-lg p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <icon-open-link class="h-5 w-5" />
          </a>
        </div>
      </nav>
      <perfect-scrollbar class="flex-1 overflow-y-auto" id="articleContent">
        <div
          class="prose prose-slate prose-img:rounded-lg dark:prose-img:border-gray-300 dark:prose-invert mx-auto py-12"
        >
          <article-meta
            :date="article.date"
            :author="article.author"
            class="mb-4"
          />
          <h1>{{ article.title }}</h1>
          <div v-html="article.content" v-if="article.content"></div>
          <div v-else>
            <img
              v-if="article.image"
              :src="article.image"
              :alt="article.title"
              class="h-auto w-full rounded-lg object-cover"
            />
            <article-image-placeholder v-else class="mb-8 h-[50vh]" />
            <blockquote>{{ article.description }}</blockquote>
          </div>
          <p class="isHackerNews">{{ article.description }}</p>
          <article-open-link :url="article.url" />
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isHackerNews() {
      return this.$route.params.publication === "hackernews";
    },
  },
  methods: {
    scrollToTop() {
      let ele = document.getElementById("articleContent");
      ele.scrollTop = 0;
    },
  },
};
</script>

<style>
.prose iframe {
  width: 100% !important;
  display: none !important;
}
</style>
