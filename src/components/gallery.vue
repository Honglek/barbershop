<template>
  <div class="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
    <div class="w-full m-auto text-center mt-10">
      <div
        class="text-black font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
      >
        OUR IMAGES GALLERY
      </div>
      <div
        class="uppercase font-serif font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        SOME IMAGES FROM OUR BARBER<span class="text-orange-500">SHOP</span>
      </div>
    </div>
    <div class="w-full md:pb-5 lg:pb-7">
      <div
        class="w-10/12 m-auto gap-x-4 md:gap-x-8 pt-2 columns-3 md:columns-4"
      >
        <transition-group appear @beforeEnter="beforeEnter" @enter="enter">
          <figure
            v-for="(image, index) in images"
            :key="index"
            :data-index="index"
            class="py-4"
          >
            <img class="object-cover" :src="image.url" />
          </figure>
        </transition-group>
      </div>
      <div v-if="images.length == 8" class="text-center my-5">
        <div
          class="bg-orange-500 text-white inline-block p-1 px-2 sm:p-2 sm:px-3 md:px-4 lg:px-5 hover:bg-white hover:text-orange-500 font-semibold cursor-pointer transition duration-300"
        >
          <a href="gallery" @click="goTo" class="font-mono">View More</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  props: ["images"],
  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";
    },
    enter(el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
          // start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 2,
        delay: el.dataset.index * 0.1,
        // ease: "sine.out(1)",
        ease: "power2.out",
      });
    },
    goTo() {
      localStorage.setItem("activePage", "gallery");
    },
  },
};
</script>
<style></style>
