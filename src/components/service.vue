<template>
  <div class="w-full bg-black text-white py-4 sm:py-8 md:py-10 ">
    <div
      class="w-11/12 m-auto text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <div class="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 -rotate-90"
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
        class="text-orange-500 font-bold font-serif text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        Our Service
      </div>
      <p class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2">
        Seed spirit replenish cattle one moved air created. Them fill dont be
        fed isnt to he shall god good spirit they are the. Hath Itself their
        second ifruitful a moving their creature living every
      </p>
      <!-- card -->
      <div
        class="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 py-2 sm:py-4 md:py-6 lg:py-8"
      >
        <!-- 1 -->
        <div ref="card1" class="w-3/12 h-auto rounded-lg">
          <div class="w-full">
            <img
              class="w-full h-full object-contain object-center"
              src="@/assets/Images/4.jpg"
            />
          </div>
          <div class="flex justify-center my-2 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
            class="font-bold font-serif underline underline-offset-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            <a href="services" @click="goTo">Haircut Style</a>
          </div>
          <div class="mt-2 mb-1 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut
          </div>
        </div>
        <!-- 2 -->
        <div ref="card2" class="w-3/12 h-auto rounded-lg">
          <div class="w-full">
            <img
              class="w-full h-full object-contain object-center"
              src="@/assets/Images/17.jpg"
            />
          </div>
          <div class="flex justify-center my-2 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
            class="font-bold font-serif underline underline-offset-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            <a href="services" @click="goTo">Beard Triming</a>
          </div>
          <div class="mt-2 mb-1 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut
          </div>
        </div>
        <!-- 3 -->
        <div ref="card3" class="w-3/12 h-auto rounded-lg">
          <div class="w-full">
            <img
              class="w-full h-full object-contain object-center"
              src="@/assets/Images/8.jpg"
            />
          </div>
          <div class="flex justify-center my-2 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
            class="font-bold font-serif underline underline-offset-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            <a href="services" @click="goTo">Smooth Shave</a>
          </div>
          <div class="mt-2 mb-1 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  methods: {
    goTo() {
      localStorage.setItem("activePage", "services");
    },
  },
  setup() {
    const card1 = ref(null);
    const card2 = ref(null);
    const card3 = ref(null);

    onMounted(() => {
      gsap.from(card1.value, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: card1.value,
          start: "top 90%",
          end: "center center",
          scrub: true,
        },
      });
      gsap.from(card2.value, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: card2.value,
          start: "top 90%",
          end: "center center",
          scrub: true,
        },
      });
      gsap.from(card3.value, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: card3.value,
          start: "top 90%",
          end: "center center",
          scrub: true,
        },
      });
    });
    return { card1, card2, card3 };
  },
};
</script>
<style scoped>
.card {
  margin: 20px 0;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>
