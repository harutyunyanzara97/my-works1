<template>
  <div class="homeImage">
    <img
      class="homeImage__img"
      src="@/assets/solar-working.png"
      alt="solar-working-img"
    />
    <div class="homeImage__container">
      <div class="homeImage__content">
        <h1>LOREM IPSUM DOLOR SIT AMET</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum amet cursus gravida nisl, senectus habitant sit nunc. Egestas massa eu eget odio mollis in ipsum malesuada.</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeImage",
};
</script>

<style lang="scss" scoped>
.homeImage {
  display: block;
  position: relative;
  &__img {
    width: 100px;
    height: 100vh;
    min-height: 500px;
    width: 100%;
    object-fit: cover;
  }
  &__container{
    margin: 0 auto;
    width: 100%;
    max-width: 1500px;
    padding: 0 15px;
    box-sizing: border-box;
  }
  &__content{
    top: 50%;
    max-width: 800px;
    width: 100%;
    // padding: 0 50px;
    transform: translateY( -50%);
    position: absolute;
  }
}
</style>

