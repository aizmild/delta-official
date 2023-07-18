<script setup lang="ts">
useServerSeoMeta({
  title: "DELTA OFFICIAL",
  ogTitle: "DELTA OFFICIAL",
  description:
    "DELTA OFFICIAL - สล็อตออนไลน์ คาสิโนออนไลน์ เว็บตรง ฝาก-ถอน auto 30 วิ",
  ogDescription:
    "DELTA OFFICIAL - สล็อตออนไลน์ คาสิโนออนไลน์ เว็บตรง ฝาก-ถอน auto 30 วิ",
});
</script>

<template>
  <div>
    <main>
      <AppHeader />
      <AppSidebar />
      <article class="min-h-[82vh]">
        <slot />
      </article>
      <AppFooter />
    </main>
    <!-- <div drawer-backdrop="" class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div> -->
  </div>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>