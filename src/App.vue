<template>
  <!-- <div id="nav">
    <router-link to="/"> {{ $t('Home') }} </router-link> |
    <router-link to="/secure"> {{ $t('Secure') }} </router-link> |
    <router-link v-if="!isLoggedIn" to="/signup"> {{ $t('Signup') }} </router-link> |
    <router-link v-if="!isLoggedIn" to="/login"> {{ $t('Login') }}</router-link>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
  </div>
  <SwitchLocale /> -->
  <router-view />
</template>

<script>
// import SwitchLocale from './components/SwitchLocale.vue'

export default {
  name: 'App',
  components: {
    // SwitchLocale
  },
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn }
  },
  beforeMount() {
    // alert(this.$store.getters.getLocale)
    let locale =  this.$store.getters.getLocale
    this.$i18n.locale = locale

    window.scrollTo(0,0);
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/')
      })
    }
  },
  // created: function () {
  //   this.$http.interceptors.response.use(undefined, function (err) {
  //     return new Promise(function (resolve, reject) {
  //       if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //         this.$store.dispatch(logout)
  //       }
  //       throw err;
  //     });
  //   });
  // }
}
</script>


<style lang="scss">
* {
  font-family: 'Montserrat';
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
