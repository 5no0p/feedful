<template>
  <button
    type="button"
    class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    role="switch"
    aria-checked="false"
    @click="toggle"
    :class="darkMode ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'"
  >
    <span class="sr-only">Use setting</span>
    <span
      class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-500"
      :class="darkMode ? 'translate-x-5' : 'translate-x-0'"
    >
      <span
        class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in"
        :class="
          darkMode
            ? 'opacity-0 duration-100 ease-out'
            : 'opacity-100 duration-200 ease-in'
        "
        aria-hidden="true"
      >
        <icon-sun class="h-3 w-3 text-gray-400" />
      </span>
      <span
        class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-100 ease-out"
        :class="
          darkMode
            ? 'opacity-100 duration-200 ease-in'
            : 'opacity-0 duration-100 ease-out'
        "
        aria-hidden="true"
      >
        <icon-moon class="h-3 w-3 text-indigo-600" />
      </span>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggle() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
