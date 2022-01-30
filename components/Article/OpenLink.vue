<template>
  <div class="rounded-lg bg-slate-200 p-2 text-center dark:bg-slate-800">
    <p>
      <a :href="url" v-if="url" target="_blank">
        Read the full article here from the source website
        <icon-open-link class="inline" />
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
  },
};
</script>
