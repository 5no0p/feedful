
<template>
  <svg width="1em" height="1em" viewBox="0 0 24 24" v-if="active">
    <g fill="none">
      <path
        d="M21 8.5v3.522A6.5 6.5 0 0 0 12.022 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5h18z"
        fill="currentColor"
      ></path>
      <path
        d="M17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3h11.5z"
        fill="currentColor"
      ></path>
      <path
        d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11zm-.404-9h1.433a.5.5 0 0 1 .468.676L18.5 16h.634a.47.47 0 0 1 .394.726l-2.625 4.038a.518.518 0 0 1-.926-.446L16.75 18h-.778a.5.5 0 0 1-.469-.676l1.125-3a.5.5 0 0 1 .468-.324z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
  <svg width="1em" height="1em" viewBox="0 0 24 24" v-else>
    <g fill="none">
      <path
        d="M17.75 3A3.25 3.25 0 0 1 21 6.25v5.772a6.471 6.471 0 0 0-1.5-.709V8.5h-15v9.25c0 .966.784 1.75 1.75 1.75h5.063c.173.534.412 1.037.709 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75z"
        fill="currentColor"
      ></path>
      <path
        d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11zm-.404-9h1.433a.5.5 0 0 1 .468.676L18.5 16h.634a.47.47 0 0 1 .394.726l-2.625 4.038a.518.518 0 0 1-.926-.446L16.75 18h-.778a.5.5 0 0 1-.469-.676l1.125-3a.5.5 0 0 1 .468-.324z"
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
  name: "FluentCalendarCheckmark24Regular",
};
</script>