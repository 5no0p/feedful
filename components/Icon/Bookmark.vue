
<template>
  <svg width="1em" height="1em" viewBox="0 0 24 24" v-if="active">
    <g fill="none">
      <path
        d="M6.19 21.854a.75.75 0 0 1-1.188-.61V6.25a3.25 3.25 0 0 1 3.25-3.25h7.499A3.25 3.25 0 0 1 19 6.249v14.996a.75.75 0 0 1-1.188.609l-5.811-4.181l-5.812 4.18z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
  <svg width="1em" height="1em" viewBox="0 0 24 24" v-else>
    <g fill="none">
      <path
        d="M6.19 21.854a.75.75 0 0 1-1.188-.61V6.25a3.25 3.25 0 0 1 3.25-3.25h7.499A3.25 3.25 0 0 1 19 6.249v14.996a.75.75 0 0 1-1.188.609l-5.811-4.181l-5.812 4.18zM17.5 6.249a1.75 1.75 0 0 0-1.75-1.75H8.253a1.75 1.75 0 0 0-1.75 1.75v13.532l5.062-3.64a.75.75 0 0 1 .876 0l5.06 3.64V6.25z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  name: "FluentBookmark24Regular",
};
</script>