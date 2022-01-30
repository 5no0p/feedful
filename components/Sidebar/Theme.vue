<template>
  <button
    class="relative flex h-8 w-14 cursor-pointer items-center rounded-full bg-gray-300 p-1 duration-300 focus:outline-none"
    :class="{ 'bg-gray-700': isDarkMode }"
    :aria-checked="isDarkMode.toString()"
    @click="toggle"
  >
    <IconsMoon class="absolute left-1.5" />
    <IconsSun class="absolute right-1.5" />
    <div
      class="h-6 w-6 transform rounded-full bg-white shadow-md duration-300"
      :class="{ 'translate-x-6': isDarkMode }"
    ></div>
  </button>
</template>

<script>
export default {
  computed: {
    isDarkMode() {
      return this.$colorMode.preference === "dark" ? true : false;
    },
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    },
  },
};
</script>
