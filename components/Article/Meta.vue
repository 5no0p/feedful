<template>
  <div class="flex-between font-mono text-xs text-gray-500">
    <div class="flex items-center space-x-2">
      <icon-person />
      <span>{{ authorDetails }}</span>
    </div>
    <div class="flex items-center space-x-2" v-if="date">
      <icon-clock />
      <span>{{ timestamp }}</span>
    </div>
  </div>
</template>

<script>
import * as timeago from "timeago.js";

export default {
  props: {
    author: {
      type: String,
      default: "Unknown",
    },
    date: {
      type: String,
      default: "Unknown",
    },
  },
  computed: {
    authorDetails() {
      if (!this.author || this.author.includes("@")) return "Unknown";
      return this.author;
    },
    timestamp() {
      if (this.date) return timeago.format(this.date);
      return null;
    },
  },
};
</script>
