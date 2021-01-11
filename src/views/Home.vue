<template>
  <div class="home">
    <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" alt="GRS Logo" src="@/assets/logo1-removebg.png" />
    <Landing />
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "Home",
  components: {
    Landing
  }
};
</script>
