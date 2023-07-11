<template>
  <div>
    <main>
      <AppHeader />
      <AppSidebar />
      <article>
        <slot />
      </article>
      <AppFooter />
    </main>
  </div>
</template>

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