<template>
  <div class="selectContainer">
    <!-- <img src="@/assets/en.png" alt="en">
    <img src="@/assets/es.png" alt="es"> -->

    <!-- <v-select :options="['Canada', 'United States']"></v-select> -->
    <!-- <v-select :options="options" label="country" :reduce="country => country.code" /> -->
    <!-- <select v-model="$i18n.locale" class="barranav__container__list__item__select">
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang"
        :style="{ 'background-image': 'url(' + `@/assets/en.svg` + ')' }">
          <span v-if="lang === 'en'">English</span>
          <span v-if="lang === 'es'">Spanish</span>
      </option>
    </select> -->

    <!-- <v-select :options="options" label="title">
      <template>
          <img :src="option.cardImage" />
          {{ option.title }}
      </template>
    </v-select> -->

    	<div class="aselect" :data-value="value" :data-list="list">
        <div class="selector" @click="toggle()">
          <div class="label">
            <span v-if="lang == 'en'">English</span>
            <span v-if="lang == 'es'">Español</span>
          </div>
        <div class="arrow" :class="{ expanded : visible }"></div>
          <div :class="{ hidden : !visible, visible }">
            <ul>
              <div v-for="item in list" @click="select(item)" :key="item">
                 <li :class="{ current : item === value }" v-if="item !== value">
                  <span v-if="lang == 'es'">English</span>
                  <span v-if="lang == 'en'">Español</span>              
                </li>
              </div>
             
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>



<script>
import { mapActions } from "vuex";

export default {
  name: 'SwitchLocale',
  computed: {
    lang: function () {
      // let lang = localStorage.getItem('lang')
      // return this.$i18n.locale
      return this.$store.getters.getLocale
      
      // if(lang) {
      //   return lang
      // } else {
      //   return this.$i18n.locale
      // }
    }
  },
  data() {
    return { 
      value: 'en',
      list: ["en", "es"],
      visible: false 
    }
  },
  methods: {
    ...mapActions({
      changeLocale: "changeLocale",
    }),
    toggle() {
      this.visible = !this.visible;
    },
    select(locale) {
      this.value = locale;
      this.$i18n.locale = locale
      this.$store.dispatch('changeLocale', locale)
      localStorage.setItem('locale', locale)
      // alert(this.$store.getters.getLocale)
      // localStorage.setItem('lang', this.value)
    } 
  } 
}
</script>

<style lang="scss" scoped>
.selectContainer {
  height: 44px;
  & select {
    width: 60px;
    height: 44px;
    /* background: transparent; */
    border: 1px solid #000;
    position: relative;
    /*bottom: 5px;
     line-height: 49px;
    height: 38px;
    font-size: 22px;
    outline: 0; */
    /* margin-bottom: 15px; */
}
}

/* .barranav__container__list__item__select {
  margin-bottom: -15px;
} */

.aselect {
  width: 120px;
  border-radius: 6px;
  // margin: 20px auto;
}
.aselect .selector {
  border: 1px solid gainsboro;
  background: #F8F8F8;
  position: relative;
  z-index: 1;
  cursor: pointer;
  border-radius: 6px;
}
.aselect .selector .arrow {
  position: absolute;
  right: 10px;
  top: 40%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #888;
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
}
.aselect .selector .expanded {
  transform: rotateZ(180deg) translateY(2px);
}
.aselect .selector .label {
  display: block;
  padding: 12px;
  font-size: 16px;
  color: #888;
  background: #fff;
  cursor: pointer;
}
.aselect ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  border: 1px solid gainsboro;
  position: absolute;
  z-index: 1;
  background: #fff;
  border-radius: 6px;
}
.aselect li {
  padding: 12px;
  color: #666;
}
.aselect li:hover {
  // color: white;
  cursor: pointer;
  // background: seagreen;
}
.aselect .current {
  background: #eaeaea;
}
.aselect .hidden {
  visibility: hidden;
}
.aselect .visible {
  visibility: visible;
}

</style>