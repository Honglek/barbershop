<template>
  <div>
    <!-- header -->
    <div>
      <navbar />
    </div>
    <div class="w-full relative top-14 bg-zinc-700">
      <div class="w-full relative md:top-3 h-auto">
        <img class="w-full h-full object-cover" src="@/assets/Images/11.jpg" />
        <div
          class="w-full h-full bg-opacity-50 top-0 left-0 absolute bg-black flex flex-col justify-center items-center"
        >
          <div
            class="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white text-opacity-50"
          >
            About us
          </div>
        </div>
      </div>
      <barber />
      <about />
      <fooTer />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import about from "@/components/about";
import barber from "@/components/barber";
import fooTer from "@/components/fooTer";
import { ref } from "@vue/reactivity";
export default {
  components: { navbar, about, barber, fooTer },
  setup() {},
};
</script>
