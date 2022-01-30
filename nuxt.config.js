export default {
  target: "static",
  head: {
    title: "feedful",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://cdn.splitbee.io/sb.js",
        async: true,
        defer: true,
        hid: "splitbee",
      },
    ],
  },
  css: [
    "@/assets/main.css",
    "@/assets/tooltip.css",
    "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css",
  ],
  plugins: ["~/plugins/scrollbar.js", "~/plugins/tooltip.js"],
  components: true,
  buildModules: ["@nuxt/postcss8"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxt/content"],
  axios: {
    baseURL: "/",
  },
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  content: {},
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
