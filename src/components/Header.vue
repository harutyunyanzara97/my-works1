<template>
  <div class="barranav">
    <div class="barranav__container">
      <router-link :to="{ name: 'Home' }">
        <img
          class="barranav__container__list__item__img"
          src="@/assets/logo.png"
          alt=""
        />
      </router-link>
      <ul class="barranav__container__list">
          <li class="barranav__container__list__item">
            <router-link :to="{ name: 'Features' }" class="barranav__container__list__item__link">  {{ $t('Features') }} </router-link>
          </li>
          <li class="barranav__container__list__item">
            <router-link :to="{ name: 'Pricing' }" class="barranav__container__list__item__link"> {{ $t('Pricing') }} </router-link>
          </li>
          <li class="barranav__container__list__item">
            <router-link :to="{ name: 'Contact' }" class="barranav__container__list__item__link"> {{ $t('Contact') }}  </router-link>
          </li>

          <!-- <li class="barranav__container__list__item">
            <router-link
              :to="{ name: 'dashboard' }"
              class="barranav__container__list__item__link"
            >
              {{ $t('Dashboard') }}
            </router-link>
          </li> -->
      </ul>

        

      <!-- <ul class="barranav__right__list">
        <li class="barranav__right__list__item">
          <router-link
            :to="{ name: 'login' }"
            class="barranav__right__list__item__link"
          >
            {{ $t('Login') }}  
          </router-link>
        </li>
        <li class="barranav__right__list__item">
          <switch-locale />
        </li>
      </ul> -->
      <div class="barranav__login">
        <router-link
          :to="{ name: 'Signup' }"
          class="barranav__right__list__item__link"
        >
        <p class="barranav__container__list__item__link">  
          {{ $t('Sign up') }}  
        </p>
        </router-link>
        <router-link
            :to="{ name: 'Login' }"
            class="barranav__right__list__item__link"
          >
          <button  class="barranav__container__list__item__btn">
            {{ $t('Login') }} 
          </button>
        </router-link>
        <!-- <select class="barranav__container__list__item__select">
          <option>EN</option>
          <option>ES</option>
        </select> -->

        <switch-locale />
      </div>
    
    </div>
  </div>
</template>

<script>
import SwitchLocale from "@/components/SwitchLocale.vue";

export default {
  name: "Header",
  components: {
    SwitchLocale
  }
};
</script>

<style lang="scss" scoped>
.barranav {
  width: 100%;
  display: flex;
  align-items: center;
  height: 97px;
  background-color: #DDDDDD99;
  backdrop-filter: blur(4px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &__container {
    width: 1500px;
    padding: 0 15px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__list {
      display: flex;
      align-items: center;
      margin: 0;
      &__item {
        list-style: none;
        padding: 10px 1em 10px 1em;
        box-sizing: border-box;
        &__link {
          text-decoration: none;
          color: $color1;
          font-size: 18px;
          margin-bottom: 0;
          font-family: $ff-1;
          font-weight: bold;
          white-space: nowrap;
        }
        &__btn{
          background: #3A3A3A;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
          color: white;
          font-family: $ff-1;
          white-space: nowrap;
          margin-left: 19px;
          margin-right: 19px;
          padding: 14px 74px;
          box-sizing: border-box;
          cursor: pointer;
        }
        &__img {
          height: 40px;
          width: 40px;
        }
        &__select{
          margin-bottom: 0;
        }
      }
    }
  }
  &__login{
    display: flex;
    align-items: center;
  }
  
}
</style>