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
            Gallery
          </div>
        </div>
      </div>
      <gallery :images="images" />
      <fooTer />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import gallery from "@/components/gallery";
import fooTer from "@/components/fooTer";
import { ref } from "@vue/reactivity";

export default {
  components: { navbar, gallery, fooTer },
  setup() {
    const images = ref([
      { url: require("@/assets/Images/9.jpeg") },
      { url: require("@/assets/Images/11.jpg") },
      { url: require("@/assets/Images/2.jpg") },
      { url: require("@/assets/Images/5.jpg") },
      { url: require("@/assets/Images/10.jpg") },
      { url: require("@/assets/Images/13.jpg") },
      { url: require("@/assets/Images/1.jpg") },
      { url: require("@/assets/Images/8.jpg") },
      { url: require("@/assets/Images/4.jpg") },
      { url: require("@/assets/Images/3.jpg") },
      { url: require("@/assets/Images/2.jpg") },
      { url: require("@/assets/Images/7.jpg") },
      { url: require("@/assets/Images/6.jpg") },
      { url: require("@/assets/Images/12.jpg") },
      { url: require("@/assets/Images/5.jpg") },
    ]);
    return { images };
  },
};
</script>
