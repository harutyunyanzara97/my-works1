<template>
  <div class="footer">
    <div class="footer__container">
      <div  class="footer__top">
          <nav>
            <ul class="footer__menu">
              <li class="footer__container__list__item">
                <router-link :to="{ name: 'Features' }" class="footer__container__list__item__link">{{ $t('Features') }}</router-link>
              </li>
              <li class="footer__container__list__item">
                <router-link :to="{ name: 'Pricing' }" class="footer__container__list__item__link">{{ $t('Pricing') }}</router-link>
              </li>
              <li class="footer__container__list__item">
                <router-link :to="{ name: 'Contact' }" class="footer__container__list__item__link">{{ $t('Contact') }}</router-link>
              </li>
            </ul>
          </nav>
          <div class="footer__icons">
              <a href="https://www.facebook.com/" target="_blank"><img src="@/assets/facebook.png" class="footer__icons__item"/></a>
              <a href="https://www.instagram.com/" target="_blank"><img src="@/assets/instagram.png" class="footer__icons__item"/></a>
              <a href="https://www.pinterest.com/" target="_blank"><img src="@/assets/pinterest.png" class="footer__icons__item"/></a>
          </div>
      </div>
      <div  class="footer__bottom">
          <nav>
            <ul class="footer__smal__menu">
              <li class="footer__smal__list__item">
                <router-link :to="{ name: 'Legal' }" class="footer__smal__list__item__link">{{ $t('Legal noice') }}</router-link>
              </li>
              <li class="footer__smal__list__item">
                <router-link :to="{ name: 'Privacy' }" class="footer__smal__list__item__link">{{ $t('Privacy Policy') }}</router-link>
              </li>
              <li class="footer__smal__list__item">
                <router-link :to="{ name: 'Cookie' }" class="footer__smal__list__item__link">{{ $t('Cookie Preferences') }}</router-link>
              </li>
            </ul>
          </nav>
           
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: absolute;
  // bottom: 0;
  margin-top: -113.2px;
  display: block;
  align-items: center;
  background-color: #D3D3D399;
  backdrop-filter: blur(4px);
  // height: 4em;
  padding: 17px 15px 20px;
  box-sizing: border-box;
  &__container {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    &__list__item{
      list-style: none;
      &__link{
        text-decoration: none;
        color: black;
        margin-right: 125px;
      }
    }
  }
  &__menu{
    display: flex;
    align-items: center;
    margin: 0;
  }
  &__smal__menu{
    display: flex;
    align-items: center;
    margin: 0;
  }
  &__smal{
    &__list__item{
      // margin-left: 15px;
      list-style: none;
      position: relative;
      &::after{
        position: absolute;
        width: 5px;
        height: 5px;
        background: black;
        border-radius:50%;
        transform: translateY(-50%);
        content: "";
        top: 50%;
        right: 20px;
      }
      &__link{
        text-decoration: none;
        color: black;
        margin-right: 40px;
      }
    }
    &__list__item:nth-last-child(1){
      &::after{
        display: none;
      }
    }
  }
  &__top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 14px;
  }
  &__bottom{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 11px;
    box-sizing: border-box;
  }
  &__icons{
    display: flex;
    &__item{
      margin-left: 10px;
    }
  }
}
</style>