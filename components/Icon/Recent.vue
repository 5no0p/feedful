
<template>
  <svg width="1em" height="1em" viewBox="0 0 24 24" v-if="active">
    <g fill="none">
      <path
        d="M17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3h11.5z"
        fill="currentColor"
      ></path>
      <path
        d="M21 8.5v3.522A6.5 6.5 0 0 0 12.022 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5h18z"
        fill="currentColor"
      ></path>
      <path
        d="M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0zm-5.5 0h2a.5.5 0 1 1 0 1H17a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v2.5z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
  <svg width="1em" height="1em" viewBox="0 0 24 24" v-else>
    <g fill="none">
      <path
        d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772a6.471 6.471 0 0 1-.709-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v2.813a6.471 6.471 0 0 1 1.5.709V6.25zM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75z"
        fill="currentColor"
      ></path>
      <path
        d="M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0zm-5.5 0h2a.5.5 0 0 1 0 1H17a.5.5 0 0 1-.5-.491v-3.01a.5.5 0 0 1 1 0V17.5z"
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
  name: "FluentCalendarClock24Regular",
};
</script>