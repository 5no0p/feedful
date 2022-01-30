<template>
  <section
    class="bg-squares relative flex flex-grow items-center justify-center"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-white to-transparent dark:from-gray-900"
    ></div>
    <div class="relative space-y-4 p-4 text-center">
      <img src="/logo.png" class="mx-auto h-20 w-20" alt="" />
      <h1 class="text-3xl font-black tracking-widest">feedful</h1>
      <p class="text-gray-500">
        Feedful is an fast, opinionated and open source rss reader for popular
        websites.
      </p>
      <p class="font-mono text-gray-500">
        Made specially for tech and science news.
      </p>
      <a
        class="flex-space-x-2 mx-auto max-w-max rounded-lg border bg-gradient-to-b from-white to-gray-100 px-3 py-2 shadow shadow-slate-200/50 dark:border-gray-800 dark:from-gray-800 dark:to-gray-900 dark:shadow-slate-900/50"
        href="https://github.com/fayazara/feedful"
        target="_blank"
      >
        <icon-github />
        <span>Find us on Github</span>
      </a>
    </div>
  </section>
</template>
