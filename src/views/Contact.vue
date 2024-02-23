<template>
  <div>
    <!-- header -->
    <div>
      <navbar />
    </div>
    <div class="w-full relative top-14 bg-zinc-700">
      <!-- Banner -->
      <div class="w-full relative md:top-3 h-auto text-white font-mono">
        <img class="w-full h-full object-cover" src="@/assets/Images/11.jpg" />
        <div
          class="w-full h-full bg-opacity-50 top-0 left-0 absolute bg-black flex flex-col justify-center items-center"
        >
          <div
            class="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white text-opacity-50"
          >
            Contact
          </div>
        </div>
      </div>
      <frmContact />
      <div class="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630182.5978174377!2d-118.77650715408404!3d37.05866546763077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2skh!4v1708313863547!5m2!1sen!2skh"
          class="w-full h-80 sm:h-96"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <fooTer />
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import frmContact from "@/components/frmContact";
import fooTer from "@/components/fooTer";
export default {
  name: "contact",
  components: { navbar, frmContact, fooTer },
  setup() {},
};
</script>
<style></style>
