<template>
  <div class="w-full fixed z-50 bg-zinc-900">
    <div class="w-full b">
      <nav
        class="w-11/12 mx-auto bg-zinc-900 text-white p-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:flex md:items-center md:justify-between relative z-50"
      >
        <div class="flex justify-between items-center">
          <span
            class="prevent-select p-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl fw-bold font-serif cursor-pointer"
            ><a href="/" @click="setActivePage('home')"
              >Barbershop<span class="text-orange-500"> Gold</span></a
            >
          </span>
          <!-- button toggle small screen -->
          <div class="flex">
            <span
              class="cursor-pointer mx-2 md:hidden block p-2 navbar-toggle"
              @click="toggleMenu($event)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </span>
          </div>
        </div>
        <!-- menu table -->
        <div>
          <ul
            class="md:flex font-serif text-start z-20 space-x-2 md:space-x-6 lg:space-x-9 md:static absolute opacity-0 w-full md:opacity-100 top-[-400px] transition-all ease-in duration-500"
          >
            <li class="p-2" v-for="(item, index) in navItems" :key="index">
              <a
                :href="item.href"
                class="transition-all duration-300"
                :class="{
                  'text-orange-500': activePage === item.id,
                  'text-white': activePage !== item.id,
                  'text-orange-500 bg-white p-2 md:px-4 lg:px-5':
                    activePage === item.id && index === navItems.length - 1,

                  'bg-orange-500 text-white p-2 md:px-4 lg:px-5':
                    activePage !== item.id && index === navItems.length - 1,
                }"
                @click="setActivePage(item.id)"
              >
                {{ item.text }}
              </a>
            </li>
            <!-- <li class="bg-orange-500 p-1 px-2 sm:p-2 sm:px-3 md:px-4 lg:px-5">
              <a href="contact">Contact</a>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
    <!-- samall screen -->
    <div
      class="text-white font-serif text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-full mx-auto relative text-center"
    >
      <ul
        :class="{
          'top-[0px] opacity-100': isMenuOpen,
          'top[-80px] opacity-0': !isMenuOpen,
        }"
        class="w-full md:hidden bg-zinc-900 bg-opacity-75 cursor-pointer z-10 md:static absolute opacity-0 left-0 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 top-[-400px] transition-all ease-in duration-500"
      >
        <li class="p-2" v-for="(item, index) in navItems" :key="index">
          <a
            :href="item.href"
            class="transition-all duration-300"
            :class="{
              'text-orange-500': activePage === item.id,
              'text-white': activePage !== item.id,
              'text-orange-500 bg-white font-bold p-1 px-2 sm:p-2 sm:px-3':
                activePage === item.id && index === navItems.length - 1,

              'bg-orange-500 text-white font-bold p-1 px-2 sm:p-2 sm:px-3 ':
                activePage !== item.id && index === navItems.length - 1,
            }"
            @click="setActivePage(item.id)"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  components: {},
  // props: ["pageId"],
  data() {
    return {
      activePage: "",
      navItems: [
        { id: "home", text: "Home", href: "/" },
        { id: "about", text: "About", href: "/about" },
        { id: "services", text: "Services", href: "/services" },
        { id: "gallery", text: "Gallery", href: "/gallery" },
        { id: "contact", text: "Contact", href: "/contact" },
      ],
    };
  },
  mounted() {
    // Retrieve the active page from localStorage when the component is mounted
    this.setActivePageByUrl();
  },
  methods: {
    setActivePageByUrl() {
      const currentPath = window.location.pathname;
      for (const item of this.navItems) {
        if (item.href === currentPath) {
          this.activePage = item.id;
          return;
        }
      }
      // If the current path doesn't match any navigation item, default to home
      this.activePage = "home";
    },
    setActivePage(pageId) {
      this.activePage = pageId;
      // Store the active page in localStorage
      localStorage.setItem("activePage", pageId);
    },
  },
  setup() {
    const isMenuOpen = ref(false);
    function toggleMenu(event) {
      event.stopPropagation(); // Stop the propagation of the click event
      isMenuOpen.value = !isMenuOpen.value;
    }

    function handleClickOutside(event) {
      if (isMenuOpen.value) {
        // Check if the clicked element is outside the menu or the toggle button
        if (!event.target.closest(".navbar-toggle")) {
          isMenuOpen.value = false;
        }
      }
    }
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>
<style>
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
