<template>
    <Header />
    <HomeImage />
    <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import HomeImage from "@/components/HomeImage.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    HomeImage,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

</style>
