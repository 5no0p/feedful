<template>
  <nav
    class="flex-between h-12 border-b border-gray-300 px-4 font-mono text-sm dark:border-gray-700"
  >
    <p class="font-semibold">{{ publisher }}</p>
    <p>{{ postCount }} posts</p>
  </nav>
</template>

<script>
export default {
  props: {
    publisher: {
      type: String,
      default: "Unknown",
    },
    postCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>
