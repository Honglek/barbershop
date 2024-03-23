<template>
  <div
    class="w-10/12 sm:w-11/12 md:w-10/12 lg:w-9/12 py-5 sm:px-5 lg:px-10 mx-auto my-10 grid grid-cols-1 sm:grid-cols-2"
  >
    <div class="w-full mx-auto sm:w-full sm:pr-1 md:pr-2 lg:pr-5 xl:pr-10">
      <img
        class="w-full h-full object-contain object-right-top px-5 sm:px-0 float-end"
        src="@/assets/Images/1.jpg"
      />
    </div>
    <!-- accordion -->
    <div class="w-full sm:pl-1 md:pl-2 lg:pl-3 pt-2 sm:pt-0 px-5 sm:px-0">
      <div
        class="text-orange-500 font-bold font-serif text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1 md:mb-2"
      >
        All WE DO FOR YOU
      </div>
      <div class="hs-accordion-group space-y-2">
        <div class="hs-accordion" v-for="(item, index) in type" :key="index">
          <button
            class="hs-accordion-toggle bg-black hs-accordion-active:bg-orange-500 hs-accordion-active:text-white text-orange-500 p-2 sm:p-3 md:px-4 inline-flex items-center w-full font-semibold font-serif text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-start hover:text-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-white dark:text-white"
            :aria-controls="'hs-basic-no-arrow-collapse-' + (index + 1)"
          >
            {{ item.name }}
          </button>
          <div
            :id="'hs-basic-no-arrow-collapse-' + (index + 1)"
            class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            :aria-labelledby="'hs-basic-no-arrow-heading-' + (index + 1)"
          >
            <div
              class="text-gray-800 dark:text-gray-200 space-y-2 sm:space-y-2 md:space-y-3 p-2 sm:p-3 md:px-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal"
            >
              <div
                class="flex justify-between"
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
              >
                <p>
                  {{ child.name }}
                </p>
                <p class="font-bold">
                  {{ child.price }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  data() {
    return {
      activeAccordion: null,
    };
  },
  setup() {
    const type = ref([
      {
        name: "Hair Cutting",
        children: [
          {
            name: "MEN’S CUTS",
            price: "$40+",
          },
          {
            name: "CHILDRENS CUTS",
            price: "$25+",
          },
          {
            name: "BANG/NECK TRIMS",
            price: "$15+",
          },
          {
            name: "SPECIALTY HAIRCUTTING",
            price: "$65+",
          },
        ],
      },
      {
        name: "Hair Color",
        children: [
          {
            name: "ALL OVER COLOR",
            price: "$80+",
          },
          {
            name: "PARTIAL FOIL HIGHLIGHTS",
            price: "$100+",
          },
          {
            name: "FULL FOIL",
            price: "$115+",
          },
          {
            name: "ACE FRAME HIGHLIGHTS",
            price: "$75+",
          },
          {
            name: "BALAYAGE/FOILAYAGE",
            price: "$155+",
          },
          {
            name: "GLOSS",
            price: "$50+",
          },
          {
            name: "DOUBLE PROCESS COLOR",
            price: "$135+",
          },
        ],
      },
      {
        name: "Hair Styling",
        children: [
          {
            name: "BLOW OUT",
            price: "$30+",
          },
          {
            name: "UPDO & SPECIAL OCCASIONS",
            price: "$65+",
          },
          {
            name: "BRIDAL STYLE",
            price: "$75+",
          },
        ],
      },
    ]);
    return { type };
  },
};
</script>
<style></style>
