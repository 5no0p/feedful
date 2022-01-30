<template>
  <div class="w-full space-y-2 p-4">
    <img
      v-if="article.image"
      :src="article.image"
      :alt="article.title"
      class="h-40 w-full rounded-md object-cover"
    />
    <article-image-placeholder v-else />
    <p class="text-sm">{{ article.title }}</p>
    <article-meta :date="article.date" :author="article.author" />
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
};
</script>
