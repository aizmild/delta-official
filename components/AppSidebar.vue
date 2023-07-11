<template>
  <aside>
    <div
      id="drawer-right-example"
      class="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-black w-80"
      tabindex="-1"
      aria-labelledby="drawer-right-label"
    >
      <button
        type="button"
        data-drawer-hide="drawer-right-example"
        aria-controls="drawer-right-example"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>

      <div class="text-sm sm:text-base lg:text-lg font-normal text-white mt-8">
        <NuxtLink class="block mb-4 sm:mb-6 lg:mb-8" to="/">
          <span class="sr-only">logo</span>
          <img
            class="w-32 sm:w-40 mx-auto"
            src="assets/img/logo.png"
            alt="logo"
          />
        </NuxtLink>
        <NuxtLink
          class="block w-full hover:bg-slate-900 hover:cursor-pointer rounded-xl p-4 sm:p-6"
          to="/"
          >หน้าหลัก</NuxtLink
        >
        <NuxtLink
          class="block w-full hover:bg-slate-900 hover:cursor-pointer rounded-xl p-4 sm:p-6"
          to="/article"
        >
          <span>
            บทความ
            <span
              class="rounded-full bg-sky-500 px-1.5 py-0.5 text-xs text-white"
            >
              New
            </span>
          </span>
        </NuxtLink>
        <NuxtLink
          class="block w-full hover:bg-slate-900 hover:cursor-pointer rounded-xl p-4 sm:p-6"
          to="/rate"
          >อัตราชนะ
        </NuxtLink>
      </div>
      <div class="border-t border-slate-900/15 my-4"></div>
      <div class="text-sm sm:text-base lg:text-lg font-normal text-white">
        <a
          class="block w-full hover:bg-slate-900 hover:cursor-pointer rounded-xl p-4 sm:p-6"
          href="https://wallet.deltabet.online/login"
          >เข้าสู่ระบบ</a
        >
        <a
          class="rounded-lg text-sm font-semibold p-4 bg-rose-700 text-white hover:bg-rose-500 my-4 block text-center"
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
  </aside>
</template>