<template>
  <div class="w-full bg-zinc-700">
    <div
      class="w-full text-white font-mono py-5 sm:py-8 md:py-12 lg:py-16 lg:pt-36 lg:pb-36 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <div class="w-11/12 m-auto grid grid-cols-1 sm:grid-cols-2">
        <!-- images -->
        <div class="w-full sm:px-5 md:px-10 pt-3">
          <div class="w-10/12 sm:w-full h-full mx-auto">
            <div
              class="relative w-6/12 h-32 sm:h-48 md:h-56 lg:h-72 float-start rounded-xl border-dashed border-4 p-1 border-orange-500"
            >
              <img
                class="w-full h-full object-cover rounded-xl"
                src="@/assets/Images/5.jpg"
              />
              <div
                class="w-full h-full opacity-30 top-0 left-0 absolute bg-black rounded-xl"
              ></div>
            </div>
            <div
              class="relative w-5/12 h-32 sm:h-48 md:h-56 lg:h-72 float-end rounded-xl border-dashed border-4 p-1 border-white mt-5 sm:mt-10"
            >
              <img
                class="w-full h-full object-cover rounded-xl"
                src="@/assets/Images/7.jpg"
              />
              <div
                class="w-full h-full opacity-30 top-0 left-0 absolute bg-black rounded-xl"
              ></div>
            </div>
          </div>
        </div>
        <!-- about us -->
        <div class="w-full sm:px-5 md:px-10 pt-3">
          <div class="w-10/12 sm:w-full mx-auto">
            <div
              class="font-serif font-bold text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              About us
            </div>
            <p class="py-1 sm:py-2 md:py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing eliteiusmod
              tempor incididunt ut labore et dolore magna aliqua. Qpsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Quis ipsum suspendisse ultr.
            </p>
            <div class="py-1 sm:py-2 md:py-3">
              Opening Hour: 8:00am - 10:00pm
            </div>
            <div
              class="inline-block p-1 px-2 sm:p-2 sm:px-3 md:px-4 lg:px-5 bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-semibold cursor-pointer transition duration-300"
            >
              <a href="about" @click="goTo">About us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo() {
      localStorage.setItem("activePage", "about");
    },
  },
};
</script>
<style></style>
