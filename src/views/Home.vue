<template>
  <div>
    <!-- header -->
    <div>
      <navbar />
    </div>
    <div class="w-full relative top-14 bg-zinc-700">
      <!-- Banner -->
      <div class="w-full relative md:top-3 h-auto text-white font-mono">
        <img class="w-full object-cover h-full" src="@/assets/Images/18.jpeg" />
        <div class="w-full h-full bg-opacity-50 top-0 left-0 absolute bg-black">
          <div
            class="absolute bottom-5 sm:bottom-9 md:bottom-14 lg:bottom-20 left-6 sm:left-9 md:left-12 lg:left-16 text-white"
          >
            <div ref="text1" class="animationText text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 -rotate-90"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
                <path
                  d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z"
                />
              </svg>
            </div>
            <div
              ref="text2"
              class="animationText text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold"
            >
              Our Hair Style Make Your Look Elegance
            </div>
            <div
              ref="text3"
              class="animationText text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Achieve your Dream Style
            </div>
          </div>
          <div
            class="absolute -bottom-3.5 sm:-bottom-4 md:-bottom-6 lg:-bottom-9 left-3 sm:left-4 md:left-6 lg:left-9"
          >
            <h1
              class="prevent-select text-orange-500 opacity-60 text-xl sm:text-3xl md:text-5xl lg:text-7xl text-transparent text-stroke-3 font-bold font-serif"
            >
              GET MORE CONFIDENT
            </h1>
          </div>
        </div>
      </div>
      <div><barber /></div>
      <div><service /></div>
      <div><gallery :images="images" /></div>
      <div><frmContact /></div>
      <div><fooTer /></div>
      <!-- <div class="text-black" style="height: 900px">2</div> -->
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar";
import fooTer from "@/components/fooTer";
import barber from "@/components/barber";
import service from "@/components/service";
import gallery from "@/components/gallery";
import frmContact from "@/components/frmContact";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
// import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { navbar, fooTer, barber, service, gallery, frmContact },
  setup() {
    const text1 = ref(null);
    const text2 = ref(null);
    const text3 = ref(null);
    onMounted(() => {
      const tl = gsap.timeline({ delay: 0.2, opacity: 0, paused: true });
      tl.from(text1.value, { y: "20", autoAlpha: 0, duration: 1 });
      // tl.from(text2.value, { y: "20", autoAlpha: 0, duration: 0.5 });
      tl.from(text3.value, { y: "10", autoAlpha: 0, duration: 0.7 }, "+=1");
      tl.play();
      const chars = text2.value.innerText.split("");
      text2.value.innerHTML = ""; // Clear the content to rebuild with spans for each character

      chars.forEach((char, index) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.opacity = 0;
        text2.value.appendChild(charSpan);

        gsap.to(charSpan, {
          duration: 2,
          y: 100,
          opacity: 1,
          delay: index * 0.05,
          ease: "power4.out",
        });
      });
    });
    const images = ref([
      { url: require("@/assets/Images/9.jpeg") },
      { url: require("@/assets/Images/11.jpg") },
      { url: require("@/assets/Images/5.jpg") },
      { url: require("@/assets/Images/10.jpg") },
      { url: require("@/assets/Images/1.jpg") },
      { url: require("@/assets/Images/8.jpg") },
      { url: require("@/assets/Images/4.jpg") },
      { url: require("@/assets/Images/3.jpg") },
    ]);
    return { images, text1, text2, text3 };
  },
};
</script>
<style>
.text-stroke-3 {
  -webkit-text-stroke: 2px #f97316;
}
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
