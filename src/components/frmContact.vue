<template>
  <div>
    <div
      class="w-11/12 mx-auto md:mt-16 grid grid-cols-1 md:grid-cols-2 justify-between mb-5 sm:mb-9 md:mb-11 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <div class="w-full mt-3 px-5">
        <div
          class="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif font-bold"
        >
          Address
        </div>
        <div class="w-full py-1 md:py-2 md:space-y-1">
          <p>Street: 3871 Cemetery Street</p>
          <p>City: Salinas</p>
          <p>State/province/area: California</p>
          <p>Phone number: 111-222-3333</p>
          <p>Country: United States</p>
        </div>
        <!-- <div class="flex space-x-3 my-3 text-black">
          <div
            class="w-fit h-fit px-2.5 font-bold rounded-full bg-white bg-opacity-50 hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            f
          </div>
          <div
            class="w-fit h-fit px-1.5 font-bold rounded-full bg-white bg-opacity-50 bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition duration-300 cursor-pointer"
          >
            ig
          </div>
        </div> -->
      </div>
      <div class="w-full mt-3 px-5">
        <div
          class="text-orange-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif font-bold"
        >
          Get in Touch
        </div>
        <div class="w-full">
          <form
            class="w-full py-1 md:py-2 space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5"
          >
            <div
              class="justify-between flex space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5"
            >
              <div class="relative z-0 w-full group">
                <input
                  type="text"
                  name=""
                  id=""
                  class="block py-2.5 px-0.5 w-full text-sm text-white bg-transparent border-2 border-white appearance-none focus:outline-none peer"
                  placeholder=""
                  required
                />
                <label
                  for=""
                  class="peer-focus:font-medium peer-focus:z-10 peer-focus:bg-zinc-700 peer-focus:ml-0.5 px-0.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white-50 peer-focus:dark:text-white-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Name</label
                >
              </div>
              <div class="relative z-0 w-full group">
                <input
                  type="email"
                  name=""
                  id=""
                  class="block py-2.5 px-0.5 w-full text-sm text-white bg-transparent border-2 border-white appearance-none focus:outline-none peer"
                  placeholder=""
                  required
                />
                <label
                  for=""
                  class="peer-focus:font-medium peer-focus:z-10 peer-focus:bg-zinc-700 peer-focus:ml-0.5 px-0.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white-50 peer-focus:dark:text-white-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Email Address</label
                >
              </div>
            </div>
            <div class="relative z-0 w-full group">
              <input
                type="text"
                name=""
                id=""
                class="block py-2.5 px-0.5 w-full text-sm text-white bg-transparent border-2 border-white appearance-none focus:outline-none peer"
                placeholder=""
                required
              />
              <label
                for=""
                class="peer-focus:font-medium peer-focus:z-10 peer-focus:bg-zinc-700 peer-focus:ml-0.5 px-0.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white-50 peer-focus:dark:text-white-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Subject</label
              >
            </div>
            <div class="relative z-0 w-full group">
              <textarea
                name=""
                id=""
                class="block py-2.5 px-0.5 w-full text-sm text-white bg-transparent border-2 border-white appearance-none focus:outline-none peer"
                rows="10"
                placeholder=""
                required
              ></textarea>
              <label
                for=""
                class="peer-focus:font-medium peer-focus:z-10 peer-focus:bg-zinc-700 peer-focus:ml-0.5 px-0.5 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white-50 peer-focus:dark:text-white-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Enter Message</label
              >
            </div>
            <div
              class="space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5 font-mono"
            >
              <button
                class="p-1 px-3 sm:p-2 sm:px-5 md:p-3 md:px-7 lg:px-9 border-2 border-white bg-transparent"
                type="submit"
              >
                Send
              </button>
              <button
                class="p-1 px-3 sm:p-2 sm:px-5 md:p-3 md:px-7 lg:px-9 bg-orange-500"
              >
                <a href="contact" @click="goTo">Contact</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goTo() {
      localStorage.setItem("activePage", "contact");
    },
  },
};
</script>
<style></style>
