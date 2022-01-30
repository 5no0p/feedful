<template>
  <section class="flex flex-grow">
    <aside class="article-list">
      <div class="flex h-full flex-col">
        <publisher-meta
          :post-count="articles.length"
          :publisher="articles[0].publisher"
        />

        <perfect-scrollbar
          class="flex-1 divide-y overflow-y-auto dark:divide-gray-700"
          id="articleList"
        >
          <article v-for="(article, i) in articles" :key="i">
            <article-card
              :article="article"
              @click.native="setPost(article, i)"
              class="cursor-pointer"
              :class="selectedIndex === i ? 'selected-post' : null"
            />
          </article>
        </perfect-scrollbar>
      </div>
    </aside>
    <article-preview
      :article="selectedPost"
      v-if="selectedPost"
      @close="selectedPost = null"
      ref="article"
    />
    <article-preview-placeholder v-else />
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedPost: null,
      selectedIndex: null,
    };
  },
  methods: {
    timeago(date) {
      return timeago.format(date);
    },
    setPost(article, index) {
      this.selectedIndex = index;
      this.selectedPost = article;
      this.$nextTick(() => {
        this.$refs.article.scrollToTop();
      });
    },
  },
  async asyncData({ $content, params }) {
    const articles = await $content(params.publication).fetch();
    return { articles };
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        let ele = document.getElementById("articleList");
        console.log(ele);
        ele.scrollTop = 0;
      });
    },
  },
};
</script>

<style scoped>
.article-list {
  @apply sticky top-0 h-screen w-96 overflow-y-auto border-r border-gray-200  dark:border-gray-700 dark:bg-gray-900;
}
.selected-post {
  @apply bg-gray-200 dark:bg-gray-800;
}
</style>
