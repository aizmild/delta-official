<script setup>
import { onMounted } from "vue";
import { initDrawers } from "flowbite";

onMounted(() => {
  initDrawers();
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 w-full flex-none text-sm font-semibold leading-6 text-white bg-opacity-80 backdrop-blur-sm"
  >
    <nav class="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
      <div class="relative flex items-center py-[2.125rem]">
        <NuxtLink class="mr-auto flex-none" to="/">
          <span class="sr-only">logo</span>
          <img class="w-32 sm:w-40" src="assets/img/logo.png" alt="logo" />
        </NuxtLink>
        <div class="hidden lg:flex lg:items-center">
          <NuxtLink to="/">หน้าหลัก</NuxtLink>
          <NuxtLink class="ml-8" to="/article"> บทความ </NuxtLink>
          <div
            class="ml-2 hidden rounded-full bg-sky-500 px-1.5 py-0.5 text-xs text-white sm:block"
          >
            New
          </div>
          <NuxtLink class="ml-8" to="/rate">อัตราชนะ </NuxtLink>
        </div>
        <button
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
          data-drawer-backdrop="true"
          class="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
        >
          <span class="sr-only">Open navigation</span
          ><svg viewBox="0 0 24 24" class="h-6 w-6 stroke-white">
            <path
              d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
        </button>
        <div
          class="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8"
        >
          <a href="https://wallet.deltabet.online/login">เข้าสู่ระบบ</a>
          <a
            class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-rose-700 text-white hover:bg-rose-500 -my-2.5 ml-8"
            href="https://wallet.deltabet.online/register"
          >
            <span>
              สมัครสมาชิก
              <span aria-hidden="true">
                <Icon name="pixelarticons:user" color="white" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>