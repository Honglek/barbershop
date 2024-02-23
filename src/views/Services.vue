<template>
  <div>
    <!-- header -->
    <div>
      <navbar />
    </div>
    <div class="w-full relative top-14 bg-zinc-700">
      <!-- Banner -->
      <div class="w-full relative md:top-3 h-auto">
        <img class="w-full h-full object-cover" src="@/assets/Images/11.jpg" />
        <div
          class="w-full h-full bg-opacity-50 top-0 left-0 absolute bg-black flex flex-col justify-center items-center"
        >
          <div
            class="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white text-opacity-50"
          >
            Service
          </div>
        </div>
      </div>
      <accordion />
      <service />
      <fooTer />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import accordion from "@/components/accordion";
import service from "@/components/service";
import fooTer from "@/components/fooTer";
import { ref } from "@vue/reactivity";
export default {
  components: { navbar, accordion, service, fooTer },
  setup() {},
};
</script>
