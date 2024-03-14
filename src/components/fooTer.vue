<template>
  <div class="w-full bg-zinc-900">
    <div
      class="w-11/12 mx-auto py-5 text-white md:text-center pt-10 md:pt-14 lg:pt-16 grid col-1 md:grid-cols-3 space-y-1 sm:space-y-3 md:space-y-0 font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <!-- md:center -->
      <div class="w-full order-1 md:order-2 p-1 sm:p-2 md:p-3 md:mt-16 lg:px-5">
        <div
          class="prevent-select text-white font-serif font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          Barbershop<span class="text-orange-500"> Gold</span>
        </div>
        <div class="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis ipsum
          suspendisse.
        </div>
      </div>
      <!-- md:left -->
      <div class="w-full order-2 md:order-1 p-1 sm:p-2 md:p-3 lg:px-5">
        <div
          class="cursor-default font-serif font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          Contact
        </div>
        <div class="text-gray-400">PhoneNumber: 111-222-3333</div>
        <div class="text-gray-400">Email: barbershop@gmail.com</div>
      </div>
      <!-- md:right -->
      <div class="w-full order-3 md:order-3 p-1 sm:p-2 md:p-3 lg:px-5">
        <div
          class="cursor-default font-serif font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >
          Follow
        </div>
        <div class="text-gray-400 cursor-pointer">
          <a class="hover:text-orange-400">Facebook</a>
        </div>
        <div class="text-gray-400 cursor-pointer">
          <a class="hover:text-orange-400">Instagram</a>
        </div>
        <div class="text-gray-400 cursor-pointer">
          <a class="hover:text-orange-400">Youtube</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
