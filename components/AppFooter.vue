<template>
  <footer
    class="fixed bottom-0 left-0 z-20 w-full max-w-screen-2xl lg:relative lg:border-t shadow lg:shadow-none lg:flex lg:items-center lg:justify-between p-4 sm:p-6 lg:p-8 bg-gray-300 dark:bg-transparent bg-opacity-80 lg:bg-opacity-100 backdrop-blur-sm lg:backdrop-blur-none mx-auto lg:mt-auto"
  >
    <NuxtLink class="hidden lg:block" to="/">
      <span class="sr-only">logo</span>
      <img class="w-16 sm:w-20" src="assets/img/logo.png" alt="logo" />
    </NuxtLink>
    <span
      class="hidden lg:block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2023
      <a href="https://flowbite.com/" class="hover:underline">DELTA OFFICIAL</a
      >. All Rights Reserved.
    </span>
    <div class="flex flex-row gap-x-4 sm:gap-x-6 lg:gap-x-8 lg:hidden">
      <div class="basis-6/12">
        <a
          class="rounded-lg text-sm font-semibold p-4 bg-indigo-700 text-white hover:bg-indigo-500 block text-center"
          href="https://wallet.deltabet.online/login"
        >
          <span>
            ล็อกอิน
            <span aria-hidden="true">
              <Icon name="pixelarticons:login" color="white" />
            </span>
          </span>
        </a>
      </div>
      <div class="basis-6/12">
        <a
          class="rounded-lg text-sm font-semibold p-4 bg-rose-700 text-white hover:bg-rose-500 block text-center"
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
  </footer>
</template>